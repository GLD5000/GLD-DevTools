import { ReactNode } from "react";

export default function H1({ children }: { children: ReactNode }) {
  return <h1 className="w-fit mx-auto text-8xl font-bold">{children}</h1>;
}
