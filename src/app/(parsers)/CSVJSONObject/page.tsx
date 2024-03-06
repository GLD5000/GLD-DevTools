import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parserTitle="Parse CSV / TSV Image Data To JSON Object"
      parsingFunction="parseTsvToJsonObject"
      placeholderText="CSV / TSV here using first column as keys - Image address should be in first column"
    />
  );
}
