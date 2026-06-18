import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ReactUI.jsx'
import initGame from '../ReactComponents/initGame.js';

createRoot(document.getElementById('ui')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
initGame();
