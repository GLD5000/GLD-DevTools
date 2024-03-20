import ParserForm from "@/components/ParserForm";

export default function Page() {
  return (
    <ParserForm
      parserTitle="Parse TSV To Markdown Bullet Points"
      parsingFunction="tsvToMdBulletPoints"
      placeholderText="TSV here..."
    />
  );
}
