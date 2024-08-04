
import { setupContainer } from './container.js';
import { setupEditableElement } from './editableElement.js';
import {
  loadExistingItems,
  cleanEmptyItemsFromLocalStorage,
  updateLocalStorage,
  addEditableElement,
} from './utils.js';

export function setupEditableList({
  listItems = [],
  localStorageKeyPrefix,
  itemMaxWidth,
}) {
  cleanEmptyItemsFromLocalStorage(localStorageKeyPrefix);

  const existingItems = loadExistingItems(localStorageKeyPrefix);
  const container = setupContainer({
    elementType: 'ul',
    className: 'editableList',
  });

  if (existingItems.length === 0) {
    listItems.forEach((item, index) => {
      addEditableElement({
        container,
        item,
        index,
        elementType: 'li',
        localStorageKeyPrefix,
        maxWidth: itemMaxWidth,
        setupEditableElement,
        updateLocalStorage,
        selector: 'li',
      });
    });
  } else {
    existingItems.forEach((item, index) => {
      addEditableElement({
        container,
        item,
        index,
        elementType: 'li',
        localStorageKeyPrefix,
        maxWidth: itemMaxWidth,
        setupEditableElement,
        updateLocalStorage,
        selector: 'li',
      });
    });
  }

  return container;
}
