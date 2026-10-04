(() => {
  const links = Array.from(document.querySelectorAll('.gallery-grid a'));
  const dialog = document.querySelector('.photo-viewer');
  // The ordinary image links remain usable without JavaScript or dialog support.
  if (!links.length || !dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('.viewer-image');
  const count = dialog.querySelector('.viewer-count');
  const error = dialog.querySelector('.viewer-error');
  const close = dialog.querySelector('.viewer-close');
  const previous = dialog.querySelector('.viewer-prev');
  const next = dialog.querySelector('.viewer-next');
  let index = 0;
  let opener;
  let scrollY = 0;
  let bodyStyle;

  function showPhoto(value) {
    index = (value + links.length) % links.length;
    error.hidden = true;
    image.hidden = false;
    image.alt = links[index].querySelector('img').alt;
    image.src = links[index].href;
    count.textContent = `Photo ${index + 1} of ${links.length}`;
    previous.disabled = next.disabled = links.length < 2;
  }
  image.addEventListener('error', () => {
    image.hidden = true;
    error.hidden = false;
  });
  links.forEach((link, position) => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    opener = link;
    scrollY = window.scrollY;
    bodyStyle = document.body.getAttribute('style');
    showPhoto(position);
    dialog.showModal();
    Object.assign(document.body.style, { position: 'fixed', top: `-${scrollY}px`, width: '100%', overflow: 'hidden' });
    close.focus();
  }));
  close.addEventListener('click', () => dialog.close());
  previous.addEventListener('click', () => showPhoto(index - 1));
  next.addEventListener('click', () => showPhoto(index + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(index + (event.key === 'ArrowRight' ? 1 : -1));
    }
    if (event.key === 'Tab') {
      const controls = [close, previous, next].filter(button => !button.disabled);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
  });
  // Native modal dialogs make the background inert and handle Escape.
  dialog.addEventListener('close', () => {
    if (bodyStyle === null) document.body.removeAttribute('style');
    else document.body.setAttribute('style', bodyStyle);
    window.scrollTo({ top: scrollY, behavior: 'instant' });
    opener.focus({ preventScroll: true });
    image.removeAttribute('src');
  });
})();
