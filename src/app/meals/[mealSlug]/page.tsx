import Image from "next/image";

import { notFound } from "next/navigation";

import { IMeal } from "@/types/meals";
import { getMeal } from "@/lib/meals";

import classes from "./page.module.css";

export interface MealDetailsProps {
  params: { mealSlug: string };
}

export async function generateMetadata({ params }: MealDetailsProps) {
  const meal = getMeal(params.mealSlug) as IMeal;

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }: MealDetailsProps) {
  const meal = getMeal(params.mealSlug) as IMeal;

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
