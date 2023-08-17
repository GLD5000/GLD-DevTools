import { ReactNode } from "react";

export default function H3({ children }: { children: ReactNode }) {
  return (
    <h3
      id={`${children}`.replaceAll(" ", "")}
      className="text:2xl sm:text-3xl xl:text-4xl font-bold text-center"
    >
      {children}
    </h3>
  );
}
