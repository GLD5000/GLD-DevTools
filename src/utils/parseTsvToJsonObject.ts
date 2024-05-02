function objectifyTsv(tableData: string) {
  const quotedSection = /"([^"]*)"/g;
  function replaceLinebreaks(match: string): string {
    const replacedGroup = match
      .replaceAll('"', "")
      .trim()
      .replace(/\n/g, "||LineBreak||");
    return `${replacedGroup}`;
  }

  const [headerString, ...objectValueStrings] = tableData
    .replaceAll("﻿", "")
    .replaceAll(quotedSection, replaceLinebreaks)
    .split(/[\r\n]+/);
  const objectKeys = headerString.replaceAll(/[ ]/g, "").split(/\t/);
  const objectArray = createObjectObject(objectValueStrings, objectKeys);
  return objectArray;
}

function createObjectObject(
  objectValueStrings: string[],
  objectKeys: string[],
) {
  const returnObject: { [key: string]: Record<string, string> } = {};
  objectValueStrings.forEach((objectValueString) => {
    const newObject = makeNewObject(objectValueString.trim(), objectKeys);
    const newKey = Object.values(newObject)[0]
      .replaceAll(/(\/.+\/)/g, "")
      .replaceAll("-", "")
      .replaceAll(/(%2D)|(%20)/g, "-")
      .replaceAll("%5F", "_")
      .replaceAll(/(.jpg)|(.jpeg)|(.png)|(.mp4)/g, "");
    returnObject[newKey] = newObject;
  });
  return returnObject;
}

function makeNewObject(objectValueString: string, objectKeys: string[]) {
  const valueArray = objectValueString.trim().split(/[\t]/);
  const returnObject: Record<string, string> = {};
  valueArray.forEach((value, index) => {
    returnObject[`${objectKeys[index]}`] = value
      .trim()
      .replaceAll("||LineBreak||", "\n")
      .replaceAll(",", ", ")
      .replaceAll(",  ", ", ");
  });
  return returnObject;
}

export default function parseTsvToJsonObject(tsvIn: string) {
  return JSON.stringify(objectifyTsv(tsvIn));
}
