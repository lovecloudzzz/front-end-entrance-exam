import '../css/style.css';
import { setupPhoto } from './photo.js';
import { setupName } from './name.js';
import { setupLanguages } from './languages.js';
import { setupExperience } from './expirience.js';
import { setupTools } from './tools.js';
import { setupEducation } from './education.js';
import { setupExtra } from './extra.js';
import { setupDownloadButton } from './downloadButton.js';

function initializeApp() {
  const app = document.querySelector('#app');

  if (app) {
    app.appendChild(setupPhoto());
    app.appendChild(setupName());
    app.appendChild(setupLanguages());
    app.appendChild(setupExperience());
    app.appendChild(setupTools());
    app.appendChild(setupEducation());
    app.appendChild(setupExtra());
    app.appendChild(setupDownloadButton());
  } else {
    console.error('#app not found!');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});
