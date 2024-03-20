import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parserTitle="Parse TSV To JSON Array"
      parsingFunction="tsvToJsonArray"
      placeholderText="TSV here..."
    />
  );
}
