export default function tsvToMdBulletPoints(tsv: string) {
  let newRow = true;
  let returnString = "- **";
  for (let i = 0; i < tsv.length; i += 1) {
    const isColumnBreak = tsv[i] === "\t" || tsv[i] === ",";
    const isRowBreak = tsv[i] === "\n";

    if (isColumnBreak && newRow) {
      returnString += "** - ";
      newRow = false;
    } else if (isColumnBreak && !newRow) {
      returnString += "   ";
    } else if (isRowBreak) {
      returnString += "\n- **";
      newRow = true;
    } else {
      returnString += tsv[i];
    }
  }

  return returnString;
}
