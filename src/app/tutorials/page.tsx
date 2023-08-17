import HtmlMd from "@/markdown/tutorials/html.mdx";

export default function page() {
  // const prefersMotion = matchMedia(
  //   "(prefers-reduced-motion: no-preference)"
  // ).matches;
  return (
    <main
      id="main"
      className="w-screen max-h-screen overflow-y-scroll smooth-scroll"
      // style={{
      //   scrollBehavior: prefersMotion ? "smooth" : "auto",
      // }}
    >
      <div className="w-full h-fit max-w-[1000px] sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert mx-auto px-2">
        <HtmlMd />
      </div>
    </main>
  );
}
