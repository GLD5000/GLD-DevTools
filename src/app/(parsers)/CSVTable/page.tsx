import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parserTitle="Parse CSV / TSV To GFM Table"
      parsingFunction="tsvToGfmTable"
      placeholderText="CSV / TSV here..."
    />
  );
}
