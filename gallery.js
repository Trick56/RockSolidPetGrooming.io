// Gallery tiles can display a real image once it is added inside each button.
// Until then, a styled placeholder is shown. Native dialog supports Escape to close.
const dialog = document.querySelector(".gallery-lightbox");
const content = document.querySelector(".gallery-lightbox-content");
document.querySelectorAll(".gallery-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    content.replaceChildren();
    const image = tile.querySelector("img");
    if (image) {
      const enlarged = image.cloneNode(true);
      enlarged.removeAttribute("loading");
      enlarged.className = "gallery-enlarged";
      content.append(enlarged);
    } else {
      const placeholder = tile.querySelector(".gallery-placeholder").cloneNode(true);
      placeholder.classList.add("gallery-enlarged-placeholder");
      content.append(placeholder);
    }
    dialog.showModal();
  });
});
document.querySelector(".gallery-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
