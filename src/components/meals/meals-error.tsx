import { ReactNode } from "react";

import classes from "./meals-error.module.css";

export interface MealErrorProps {
  children: ReactNode;
}

export default function MealsError({ children }: MealErrorProps) {
  return <p className={classes.error}>{children}</p>;
}
