import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parsingFunction="tsvToGfmTable"
      placeholderText="CSV / TSV here..."
    />
  );
}
