const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let cards = Array.from(track.children);
let i = 0;

function updateCarousel() {
    // ����������� ��� �������
    if (i < 0) i = cards.length - 1;
    if (i > cards.length - 1) i = 0;

    // ������� �����
    track.innerHTML = '';

    // ���������� 3 ��������: ����������, ������� (�����������), ���������
    const prevIndex = (i - 1 + cards.length) % cards.length;
    const nextIndex = (i + 1) % cards.length;

    const prevCard = cards[prevIndex].cloneNode(true);
    const currentCard = cards[i].cloneNode(true);
    const nextCard = cards[nextIndex].cloneNode(true);

    // ������� �������� ����� � ����
    [prevCard, currentCard, nextCard].forEach(card => card.classList.remove('active'));

    // ��������� ����� �������� ����������� ��������
    currentCard.classList.add('active');

    // ��������� �������� � ����
    track.appendChild(prevCard);
    track.appendChild(currentCard);
    track.appendChild(nextCard);
}

// ������� ��� ������
nextBtn.addEventListener('click', () => {
    i++;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    i--;
    updateCarousel();
});

// ������������� ��� ��������
updateCarousel();
