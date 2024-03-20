import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parserTitle="Parse TSV To GFM Table"
      parsingFunction="tsvToGfmTable"
      placeholderText="TSV here..."
    />
  );
}
