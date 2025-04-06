import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="flex items-center justify-center">
    <h1 class="text-3xl">Hello world!</h1>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
