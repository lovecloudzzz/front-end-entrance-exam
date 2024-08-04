import { setupEditableElement } from './editableElement';
import { setupContainer } from './container';
import {
  loadExistingItems,
  cleanEmptyItemsFromLocalStorage,
  updateLocalStorage,
  addEditableElement,
} from './utils.js';

export function setupTags({
  initialTags = [],
  localStorageKeyPrefix = 'tag',
  elementType = 'h3',
  className = 'tag',
  maxWidth = 210,
  maxHeight = 23,
  maxLength = 25,
  animationClass = 'whiteBackgroundAnimation',
}) {
  cleanEmptyItemsFromLocalStorage(localStorageKeyPrefix);

  const existingItems = loadExistingItems(localStorageKeyPrefix);
  const container = setupContainer({
    elementType: 'section',
    className: 'tagList',
  });

  if (existingItems.length === 0) {
    initialTags.forEach((item, index) => {
      addEditableElement({
        container,
        item,
        index,
        elementType,
        localStorageKeyPrefix,
        maxWidth,
        maxHeight,
        maxLength,
        className,
        setupEditableElement,
        updateLocalStorage,
        selector: elementType,
        animationClass: animationClass,
      });
    });
  } else {
    existingItems.forEach((item, index) => {
      addEditableElement({
        container,
        item,
        index,
        elementType,
        localStorageKeyPrefix,
        maxWidth,
        maxHeight,
        maxLength,
        className,
        setupEditableElement,
        updateLocalStorage,
        selector: elementType,
        animationClass: animationClass,
      });
    });
  }

  return container;
}
