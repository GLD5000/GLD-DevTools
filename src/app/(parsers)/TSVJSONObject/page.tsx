import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parserTitle="Parse TSV Data To JSON Object"
      parsingFunction="parseTsvToJsonObject"
      placeholderText="TSV here using first column as keys"
    />
  );
}
