console.log("Lunedì");

const next = document.getElementById("next");
const back = document.getElementById("back");

next.addEventListener("click", function () {
  console.log("mi hai cliccato");
  const activeItem = document.querySelector(".immagini.active");
  const nextElement = activeItem.nextElementSibling;
  if (nextElement) {
    activeItem.classList.remove("active");
    nextElement.classList.add("active");
  }
});
