function objectifyTsv(tableData: string) {
  const [headerString, ...objectValueStrings] = tableData
    .replaceAll("﻿", "")
    .split(/[\r\n]+/);
  const objectKeys = headerString.replaceAll(/[ ]/g, "").split(/[\t,]/);
  const objectArray = createObjectArray(objectValueStrings, objectKeys);
  return objectArray;
}

function createObjectArray(objectValueStrings: string[], objectKeys: string[]) {
  const returnArray: Array<Record<string, string>> = [];
  objectValueStrings.forEach((objectValueString) => {
    const newObject: Record<string, string> = makeNewObject(
      objectValueString.trim(),
      objectKeys,
    );
    returnArray.push(newObject);
  });
  return returnArray;
}

function makeNewObject(objectValueString: string, objectKeys: string[]) {
  const valueArray = objectValueString.trim().split(/[\t,]/);
  const returnObject: Record<string, string> = {};
  valueArray.forEach((value, index) => {
    returnObject[`${objectKeys[index]}`] = value
      .trim()
      .replaceAll(",", ", ")
      .replaceAll(",  ", ", ");
  });
  return returnObject;
}

export default function parseTsvToJsonArray(tsvIn: string) {
  return JSON.stringify(objectifyTsv(tsvIn));
}
