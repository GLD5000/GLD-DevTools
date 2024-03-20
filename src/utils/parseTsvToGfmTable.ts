export default function tsvToGfmTable(tsv: string) {
  const [headerArray, ...rowArrays] = splitCells(tsv);
  const headerRow = createGfmRow(headerArray);
  const numberOfColumns = headerArray.length;
  const underlineArray = new Array(numberOfColumns).fill("-");
  const underlineRow = createGfmRow(underlineArray);
  const bodyRows = createGfmRows(rowArrays);
  return [headerRow, underlineRow, ...bodyRows].join("\n");
}

function gfmReducer(
  accumulator: string,
  currentString: string,
  index: number,
  array: string[],
) {
  const pipe = " | ";
  const newString = `${accumulator}${pipe}${currentString}${
    1 + index === array.length ? " |" : ""
  }`;
  return newString;
}

function createGfmRow(rowArray: string[]) {
  return rowArray.reduce(gfmReducer, "");
}
function createGfmRows(rowArrays: string[][]) {
  return rowArrays.map((rowArray) => rowArray.reduce(gfmReducer, ""));
}
function splitCells(input: string) {
  const rows = input.split(/[\r\n]+/);
  return rows.map((row) => row.split(/\t/));
}
