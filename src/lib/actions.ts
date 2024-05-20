"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { IAddMeal } from "@/types/meals";

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  } as IAddMeal;

  await saveMeal(meal);
  redirect("/meals");
}