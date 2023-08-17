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
  const pushLink = href[0] === "#";

  if (pushLink) {
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
