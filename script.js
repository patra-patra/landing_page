const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let cards = Array.from(track.children);
let i = 0;

function updateCarousel() {
    // Ограничения для индекса
    if (i < 0) i = cards.length - 1;
    if (i > cards.length - 1) i = 0;

    // Очистка трека
    track.innerHTML = '';

    // Определяем 3 карточки: предыдущая, текущая (центральная), следующая
    const prevIndex = (i - 1 + cards.length) % cards.length;
    const nextIndex = (i + 1) % cards.length;

    const prevCard = cards[prevIndex].cloneNode(true);
    const currentCard = cards[i].cloneNode(true);
    const nextCard = cards[nextIndex].cloneNode(true);

    // Удаляем активный класс у всех
    [prevCard, currentCard, nextCard].forEach(card => card.classList.remove('active'));

    // Добавляем класс активной центральной карточке
    currentCard.classList.add('active');

    // Добавляем карточки в трек
    track.appendChild(prevCard);
    track.appendChild(currentCard);
    track.appendChild(nextCard);
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

// Инициализация при загрузке
updateCarousel();
