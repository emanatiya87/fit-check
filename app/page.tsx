import { Button } from "flowbite-react";
import { Component } from "./card/page";
import { DarkThemeToggle } from "flowbite-react";

export default function Page() {
  return (
    <>
      <DarkThemeToggle />
      <h2 className="textStyle">hello</h2>
      <Button>Click me</Button>
      <Component></Component>
    </>
  );
}
