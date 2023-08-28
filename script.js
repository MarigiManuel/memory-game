const memoryGame = document.querySelector('.memory-game');
const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];

let openedCards = [];
let matchedPairs = 0;

// Shuffle the cards
shuffleArray(cards);

// Create memory cards
cards.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'memory-card';
    cardElement.textContent = card;
    memoryGame.appendChild(cardElement);

    cardElement.addEventListener('click', () => {
        if (openedCards.length < 2 && !openedCards.includes(cardElement) && !cardElement.classList.contains('matched')) {
            cardElement.classList.add('hidden');
            openedCards.push(cardElement);

            if (openedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    });
});

function checkMatch() {
    const [card1, card2] = openedCards;
    
    if (card1.textContent === card2.textContent) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        
        if (matchedPairs === cards.length / 2) {
            setTimeout(() => alert('Congratulations! You won!'), 300);
        }
    } else {
        card1.classList.remove('hidden');
        card2.classList.remove('hidden');
    }

    openedCards = [];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
