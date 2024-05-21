import type { Metadata } from "next";
import { Suspense } from "react";

import Link from "next/link";

import { IMeals } from "@/types/meals";
import { getMeals } from "@/lib/meals";

import MealsGrid from "@/components/meals/meals-grid";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

export interface MealsProps {}

async function Meals() {
  const meals = (await getMeals()) as IMeals[];

  return <MealsGrid meals={meals} />;
}

export default async function MealsPage({}: MealsProps) {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
