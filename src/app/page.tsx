import Link from "next/link";
import Tutorials from "@/markdown/tutorials/allTutorials.mdx";
import Apis from "@/markdown/apis/allApis.mdx";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 smooth-scroll">
      <div className="w-full h-fit max-w-[1000px] sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert mx-auto px-2">
        <Tutorials />
      </div>{" "}
      <div className="w-full h-fit max-w-[1000px] sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert mx-auto px-2">
        <Apis />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          GLD API Hub
        </p>
        <div className="grid gap-4">
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="/client"
            prefetch={false}
          >
            See Your Computer Information
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="/timestamp"
            prefetch={false}
          >
            Get the Current Time and Date
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="/timestamp/06/09/2022"
            prefetch={false}
          >
            Get the MM/DD/YYYY: 06/09/2022 Time and Date
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="/timestamp/?date=07/04/2022"
            prefetch={false}
          >
            Get the MM/DD/YYYY: 07/04/2002 Time and Date
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="/timestamp/1654729200000"
            prefetch={false}
          >
            Get the UNIX: 1654729200000 Time and Date
          </Link>
          <Link target="_blank" referrerPolicy="no-referrer" href="/parsers">
            Parsers
          </Link>
        </div>
      </div>
    </main>
  );
}
