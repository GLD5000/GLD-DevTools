import { ReactNode } from "react";

export default function H1({ children }: { children: ReactNode }) {
  return <pre className="border border-l-4 font-bold">{children}</pre>;
}
