import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parserTitle="Parse Text to Paragraph Array"
      parsingFunction="textToParagraphArray"
      placeholderText="Text here..."
    />
  );
}
