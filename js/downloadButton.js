import '/css/downloadButton.css';
import html2pdf from 'html2pdf.js';

export function setupDownloadButton() {
  const downloadButton = document.createElement('button');
  downloadButton.textContent = 'Скачать как PDF';
  downloadButton.className = 'downloadButton';

  downloadButton.addEventListener('click', () => {
    const element = document.querySelector('#app');

    downloadButton.style.display = 'none';

    const progressBars = element.querySelectorAll('.progressBar');
    const originalHeights = [];
    const originalFontSizes = [];
    const originalMarginsSizes = [];

    progressBars.forEach((progressBar) => {
      originalHeights.push(progressBar.style.height);
      originalFontSizes.push(progressBar.style.fontSize);
      originalMarginsSizes.push(progressBar.style.marginTop);

      progressBar.style.height = '15px';
      progressBar.style.fontSize = '10px';
      progressBar.style.marginTop = '-4px';
    });

    const options = {
      margin: 1,
      filename: 'CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf()
      .from(element)
      .set(options)
      .save()
      .then(() => {
        downloadButton.style.display = '';

        progressBars.forEach((progressBar, index) => {
          progressBar.style.height = originalHeights[index];
          progressBar.style.fontSize = originalFontSizes[index];
          progressBar.style.marginTop = originalMarginsSizes[index];
        });
      });
  });

  return downloadButton;
}
