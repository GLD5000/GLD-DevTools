import MarkDown from "@/markdown/tutorials/stripe.mdx";

export default function page() {
  return (
    <main
      id="main"
      className="w-screen max-h-screen overflow-y-scroll smooth-scroll-gld py-32"
    >
      <div className="w-full h-fit max-w-[1000px] py-32 sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert mx-auto px-2">
        <MarkDown />
      </div>
      <a
        className="underline mx-auto w-fit block my-10 font-bold underline-offset-4 hover:transition hover:underline-offset-2 focus:transition focus:underline-offset-2 cursor-pointer"
        href="#top"
      >
        Back to top
      </a>
    </main>
  );
}
