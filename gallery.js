// The gallery works with local image files; missing files show placeholders.
const dialog = document.querySelector(".gallery-lightbox");
const content = document.querySelector(".gallery-lightbox-content");
document.querySelectorAll(".gallery-tile").forEach((tile) => {
  const photo = tile.querySelector("img");
  if (photo) {
    const hideMissing = () => {
      if (photo.naturalWidth === 0) photo.remove();
    };
    photo.addEventListener("error", hideMissing);
    if (photo.complete) hideMissing();
  }
  tile.addEventListener("click", () => {
    content.replaceChildren();
    const image = tile.querySelector("img");
    if (image && image.naturalWidth > 0) {
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
