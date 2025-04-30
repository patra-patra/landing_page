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

    // ����������� ��� �������
    if (i < 0) i = cards.length - 1;
    if (i > cards.length - 1) i = 0;

    // ���������� ������� ��������
    const prevIndex = (i - 1 + cards.length) % cards.length;
    const nextIndex = (i + 1) % cards.length;

    // ������� ����� ��������
    const prevCard = cards[prevIndex].cloneNode(true);
    const currentCard = cards[i].cloneNode(true);
    const nextCard = cards[nextIndex].cloneNode(true);

    // ��������� ������ ��� ��������
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(0)`;

    // ������� ���� � ��������� ��������
    track.innerHTML = '';
    track.appendChild(prevCard);
    track.appendChild(currentCard);
    track.appendChild(nextCard);

    // ����������� �������� ������ �������
    currentCard.classList.add('active');

    setTimeout(() => {
        isAnimating = false;
    }, 500);
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

// ����� ��� ��������� ���������
track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

track.addEventListener('touchmove', (e) => {
    moveX = e.touches[0].clientX;
});

track.addEventListener('touchend', () => {
    const diff = startX - moveX;
    if (Math.abs(diff) > 50) { // ����������� ���������� ������
        if (diff > 0) {
            i++; // ����� �����
        } else {
            i--; // ����� ������
        }
        updateCarousel();
    }
});

// �������������
updateCarousel();