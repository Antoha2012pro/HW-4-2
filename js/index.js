const slider = document.querySelector('.slider');
const img = document.querySelector('.slider__image');


slider.addEventListener('input', _.debounce(onRangeWidth, 100));

function onRangeWidth(event) {
    if (event.target.nodeName !== 'INPUT') {
        return;
    }

    img.style.width = event.target.value + '%';
};



const box = document.getElementById('box');

window.addEventListener('mousemove', _.debounce(onMouseMove, 100));

function onMouseMove(event) {
    box.style.left = event.clientX + 'px';
    box.style.top  = event.clientY + 'px';
}