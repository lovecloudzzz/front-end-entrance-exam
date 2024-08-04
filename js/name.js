import { setupEditableElement } from './editableElement.js';
import { setupContainer } from './container.js';

export function setupName() {
  const nameInput = setupEditableElement({
    localStorageKey: 'name',
    defaultValue: 'Karthik SR',
    maxWidth: 100,
    maxHeight: 30,
  });

  const roleInput = setupEditableElement({
    elementType: 'h2',
    localStorageKey: 'role',
    defaultValue: 'UX/UI Designer',
    maxWidth: 100,
    maxHeight: 36,
  });

  const greetingInput = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'greeting',
    defaultValue: 'Hello 👋🏻 I’m',
    maxWidth: 100,
    maxHeight: 23,
  });

  const info = setupContainer({
    elementType: 'section',
    localStorageKey: 'info',
    childElements: [nameInput, roleInput],
    className: 'info',
  });

  return setupContainer({
    elementType: 'section',
    childElements: [greetingInput, info],
    className: 'name',
    animate: true,
  });
}
