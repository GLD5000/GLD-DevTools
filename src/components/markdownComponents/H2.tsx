import { ReactNode } from "react";

export default function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      id={`${children}`.replaceAll(" ", "")}
      className="w-fit mx-auto text-3xl sm:text-4xl xl:text-5xl font-bold text-center"
    >
      {children}
    </h2>
  );
}
