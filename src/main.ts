import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.scss';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <h1>h1 heading</h1>
    <h2>h2 heading</h2>
    <h3>h3 heading</h3>
    <h4>h4 heading</h4>
    <h5>h5 heading</h5>
    <h6>h6 heading</h6>
    <p>Paragraph - Lorem <i>ipsum</i> dolor sit amet, <b>consectetur</b> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="text-small">Small - Lorem <em>ipsum</em> dolor sit amet, <strong>consectetur</strong> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <a href="#">Link</a>
    <button>Button</button>
    <button class="btn-primary">primary</button>
    <i class="fas fa-heart"></i>
    <div>
      <button class="btn-primary">Default</button>
      <button class="btn-secondary">Default</button>
      <button class="btn-tertiary">Default</button>
    </div>
    <div>
      <button class="btn-primary">Icon <i class="fa-solid fa-star"></i></button>
      <button class="btn-secondary">Icon <i class="fa-solid fa-star"></i></button>
      <button class="btn-tertiary">Icon <i class="fa-solid fa-star"></i></button>
    </div>
    <div>
      <button class="btn-primary btn-play"><i class="fa-solid fa-play"></i></button>
      <button class="btn-secondary btn-play"><i class="fa-solid fa-play"></i></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
