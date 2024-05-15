import { IMeals } from "@/types/meals";

import MealItem from "./meal-item";

import classes from "./meals-grid.module.css";

export interface MealsGridProps {
  meals: IMeals[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
