const andi = document.querySelector("#andi");
const claire = document.querySelector("#claire");
const sharleen = document.querySelector("#sharleen");

document.querySelector("#andiNext").addEventListener("click", () => {
  andi.classList.toggle("hidden");
  claire.classList.add("hidden");
  sharleen.classList.add("hidden");
});
document.querySelector("#claireNext").addEventListener("click", () => {
  claire.classList.toggle("hidden");
  andi.classList.add("hidden");
  sharleen.classList.add("hidden");
});
document.querySelector("#sharleenNext").addEventListener("click", () => {
  sharleen.classList.toggle("hidden");
  andi.classList.add("hidden");
  claire.classList.add("hidden");
});
