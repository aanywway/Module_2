const card = document.getElementById('card-container');

function animationCard() {
    card.classList.toggle('card-clicked');
}

card.addEventListener('click', animationCard);
