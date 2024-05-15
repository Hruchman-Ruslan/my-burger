import Link from "next/link";

import { IMeals } from "../types/meals";
import { getMeals } from "@/lib/meals";

import MealsGrid from "@/components/meals/meals-grid";

import classes from "./page.module.css";

export interface MealsProps {}

export default async function MealsPage({}: MealsProps) {
  const meals = (await getMeals()) as IMeals[];

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
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
