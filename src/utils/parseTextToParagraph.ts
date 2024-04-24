export default function textToParagraphArray(textIn: string) {
  const quotationMarks = `","`;
  const invisibleCharacter = " ";
  return `["${textIn
    .trim() //
    .replaceAll(invisibleCharacter, "")
    .replaceAll(/( *[\r\n]{1,} *)+/g, quotationMarks)}"]`;
}
