import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.scss';
import renderApp from './app';

const mainElement = renderApp();
if (mainElement) {
  document.body.appendChild(mainElement);
} else {
  console.error('Failed to render the app.');
}
