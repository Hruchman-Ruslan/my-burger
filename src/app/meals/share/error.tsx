"use client";

export interface ErrorProps {}

export default function Error({}: ErrorProps) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}
