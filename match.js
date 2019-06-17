var cards = [
  {
    id: 1,
    name: "angel",
    src: "fa fa-angellist",
    flipped: false
  },
  {
    id: 2,
    name: "dog",
    src: "fa fa-dog",
    flipped: false
  },
  {
    id: 3,
    name: "dove",
    src: "fa fa-dove",
    flipped: false
  },
  {
    id: 4,
    name: "paw",
    src: "fa fa-paw",
    flipped: false
  },
  {
    id: 5,
    name: "ball",
    src: "fa fa-ball",
    flipped: false
  },
  {
    id: 6,
    name: "yin-yang",
    src: "fa fa-yin-yang",
    flipped: false
  },
  {
    id: 7,
    name: "cookie-bite",
    src: "fa fa-cookie-bite",
    flipped: false
  },
  {
    id: 8,
    name: "500px",
    src: "fa fa-500px",
    flipped: false
  }
];

var cardList = [...cards];
var cardboard = document.getElementById("card-board");
var numberOfClick, flippedCard, flippedCardID;

////////////////////////
//// INITILIAZE GAME ///
////////////////////////
(function init() {
  numberOfClick = 0;
  flippedCard = [];
  flippedCardID = [];

  duplicateCard(cards);
  shuffleCard(cardList);

  newBoard(cardList);
  console.log(cardList);
})();

function duplicateCard(cards) {
  cards.forEach(card => {
    cardList.push(card);
  });
  return cardList;
}

function shuffleCard(cards) {
  var j, x, i;
  for (i = cards.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = cards[i];
    cards[i] = cards[j];
    cards[j] = x;
  }
  return cards;
}

function newBoard(cards) {
  var html = "";
  cards.forEach((card, i) => {
    html += `<div id="${i}" class="card"><i class="${card.src}"></i></div>`;
  });
  cardboard.innerHTML = html;
}

cardboard.addEventListener("click", function flipCard(e) {
  console.log(e.target.innerHTML);
  if (e.target.nodeName === "DIV") {
    e.target.classList.add("active");
  }
  while (numberOfClick < 2) {
    flippedCard.push();
  }
});
