import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.createCarousel();
    this.initCarousel();
    this.addProduct();
  }

  createSlide(slide) {
    return `
   <div class="carousel__slide" data-id="${slide.id}">
  <img src="/assets/images/carousel/${
    slide.image
  }" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${slide.price.toFixed(2)}</span>
    <div class="carousel__title">${slide.name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>
    `;
  }

  createCarousel() {
    const carousel = createElement(`
        <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
      ${this.slides.map((slide) => this.createSlide(slide)).join("")}
    </div>
  </div>
    `);
    return carousel;
  }

  initCarousel() {
    const arrowRight = this.elem.querySelector(".carousel__arrow_right");
    const arrowLeft = this.elem.querySelector(".carousel__arrow_left");
    const carousel = this.elem.querySelector(".carousel__inner");
    const slidesCount = this.slides.length;

    let currentSlide = 0;

    arrowLeft.style.display = currentSlide === 0 ? "none" : "";

    const updateArrows = () => {
      arrowLeft.style.display = currentSlide === 0 ? "none" : "";
      arrowRight.style.display = currentSlide === slidesCount - 1 ? "none" : "";
    };

    updateArrows();

    arrowRight.addEventListener("click", () => {
      if (currentSlide < slidesCount - 1) {
        currentSlide += 1;
        const slideWidth = carousel.offsetWidth;
        carousel.style.transform = `translateX(-${
          slideWidth * currentSlide
        }px)`;
        updateArrows();
      }
    });

    arrowLeft.addEventListener("click", () => {
      if (currentSlide > 0) {
        currentSlide -= 1;
        const slideWidth = carousel.offsetWidth;
        carousel.style.transform = `translateX(-${
          slideWidth * currentSlide
        }px)`;
        updateArrows();
      }
    });
  }

  addProduct() {
    const buttons = this.elem.querySelectorAll(".carousel__button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const slide = button.closest(".carousel__slide");
        let event = new CustomEvent("product-add", {
          detail: slide.dataset.id,
          bubbles: true,
        });
        this.elem.dispatchEvent(event);
      });
    });
  }
}
