import Tutorials from "@/markdown/tutorials/allTutorials.mdx";
import Apis from "@/markdown/apis/allApis.mdx";
import Parsers from "@/markdown/parsers/allParsers.mdx";

export default function Home() {
  return (
    <main className="grid w-full justify-center h-screen gap-20 items-center p-24 smooth-scroll">
      <div className="w-full h-fit max-w-[1000px] sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert px-2">
        <Tutorials />
      </div>
      <div className="w-full h-fit max-w-[1000px] sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert px-2">
        <Apis />
      </div>
      <div className="w-full h-fit max-w-[1000px] sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert px-2">
        <Parsers />
      </div>
    </main>
  );
}
