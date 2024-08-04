
export function setupProgressBar(localStorageKey, value = 100) {
  const progressBar = document.createElement('input');
  progressBar.type = 'range';
  progressBar.className = 'progressBar';

  progressBar.min = 0;
  progressBar.max = 100;

  progressBar.value = localStorage.getItem(localStorageKey) || value;

  progressBar.addEventListener('change', (event) => {
    const newValue = event.target.value;
    localStorage.setItem(localStorageKey, newValue);
  });

  return progressBar;
}
