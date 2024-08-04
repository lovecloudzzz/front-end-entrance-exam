import { setupEditableElement } from './editableElement.js';
import { setupContainer } from './container.js';
import {
  logoAdobePhotoshop,
  logoAdobeIllustrator,
  logoAdobePremiere,
  logoChatGPT,
  logoCopilot,
  logoFigma,
  logoFramer,
  logoMeet,
  logoMidjourney,
  logoNotion,
  logoWebflow,
  logoWordpress,
  logoZapier,
} from './icons.js';

export function setupTools() {
  const title = setupEditableElement({
    elementType: 'h1',
    defaultValue: 'Tools',
    maxWidth: 100,
    maxHeight: 21,
    localStorageKey: 'toolsTitle',
  });

  const toolsContainer = setupContainer({
    elementType: 'section',
    className: 'toolsContainers',
  });

  const container1 = setupContainer({
    elementType: 'section',
    className: 'toolsContainer',
  });

  const container2 = setupContainer({
    elementType: 'section',
    className: 'toolsContainer',
  });

  const container3 = setupContainer({
    elementType: 'section',
    className: 'toolsContainer',
  });

  const toolsType1 = setupEditableElement({
    elementType: 'h5',
    defaultValue: 'design',
    maxWidth: 76,
    maxHeight: 11,
    localStorageKey: 'toolsType1',
    animationClass: 'blackBackgroundAnimation',
  });

  const toolsType2 = setupEditableElement({
    elementType: 'h5',
    defaultValue: 'no-code',
    maxWidth: 76,
    maxHeight: 11,
    localStorageKey: 'toolsType2',
    animationClass: 'blackBackgroundAnimation',
  });

  const toolsType3 = setupEditableElement({
    elementType: 'h5',
    defaultValue: 'artificial intelligence',
    maxWidth: 76,
    maxHeight: 11,
    localStorageKey: 'toolsType3',
    animationClass: 'blackBackgroundAnimation',
  });

  toolsType1.classList.add('toolsType');
  toolsType2.classList.add('toolsType');
  toolsType3.classList.add('toolsType');

  container1.appendChild(toolsType1);
  container2.appendChild(toolsType2);
  container3.appendChild(toolsType3);

  const icons1 = [
    { src: logoFigma, alt: 'Figma' },
    { src: logoAdobePhotoshop, alt: 'Adobe Photoshop' },
    { src: logoAdobeIllustrator, alt: 'Adobe Illustrator' },
    { src: logoAdobePremiere, alt: 'Adobe Premiere' },
    { src: logoNotion, alt: 'Notion' },
    { src: logoMeet, alt: 'Meet' },
  ];

  const icons2 = [
    { src: logoZapier, alt: 'Zapier' },
    { src: logoWebflow, alt: 'Webflow' },
    { src: logoFramer, alt: 'Framer' },
    { src: logoWordpress, alt: 'Wordpress' },
  ];

  const icons3 = [
    { src: logoChatGPT, alt: 'ChatGPT' },
    { src: logoCopilot, alt: 'Copilot' },
    { src: logoMidjourney, alt: 'Midjourney' },
  ];

  icons1.forEach((icon) => {
    const img = Object.assign(document.createElement('img'), {
      src: icon.src,
      alt: icon.alt,
      className: 'toolIcon',
    });
    container1.appendChild(img);
  });

  icons2.forEach((icon) => {
    const img = Object.assign(document.createElement('img'), {
      src: icon.src,
      alt: icon.alt,
      className: 'toolIcon',
    });
    container2.appendChild(img);
  });

  icons3.forEach((icon) => {
    const img = Object.assign(document.createElement('img'), {
      src: icon.src,
      alt: icon.alt,
      className: 'toolIcon',
    });
    container3.appendChild(img);
  });

  toolsContainer.appendChild(container1);
  toolsContainer.appendChild(container2);
  toolsContainer.appendChild(container3);

  return setupContainer({
    elementType: 'section',
    className: 'mainToolsContainer',
    childElements: [title, toolsContainer],
    animate: true,
  });
}
