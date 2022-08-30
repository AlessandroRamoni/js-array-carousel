console.log("Lunedì");

const images = ["01", "02", "03", "04", "05"];
let activeImageIndex = 0;

const container = document.querySelector(".carousel-container");

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  container.innerHTML += `<img class="immagini" src="./img/${image}.jpg" alt="${image}"></img>`;
}

const firstItem = document.querySelector(".immagini");
firstItem.classList.add("active");

const next = document.getElementById("next");
const back = document.getElementById("back");

next.addEventListener("click", function () {
  const activeItem = document.querySelector(".immagini.active");
  const nextElement = activeItem.nextElementSibling;
  if (nextElement) {
    activeItem.classList.remove("active");
    nextElement.classList.add("active");
  }
});

back.addEventListener("click", function () {
  const activeItem = document.querySelector(".immagini.active");
  const previousElement = activeItem.previousElementSibling;
  if (previousElement) {
    activeItem.classList.remove("active");
    previousElement.classList.add("active");
  }
});
