"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function A({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const scrollLink = href[0] === "#";
  const internalLink = href[0] === "/";

  if (scrollLink) {
    return (
      <a
        href={href}
        id={`${children}`}
        className="underline underline-offset-4 hover:transition hover:underline-offset-2 focus:transition focus:underline-offset-2 cursor-pointer"
      >
        {children}
      </a>
    );
  }
  if (internalLink) {
    return (
      <Link
        href={href}
        id={`${children}`}
        className="underline underline-offset-4 hover:transition hover:underline-offset-2 focus:transition focus:underline-offset-2"
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      id={`${children}`}
      className="underline underline-offset-4 hover:transition hover:underline-offset-2 focus:transition focus:underline-offset-2"
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {children}
    </Link>
  );
}
