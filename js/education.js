
import { setupEditableElement } from './editableElement.js';
import { setupContainer } from './container.js';
import { setupHashtags } from './hashtags.js';
import Like from '/iconLike.svg';

export function setupEducation() {
  const title = setupEditableElement({
    elementType: 'h1',
    localStorageKey: 'educationTitle',
    maxWidth: 243,
    maxLength: 27,
    maxHeight: 21,
    defaultValue: 'Education',
  });

  const date1 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'educationDate1',
    maxWidth: 80,
    maxHeight: 15,
    defaultValue: '2023',
  });

  const like = document.createElement('img');
  like.src = Like;
  like.alt = 'like';
  like.className = 'like';

  const education1Header = setupContainer({
    elementType: 'section',
    className: 'educationHeader',
    childElements: [date1, like],
  });

  const hashtagsHeader1 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'hashtagsHeader1',
    maxWidth: 100,
    maxHeight: 15,
    defaultValue: ' UI/UX',
  });

  const hashtags1 = setupHashtags({
    initialHashtags: [
      'UX',
      'UI',
      'research',
      'DesignSystem',
      'Ui',
      'wireframing',
      'figma',
      'Ux',
    ],
    localStorageKeyPrefix: 'hashtags1',
  });

  const hashtagsContainer1 = setupContainer({
    elementType: 'section',
    className: 'hashtagsContainer',
    childElements: [hashtagsHeader1, hashtags1],
  });

  const school1 = setupEditableElement({
    elementType: 'h4',
    localStorageKey: 'education1School',
    maxWidth: 100,
    maxHeight: 12,
    defaultValue: 'Coursera',
  });

  const education1Box = setupContainer({
    elementType: 'section',
    className: 'educationBox',
    childElements: [education1Header, hashtagsContainer1, school1],
  });

  const date2 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'educationDate2',
    maxWidth: 80,
    maxHeight: 15,
    defaultValue: '2024',
  });

  const hashtagsHeader2 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'hashtagsHeader2',
    maxWidth: 100,
    maxHeight: 15,
    defaultValue: 'Law',
  });

  const hashtags2 = setupHashtags({
    initialHashtags: ['law', 'legalStudies', 'contracts', 'internationalLaws'],
    localStorageKeyPrefix: 'hashtags2',
  });

  const hashtagsContainer2 = setupContainer({
    elementType: 'section',
    className: 'hashtagsContainer',
    childElements: [hashtagsHeader2, hashtags2],
  });

  const school2 = setupEditableElement({
    elementType: 'h4',
    localStorageKey: 'education2School',
    maxWidth: 100,
    maxHeight: 12,
    defaultValue: 'University of Kerala',
  });

  const education2Box = setupContainer({
    elementType: 'section',
    className: 'educationBox',
    childElements: [date2, hashtagsContainer2, school2],
  });

  const date3 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'educationDate3',
    maxWidth: 80,
    maxHeight: 15,
    defaultValue: '2025',
  });

  const hashtagsHeader3 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'hashtagsHeader3',
    maxWidth: 100,
    maxHeight: 15,
    defaultValue: 'Graphic design',
  });

  const hashtags3 = setupHashtags({
    initialHashtags: ['branding', 'web', 'illustration', 'adobe'],
    localStorageKeyPrefix: 'hashtags3',
  });

  const hashtagsContainer3 = setupContainer({
    elementType: 'section',
    className: 'hashtagsContainer',
    childElements: [hashtagsHeader3, hashtags3],
  });

  const school3 = setupEditableElement({
    elementType: 'h4',
    localStorageKey: 'education3School',
    maxWidth: 100,
    maxHeight: 12,
    defaultValue: 'Coursrea',
  });

  const education3Box = setupContainer({
    elementType: 'section',
    className: 'educationBox',
    childElements: [date3, hashtagsContainer3, school3],
  });

  const educationContainer = setupContainer({
    elementType: 'section',
    childElements: [education1Box, education2Box, education3Box],
    className: 'educationContainer',
  });

  return setupContainer({
    elementType: 'section',
    childElements: [title, educationContainer],
    className: 'education',
    animate: true,
  });
}
