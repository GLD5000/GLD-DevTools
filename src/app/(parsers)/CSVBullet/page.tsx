import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parserTitle="Parse CSV / TSV To GFM Bullet Points"
      parsingFunction="tsvToMdBulletPoints"
      placeholderText="CSV / TSV here..."
    />
  );
}
