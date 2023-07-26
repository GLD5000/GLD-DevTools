import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <>
      <ParserForm
        parserTitle="Parse CSV / TSV To GitHub Flavoured Markdown Table"
        parsingFunction="tsvToGfmTable"
        placeholderText="CSV / TSV here..."
      />
      <ParserForm
        parserTitle="Parse CSV / TSV To Markdown Bullet Points"
        parsingFunction="tsvToMdBulletPoints"
        placeholderText="CSV / TSV here..."
      />
    </>
  );
}
