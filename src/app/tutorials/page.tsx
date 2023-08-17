import HtmlMd from "@/markdown/tutorials/html.mdx";

export default function page() {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-2 sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert motion-safe:scroll-smooth">
      <HtmlMd />
    </div>
  );
}
