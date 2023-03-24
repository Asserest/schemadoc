import { createRoot } from "react-dom/client";

import { App } from "./App";

import "./scss/App.scss";

const rootHTML: HTMLElement = document.getElementById("root");
const root = createRoot(rootHTML);
root.render(App);