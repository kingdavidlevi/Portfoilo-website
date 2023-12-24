const arrowLeft = document.querySelector('.arrow.left01');
const arrowRight = document.querySelector('.arrow.right01');
const slider = document.querySelector('.slider');
const dynamicSlide = document.querySelectorAll('.dynamicslide');


var Ind = 0;
const totalSection = dynamicSlide.length;
const count = totalSection - 1;
slider.style.width = `${totalSection * 100}%`;
const percent = 100 / totalSection;

arrowLeft.addEventListener('click', () => {
    Ind = (Ind > 0) ? Ind = Ind - 1 : 0;
    slider.style.transform = `translate(${Ind * -percent}%)`;
});

arrowRight.addEventListener('click', () => {
    Ind = (Ind < count) ? Ind = Ind + 1 : count;
    slider.style.transform = `translate(${Ind * -percent}%)`;
});
