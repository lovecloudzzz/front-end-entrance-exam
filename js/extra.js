import '/css/extra.css';
import { setupContainer } from './container.js';
import { setupTags } from './tags.js';
import { setupContact } from './contact.js';
import { setupEditableElement } from './editableElement.js';

export function setupExtra() {
  const tagsHeader = setupEditableElement({
    elementType: 'h1',
    defaultValue: 'Interests',
    maxWidth: 240,
    maxHeight: 21,
    localStorageKey: 'tagsHeader',
  });
  const tags = setupTags({
    initialTags: [
      'branding',
      'design',
      'photography',
      'artificial intelligence',
      'illustration',
      'typography',
      'social networks',
      'research',
      'drone pilot',
      'games',
    ],
  });

  const tagsContainer = setupContainer({
    elementType: 'section',
    childElements: [tagsHeader, tags],
    className: 'tagsContainer',
  });

  const contact = setupContact();

  return setupContainer({
    elementType: 'section',
    childElements: [tagsContainer, contact],
    className: 'extra',
    animate: true,
  });
}
