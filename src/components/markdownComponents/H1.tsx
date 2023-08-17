import { ReactNode } from "react";

export default function H1({ children }: { children: ReactNode }) {
  return (
    <h1
      id="top"
      className="w-fit mx-auto text:4xl sm:text-6xl xl:text-7xl font-bold"
    >
      {children}
    </h1>
  );
}
