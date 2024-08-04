import photo from '/profileImg.png';

export function setupPhoto() {
  const div = document.createElement('div');
  const img = document.createElement('img');
  div.style.maxHeight = '124px';
  div.style.maxWidth = '124px';
  img.src = photo;
  img.alt = 'CV Photo';
  div.appendChild(img);
  return div;
}
