const cards = document.querySelectorAll(".card");
const cardImages = document.querySelectorAll(".card img");

var firstCard;
var secondCard;

const setImage = () => {
    for (let i = 0; i < 2; i++) {
        var random = Math.floor(Math.random() * 5 + 1);
        for (let j = 0; j < 6; j++) {
            if (random > 6) random = 1;
            cardImages[i == 0 ? j : j + 6].src = `images/img-${random++}.png`
        }
    }
}

const checkCards = () => {
    if (secondCard) {
        if (firstCard.querySelector("img").src == secondCard.querySelector("img").src) {
            firstCard.classList.add("match");
            secondCard.classList.add("match");
        }
        cards.forEach(card => { card.classList.remove("flip") });
        firstCard = secondCard = undefined;
    }
    if (!Array.from(cards).find(card => !card.classList.contains("match"))) {
        alert("You Won");
        window.location.reload();
    };
}

cards.forEach(card => {
    card.addEventListener("click", function () {
        this.classList.add("flip");
        firstCard && firstCard != this ? secondCard = this : firstCard = this;
        setTimeout(checkCards, 500);
    });
});

setImage();