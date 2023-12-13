import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parserTitle="Parse CSV / TSV To Markdown Bullet Points"
      parsingFunction="tsvToMdBulletPoints"
      placeholderText="CSV / TSV here..."
    />
  );
}
