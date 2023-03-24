import { createRoot } from "react-dom/client";

import { App } from "./App";

import "./scss/App.scss";

const rootHTML: HTMLDivElement = document.createElement("div");
rootHTML.id = "root";
document.body.appendChild(rootHTML);
const root = createRoot(rootHTML);
root.render(App);