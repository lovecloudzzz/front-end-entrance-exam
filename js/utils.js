export const loadExistingItems = (localStorageKeyPrefix) => {
  const items = [];
  let index = 0;
  while (true) {
    const item = localStorage.getItem(`${localStorageKeyPrefix}-${index}`);
    if (item === null) break;
    items.push(item);
    index++;
  }
  return items;
};

export const cleanEmptyItemsFromLocalStorage = (localStorageKeyPrefix) => {
  let index = 0;
  while (true) {
    const item = localStorage.getItem(`${localStorageKeyPrefix}-${index}`);
    if (item === null) break;
    if (item.trim() === '') {
      localStorage.removeItem(`${localStorageKeyPrefix}-${index}`);
    }
    index++;
  }
};

export const updateLocalStorage = (
  container,
  localStorageKeyPrefix,
  selector
) => {
  container.querySelectorAll(selector).forEach((element, index) => {
    const text = element.innerText.trim();
    if (text !== '') {
      localStorage.setItem(`${localStorageKeyPrefix}-${index}`, text);
    } else {
      localStorage.removeItem(`${localStorageKeyPrefix}-${index}`);
    }
  });

  let i = 0;
  while (true) {
    const key = `${localStorageKeyPrefix}-${i}`;
    if (localStorage.getItem(key) === null) break;
    if (
      !Array.from(container.querySelectorAll(selector)).some(
        (element) => element.innerText.trim() === localStorage.getItem(key)
      )
    ) {
      localStorage.removeItem(key);
    }
    i++;
  }
};

export const addEditableElement = ({
  container,
  item,
  index,
  elementType,
  localStorageKeyPrefix,
  maxWidth,
  maxHeight,
  maxLength,
  className,
  animationClass,
  setupEditableElement,
  updateLocalStorage,
  selector,
}) => {
  const editableElement = setupEditableElement({
    elementType,
    localStorageKey: `${localStorageKeyPrefix}-${index}`,
    defaultValue: item,
    maxWidth,
    maxHeight,
    maxLength,
    animationClass,
  });

  if (className) {
    editableElement.classList.add(className);
  }

  editableElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const newIndex = container.children.length;
      const newItem = '';
      addEditableElement({
        container,
        item: newItem,
        index: newIndex,
        elementType,
        localStorageKeyPrefix,
        maxWidth,
        maxHeight,
        maxLength,
        className,
        animationClass,
        setupEditableElement,
        updateLocalStorage,
        selector,
      });
      updateLocalStorage(container, localStorageKeyPrefix, selector);

      const newElement = container.children[newIndex];
      newElement.focus();
    }
  });

  editableElement.addEventListener('blur', () => {
    if (editableElement.innerText.trim() === '') {
      editableElement.remove();
      updateLocalStorage(container, localStorageKeyPrefix, selector);
    }
  });

  container.appendChild(editableElement);
};
