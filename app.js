const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') upBtn.click();
    if (event.key === 'ArrowDown') downBtn.click();
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        };
    } else if (direction === "down") {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        };
    };

    const height = container.clientHeight;

    sidebar.style.transform = `translateY(${height * activeSlideIndex}px)`;
    mainSlide.style.transform = `translateY(-${height * activeSlideIndex}px)`;
};