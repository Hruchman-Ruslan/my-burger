"use client";

import { useFormStatus } from "react-dom";

export interface MealsFormSubmitProps {}

export default function MealsFormSubmit({}: MealsFormSubmitProps) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
