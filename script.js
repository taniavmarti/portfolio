const items = document.querySelectorAll(".note-item");
const preview = document.querySelector(".note-preview");
const previewImage = preview?.querySelector("img");
const previewLabel = preview?.querySelector(".note-preview-label");
const images = {
  observar: "images/europa-interior.jpeg",
  imaginar: "images/raconet-inicio.png",
  crear: "images/europa-web-home.png",
  comunicar: "images/europa-brasa.jpeg"
};
function showPreview(item) {
  if (!preview || !previewImage || !previewLabel) return;
  const src = images[item.dataset.image];
  if (!src) return;
  previewImage.src = src;
  previewLabel.textContent = item.textContent;
  preview.classList.add("is-visible");
}
function hidePreview() { preview?.classList.remove("is-visible"); }
items.forEach(item => {
  item.addEventListener("mouseenter", () => showPreview(item));
  item.addEventListener("mouseleave", hidePreview);
  item.addEventListener("focus", () => showPreview(item));
  item.addEventListener("blur", hidePreview);
  item.addEventListener("click", () => preview?.classList.contains("is-visible") && previewLabel?.textContent === item.textContent ? hidePreview() : showPreview(item));
  item.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " ") { e.preventDefault(); item.click(); } });
});
