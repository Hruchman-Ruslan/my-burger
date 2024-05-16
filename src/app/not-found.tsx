import React from "react";

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <main className="not-found">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
    </main>
  );
}
