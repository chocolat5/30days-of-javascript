import './style.scss';

const app = document.getElementById('app');

const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = (e) => {
  //console.log(window.scrollY);
  sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('animated');
    } else {
      sliderImage.classList.remove('animated');
    }
    console.log(imageBottom);
  });
}

window.addEventListener('scroll', checkSlide);