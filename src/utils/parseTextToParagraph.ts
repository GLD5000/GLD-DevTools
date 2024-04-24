export default function textToParagraphArray(textIn: string) {
  return `['${textIn.replaceAll(/( *[\r\n]{1,})+/g, "','")}']`;
}
