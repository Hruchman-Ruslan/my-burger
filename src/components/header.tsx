import React from "react";

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to the burger site</h1>
    </>
  );
}
