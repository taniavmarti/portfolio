const items = document.querySelectorAll(".note-item");
const preview = document.querySelector(".note-preview");
const previewImage = preview?.querySelector("img");
const previewLabel = preview?.querySelector(".note-preview-label");
const images = {
  montana: "images/montana.jpg",
  cueva: "images/cueva.jpg",
  embalse: "images/embalse.jpg",
  bosque: "images/bosque.jpg"
};
items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    if (!preview || !previewImage || !previewLabel) return;
    previewImage.src = images[item.dataset.image];
    previewLabel.textContent = item.textContent;
    preview.classList.add("is-visible");
  });
  item.addEventListener("mouseleave", () => preview?.classList.remove("is-visible"));
});
