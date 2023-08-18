import Tutorials from "@/markdown/tutorials/allTutorials.mdx";
import Apis from "@/markdown/apis/allApis.mdx";
import Parsers from "@/markdown/parsers/allParsers.mdx";
import Contents from "@/markdown/landingPage/mainContents.mdx";
import Templates from "@/markdown/landingPage/templateLinks.mdx";
import MdxWrapper from "@/components/markdownComponents/MdxWrapper";

export default function Home() {
  return (
    <main className="grid w-full justify-center h-screen gap-20 items-center p-24 overflow-y-scroll smooth-scroll-gld">
      <MdxWrapper>
        <Contents />
      </MdxWrapper>

      <MdxWrapper>
        <Templates />
      </MdxWrapper>

      <MdxWrapper>
        <Tutorials />
      </MdxWrapper>

      <MdxWrapper>
        <Apis />
      </MdxWrapper>

      <MdxWrapper>
        <Parsers />
      </MdxWrapper>
    </main>
  );
}
