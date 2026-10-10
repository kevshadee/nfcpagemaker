'use strict';

const copyButton = document.querySelector('.copy-button');
const copyStatus = document.querySelector('.copy-status');
let statusTimeout;

if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    clearTimeout(statusTimeout);
    try {
      await navigator.clipboard.writeText('+639198887366');
      copyStatus.textContent = 'Phone number copied';
    } catch {
      copyStatus.textContent = 'Copy unavailable. Tap the number to call.';
    }
    statusTimeout = setTimeout(() => { copyStatus.textContent = ''; }, 4000);
  });
}
