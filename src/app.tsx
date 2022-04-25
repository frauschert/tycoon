import * as React from "react";
import { createRoot } from "react-dom/client";
import Frame from "./fragments/Frame";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <Frame />
    <h1>Hello from React!</h1>
  </>
);
