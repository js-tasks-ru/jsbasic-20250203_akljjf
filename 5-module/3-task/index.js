function initCarousel() {
  // ваш код...
  const buttonLeft = document.querySelector(".carousel__arrow_left");
  const buttonRight = document.querySelector(".carousel__arrow_right");
  const carousel = document.querySelector(".carousel__inner");
  const slideWidth = carousel.offsetWidth;
  let currentSlide = 0;

  buttonLeft.style.display = currentSlide === 0 ? "none" : "";

  buttonLeft.addEventListener("click", () => {
    currentSlide -= 1;
    carousel.style.transform = `translate(-${slideWidth * currentSlide}px)`;
    buttonLeft.style.display = currentSlide === 0 ? "none" : "";
    buttonRight.style.display = currentSlide === 3 ? "none" : "";
  });
  buttonRight.addEventListener("click", () => {
    currentSlide += 1;
    carousel.style.transform = `translate(-${slideWidth * currentSlide}px)`;
    buttonLeft.style.display = currentSlide === 0 ? "none" : "";
    buttonRight.style.display = currentSlide === 3 ? "none" : "";
  });
}
