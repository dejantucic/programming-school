const slides = document.querySelectorAll(".gallery__slide");
const nextBtn = document.querySelector(".gallery__nextBtn");
const prevBtn = document.querySelector(".gallery__prevBtn");

let counter = 0;
const slide = () => {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
  nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
  });
  prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
  });
};

function carousel() {
  counter < slides.length - 1
    ? (nextBtn.style.display = "block")
    : (nextBtn.style.display = "none");
  counter > 0
    ? (prevBtn.style.display = "block")
    : (prevBtn.style.display = "none");
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
// prevBtn.style.display = "none";
export default slide;
