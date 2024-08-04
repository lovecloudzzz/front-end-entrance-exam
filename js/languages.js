import { setupContainer } from './container.js';
import { setupProgressBar } from './progressBar.js';
import { setupEditableElement } from './editableElement.js';

export function setupLanguages() {
  const title = setupEditableElement({
    elementType: 'h1',
    localStorageKey: 'languagesTitle',
    maxWidth: 243,
    maxLength: 27,
    maxHeight: 21,
    defaultValue: 'Languages',
  });

  const language1 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'language1',
    defaultValue: 'English',
    maxWidth: 65,
    maxHeight: 13,
    maxLength: 9,
  });

  const language2 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'language2',
    defaultValue: 'Malayalam',
    maxWidth: 65,
    maxHeight: 13,
    maxLength: 9,
  });

  const language3 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'language3',
    defaultValue: 'Hindi',
    maxWidth: 65,
    maxHeight: 13,
    maxLength: 9,
  });

  const progressBar1 = setupProgressBar('progressBar1');
  const progressBar2 = setupProgressBar('progressBar2');
  const progressBar3 = setupProgressBar('progressBar3', 65);

  const languageProgressBarContainer1 = setupContainer({
    elementType: 'section',
    childElements: [language1, progressBar1],
    className: 'languageProgressBarContainer',
  });

  const languageProgressBarContainer2 = setupContainer({
    elementType: 'section',
    childElements: [language2, progressBar2],
    className: 'languageProgressBarContainer',
  });

  const languageProgressBarContainer3 = setupContainer({
    elementType: 'section',
    childElements: [language3, progressBar3],
    className: 'languageProgressBarContainer',
  });

  const allLanguageProgressBarsContainer = setupContainer({
    elementType: 'section',
    childElements: [
      languageProgressBarContainer1,
      languageProgressBarContainer2,
      languageProgressBarContainer3,
    ],
    className: 'listLanguages',
  });

  return setupContainer({
    elementType: 'section',
    childElements: [title, allLanguageProgressBarsContainer],
    className: 'languagesBox',
    animate: true,
  });
}
