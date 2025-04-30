const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

// ������� ����������� 3 ��������: ����������, ������� � ���������
function showCards(i) {
    track.innerHTML = ''; // ������� ���������

    const total = cards.length;

    const prevIndex = (i - 1 + total) % total;
    const currIndex = i % total;
    const nextIndex = (i + 1) % total;

    track.appendChild(cards[prevIndex].cloneNode(true));
    track.appendChild(cards[currIndex].cloneNode(true));
    track.appendChild(cards[nextIndex].cloneNode(true));
}

// �������������
showCards(index);

// ������ ���������
nextBtn.onclick = () => {
    index = (index + 1) % cards.length;
    showCards(index);
};

prevBtn.onclick = () => {
    index = (index - 1 + cards.length) % cards.length;
    showCards(index);
};
