const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let cards = Array.from(track.children);
let i = 0;
let isAnimating = false;
let startX = 0;
let moveX = 0;

function updateCarousel() {
    if (isAnimating) return;
    isAnimating = true;

    // Ограничения для индекса
    if (i < 0) i = cards.length - 1;
    if (i > cards.length - 1) i = 0;

    // Определяем индексы карточек
    const prevIndex = (i - 1 + cards.length) % cards.length;
    const nextIndex = (i + 1) % cards.length;

    // Создаем новые карточки
    const prevCard = cards[prevIndex].cloneNode(true);
    const currentCard = cards[i].cloneNode(true);
    const nextCard = cards[nextIndex].cloneNode(true);

    // Добавляем классы для анимации
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(0)`;

    // Очищаем трек и добавляем карточки
    track.innerHTML = '';
    track.appendChild(prevCard);
    track.appendChild(currentCard);
    track.appendChild(nextCard);

    // Центральная карточка всегда активна
    currentCard.classList.add('active');

    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

// События для кнопок
nextBtn.addEventListener('click', () => {
    i++;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    i--;
    updateCarousel();
});

// Свайп для мобильных устройств
track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

track.addEventListener('touchmove', (e) => {
    moveX = e.touches[0].clientX;
});

track.addEventListener('touchend', () => {
    const diff = startX - moveX;
    if (Math.abs(diff) > 50) { // Минимальное расстояние свайпа
        if (diff > 0) {
            i++; // Свайп влево
        } else {
            i--; // Свайп вправо
        }
        updateCarousel();
    }
});

// Инициализация
updateCarousel();