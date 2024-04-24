export default function textToParagraphArray(textIn: string) {
  const quotationMarks = `","`;
  const fullStop = ".";
  const invisibleCharacter = " ";
  return `["${textIn
    .trim() //
    .replaceAll(invisibleCharacter, "")
    .replaceAll(/(\. +)/g, fullStop)
    .replaceAll(/( *[\r\n]{1,} *)+/g, quotationMarks)}"]`;
}
