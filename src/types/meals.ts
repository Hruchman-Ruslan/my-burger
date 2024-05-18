export interface IMeals {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export interface IMeal {
  image: string;
  title: string;
  creator_email: string;
  creator: string;
  summary: string;
  instructions: string;
}

export interface IAddMeal {
  title: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
  image: File;
  slug?: string;
}
