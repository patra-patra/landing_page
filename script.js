const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateCarousel() {
    cards.forEach(card => card.classList.remove('active'));
    cards[currentIndex].classList.add('active');
    const offset = -cards[currentIndex].offsetLeft + (track.offsetWidth - cards[currentIndex].offsetWidth) / 2;
    track.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
});

// Центрируем изначально активный элемент
window.addEventListener('load', updateCarousel);