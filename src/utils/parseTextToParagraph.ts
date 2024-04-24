export default function textToParagraphArray(textIn: string) {
  const quotationMarks = `","`;
  const fullStop = ".";
  return `["${textIn
    .trim()
    .replaceAll(/(\. +)/g, fullStop)
    .replaceAll(/( *[\r\n]{1,} *)+/g, quotationMarks)}"]`;
}
