import '/css/contact.css';
import { setupContainer } from './container.js';
import { setupEditableElement } from './editableElement.js';

export function setupContact() {
  const contactHeader = setupEditableElement({
    elementType: 'h1',
    defaultValue: 'Let´s chat! I´m ready to work on exciting projects',
    maxWidth: 243,
    animationClass: 'blackBackgroundAnimation',
    localStorageKey: 'contactsHeader',
  });

  const contactEmail = setupEditableElement({
    elementType: 'h4',
    defaultValue: 'srkarthik.designscape@gmail.com',
    maxWidth: 243,
    animationClass: 'blackBackgroundAnimation',
    localStorageKey: 'email',
  });

  return setupContainer({
    elementType: 'section',
    className: 'contactContainer',
    childElements: [contactHeader, contactEmail],
    animate: true,
  });
}
