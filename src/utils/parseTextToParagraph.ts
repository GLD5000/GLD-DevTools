export default function textToParagraphArray(textIn: string) {
  const quotationMarks = `","`;
  return `["${textIn.replaceAll(/( *[\r\n]{1,})+/g, quotationMarks)}"]`;
}
