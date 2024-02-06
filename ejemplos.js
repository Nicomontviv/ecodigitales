const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideContainer = document.querySelector('.slide-container');

let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

showSlide(slideIndex);
