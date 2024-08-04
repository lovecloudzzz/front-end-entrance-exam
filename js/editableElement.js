import '/css/editableElement.css';

export function setupEditableElement({
  elementType = 'h1',
  localStorageKey,
  defaultValue,
  maxWidth,
  maxHeight,
  maxLength,
  animationClass = 'defaultAnimation',
}) {
  const input = document.createElement(elementType);
  input.contentEditable = 'true';
  input.innerText = localStorage.getItem(localStorageKey) || defaultValue;
  input.classList.add('editInput');

  if (maxWidth) {
    input.style.maxWidth = `${parseFloat(maxWidth)}px`;
  }
  if (maxHeight) {
    input.style.maxHeight = `${parseFloat(maxHeight)}px`;
  }

  let saveTimeout;
  let focusTimeout;
  let previousValue = input.innerText;

  const saveChanges = () => {
    const newValue = input.innerText;
    if (newValue !== previousValue) {
      localStorage.setItem(localStorageKey, newValue);
      previousValue = newValue;
      input.classList.add('saveAnimation');
      setTimeout(() => {
        input.classList.remove('saveAnimation');
      }, 700);
    }
  };

  const limitTextLines = () => {
    if (maxHeight) {
      if (input.scrollHeight - 2 > parseFloat(maxHeight)) {
        input.style.height = `${parseFloat(maxHeight)}px`;
      }
      while (input.scrollHeight - 2 > parseFloat(maxHeight)) {
        input.innerText = input.innerText.slice(0, -1);
      }
    }
  };

  const limitTextLength = () => {
    if (maxLength) {
      const text = input.innerText;
      if (text.length > maxLength) {
        input.innerText = text.slice(0, maxLength);
      }
    }
  };

  input.addEventListener('input', () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      saveChanges();
      limitTextLength();
    }, 2000);
  });

  input.addEventListener('blur', () => {
    clearTimeout(focusTimeout);
    limitTextLines();
    limitTextLength();
    saveChanges();
  });

  input.addEventListener('focus', () => {
    input.classList.add(animationClass);
    clearTimeout(focusTimeout);
    focusTimeout = setTimeout(() => {
      input.classList.remove(animationClass);
    }, 700);
  });

  limitTextLines();
  limitTextLength();

  return input;
}
