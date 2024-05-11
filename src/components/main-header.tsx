import React from "react";
import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";

export interface MainHeaderProps {}

export default function MainHeader({}: MainHeaderProps) {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        NextLevel food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
