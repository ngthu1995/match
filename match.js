var cards = [
  {
    id: 1,
    name: "kebab",
    src: "src/kebab.jpg",
    flipped: false
  },
  {
    id: 2,
    name: "chocolate",
    src: "src/chocolate.jpg",
    flipped: false
  },
  {
    id: 3,
    name: "doughnut",
    src: "src/doughnut.jpg",
    flipped: false
  },
  {
    id: 4,
    name: "pizza",
    src: "src/pizza.jpg",
    flipped: false
  },
  {
    id: 5,
    name: "mashmallow",
    src: "src/mashmallow.jpg",
    flipped: false
  },
  {
    id: 6,
    name: "ice-cream",
    src: "src/ice-cream.jpg",
    flipped: false
  },
  {
    id: 7,
    name: "melon-bread",
    src: "src/melon-bread.jpg",
    flipped: false
  },
  {
    id: 8,
    name: "sandwich",
    src: "src/sandwich.jpg",
    flipped: false
  }
];

var cardList = [...cards];
var cardboard = document.getElementById("card-board");
var numberOfMove, flippedCards, flippedCardIDs, hour, minute, second;
let delay = 1000;

////////////////////////
//// INITILIAZE GAME ///
////////////////////////
(function init() {
  duplicateCard(cards);
  reset();

  console.log(cardList);
})();

function reset() {
  numberOfMove = 0;
  flippedCards = [];
  flippedCardIDs = [];
  hour = 0;
  second = 0;
  minute = 0;

  shuffleCard(cardList);

  newBoard(cardList);
  startTimer();
  console.log(cardList);
}

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
    html += `<div id="${i}" class="card" name="${card.name}"><i class="${
      card.src
    }"></i><div class="front" ></div><div class="back" style="background-image: url(${
      card.src
    })"></div></div>`;
  });
  cardboard.innerHTML = html;
}

function startTimer() {
  var time = document.querySelector("#timer");

  setInterval(function() {
    second < 10 ? (second = "0" + second) : second;
    minute < 10 ? (minutes = "0" + minute) : minute;

    time.innerHTML = hour + ":" + minutes + ":" + second;

    second++;

    if (second === 60) {
      minute++;
      second = 0;
    }
    if (minute === 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

////////////////////////
////// GAME  START /////
////////////////////////
cardboard.addEventListener("click", function flipCard(e) {
  console.log(e.target);
  var clickedCard = e.target.parentNode;
  if (flippedCardIDs.includes(clickedCard.getAttribute("id"))) {
    return;
  }
  if (flippedCards.length < 2) {
    if (flippedCards.length === 0) {
      flippedCards.push(clickedCard.getAttribute("name"));
      flippedCardIDs.push(clickedCard.getAttribute("id"));
      clickedCard.nodeName === "DIV"
        ? clickedCard.classList.add("active", "flip")
        : "";
    } else {
      if (
        clickedCard.getAttribute("id") ===
        flippedCardIDs[flippedCardIDs.length - 1]
      ) {
        flippedCardIDs = [];
        flippedCards = [];
        clickedCard.classList.remove("active", "flip");
      } else {
        flippedCards.push(clickedCard.getAttribute("name"));
        flippedCardIDs.push(clickedCard.getAttribute("id"));
        clickedCard.classList.add("active", "flip");
        // clickedCard.classList.add("flip");
        match(flippedCards, flippedCardIDs, cardList);
      }
    }
  }
  console.log(flippedCards, flippedCardIDs);
});

function match(cardArray, cardIds, cardList) {
  var clickedCards = document.querySelectorAll(".active");

  if (cardArray[0] === cardArray[1]) {
    console.log(clickedCards);
    cardArray.splice(-2, 2);
    setTimeout(() => {
      clickedCards.forEach(card => {
        card.classList.remove("active");
        card.classList.add("match");
        console.log(card.getAttribute("id"));
        isComplete(cardList, flippedCardIDs);
      });
    }, delay);
  } else {
    setTimeout(() => {
      cardIds.splice(-2, 2);
      cardArray.splice(-2, 2);
      clickedCards.forEach(card => {
        card.classList.remove("active", "flip");
      });
    }, delay);
  }
}

function isComplete(cards, ids) {
  cards.length === ids.length ? alert("Hello! I am an alert box!!") : "";
}
