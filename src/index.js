import React from "react";
import { createRoot } from "react-dom/client"; //wasn't here before

import App from "./App";

// ReactDom.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
