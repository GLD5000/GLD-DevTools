import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parserTitle="Parse CSV / TSV To JSON Array"
      parsingFunction="tsvToJsonArray"
      placeholderText="CSV / TSV here..."
    />
  );
}
