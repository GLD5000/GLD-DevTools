import MarkDown from "@/markdown/tutorials/search.mdx";

export default function page() {
  return (
    <main
      id="main"
      className="w-screen max-h-screen overflow-y-scroll smooth-scroll-gld"
    >
      <div className="w-full bg-black h-fit max-w-[1000px] py-32 sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert mx-auto px-2">
        <MarkDown />
      </div>
    </main>
  );
}
