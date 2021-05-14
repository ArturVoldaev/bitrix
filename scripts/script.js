const sliderContainer = document.querySelector('.slider__container');
const slider = sliderContainer.querySelectorAll(".slider__slide");
const radioButton = document.querySelectorAll(".slider__button")
let currentButton = 0;
let currentSlide = 0;
const slideInterval = setInterval(nextSlide ,2500);

function nextSlide() {
  slider[currentSlide].className = 'slider__slide';
  currentSlide = (currentSlide+1)%slider.length;
  slider[currentSlide].className = 'slider__showing';
  radioButton[currentButton].className = 'slider__button';
  currentButton = (currentButton+1)%radioButton.length;
  radioButton[currentButton].className = 'slider__button-active';
}


