console.log("Lunedì");

const next = document.getElementById("next");
const back = document.getElementById("back");

next.addEventListener("click", function () {
  console.log("mi hai cliccato");
  const activeItem = document.querySelector(".immagini.active");
  const nextElemet = activeItem.nextElementSibling;
  if (nextElemet) {
    activeItem.classList.remove("active");
    nextElemet.classList.add("active");
  }
});
