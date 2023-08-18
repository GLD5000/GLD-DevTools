import { ReactNode } from "react";

export default function H4({ children }: { children: ReactNode }) {
  return (
    <h4 className="text:xl sm:text-2xl xl:text-3xl font-bold text-center">
      {children}
    </h4>
  );
}
