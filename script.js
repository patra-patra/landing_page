const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

// Функция отображения 3 карточек: предыдущая, текущая и следующая
function showCards(i) {
    track.innerHTML = ''; // Очищаем контейнер

    const total = cards.length;

    const prevIndex = (i - 1 + total) % total;
    const currIndex = i % total;
    const nextIndex = (i + 1) % total;

    track.appendChild(cards[prevIndex].cloneNode(true));
    track.appendChild(cards[currIndex].cloneNode(true));
    track.appendChild(cards[nextIndex].cloneNode(true));
}

// Инициализация
showCards(index);

// Кнопки навигации
nextBtn.onclick = () => {
    index = (index + 1) % cards.length;
    showCards(index);
};

prevBtn.onclick = () => {
    index = (index - 1 + cards.length) % cards.length;
    showCards(index);
};
