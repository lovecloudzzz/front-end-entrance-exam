import '/css/container.css';

export function setupContainer({
  elementType,
  childElements = [],
  className = '',
  animate = false,
}) {
  const container = document.createElement(elementType);

  container.className = `container ${className}`;

  container.addEventListener('click', function (event) {
    if (animate) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      container.appendChild(ripple);

      const rect = container.getBoundingClientRect();
      const rippleX = event.clientX - rect.left;
      const rippleY = event.clientY - rect.top;

      const size = Math.max(container.offsetWidth, container.offsetHeight);
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${rippleX - size / 2}px`;
      ripple.style.top = `${rippleY - size / 2}px`;

      ripple.addEventListener('animationend', function () {
        ripple.remove();
      });
    }
  });

  childElements.forEach((element) => {
    container.appendChild(element);
  });

  return container;
}
