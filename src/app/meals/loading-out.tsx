import classes from "./loading.module.css";

export interface MealsLoadingPageProps {}

export default function MealsLoadingPage({}: MealsLoadingPageProps) {
  return <p className={classes.loading}>Fetching meals...</p>;
}
