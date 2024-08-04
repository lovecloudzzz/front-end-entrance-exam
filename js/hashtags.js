import { setupEditableElement } from './editableElement';
import { setupContainer } from './container';
import '/css/hashtags.css';
import {
  loadExistingItems,
  cleanEmptyItemsFromLocalStorage,
  updateLocalStorage,
  addEditableElement,
} from './utils.js';

export function setupHashtags({
  initialHashtags = [],
  localStorageKeyPrefix = 'hashtag',
}) {
  cleanEmptyItemsFromLocalStorage(localStorageKeyPrefix);

  const existingItems = loadExistingItems(localStorageKeyPrefix);
  const container = setupContainer({
    elementType: 'section',
    className: 'hashtagList',
  });

  if (existingItems.length === 0) {
    initialHashtags.forEach((item, index) => {
      addEditableElement({
        container,
        item,
        index,
        elementType: 'h4',
        localStorageKeyPrefix,
        maxWidth: 95,
        maxHeight: 13,
        className: 'hashtag',
        setupEditableElement,
        updateLocalStorage,
        selector: 'h4',
      });
    });
  } else {
    existingItems.forEach((item, index) => {
      addEditableElement({
        container,
        item,
        index,
        elementType: 'h4',
        localStorageKeyPrefix,
        maxWidth: 95,
        maxHeight: 13,
        className: 'hashtag',
        setupEditableElement,
        updateLocalStorage,
        selector: 'h4',
      });
    });
  }

  return container;
}
