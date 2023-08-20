import { ReactNode } from "react";

export default function MdxWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-fit max-w-[1000px] py-32 sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert px-2">
      {children}
    </div>
  );
}
