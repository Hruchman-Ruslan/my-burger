"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import classes from "./nav-link.module.css";

export interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <>
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? `${classes.link} ${classes.active}`
            : classes.link
        }
      >
        {children}
      </Link>
    </>
  );
}
