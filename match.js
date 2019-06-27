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

var numberOfStars,
  flippedCards,
  flippedCardIDs,
  hour,
  minute,
  second,
  moves,
  interval;

let delay = 1000;
var cardboard = document.getElementById("card-board");
var move = document.querySelector("#move");
var time = document.querySelector("#timer");
var star = document.getElementById("star");
var modal = document.getElementById("modal");
var close = document.querySelector(".close");

////////////////////////
//// INITILIAZE GAME ///
////////////////////////
(function init() {
  duplicateCard(cards);
  reset();
})();

function reset() {
  numberOfStars = 3;
  flippedCards = [];
  flippedCardIDs = [];
  moves = 0;
  hour = 0;
  second = 1;
  minute = 0;

  shuffleCard(cardList);
  newBoard(cardList);
  starRating(true);

  move.innerHTML = "Move: " + moves;
  time.innerHTML = "0:00:00";

  clearInterval(interval);
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
    }"></i><div class="front" style="background-image: url(src/logo.png); background-repeat: no-repeat;
    background-position: center"></div><div class="back" style="background-image: url(${
      card.src
    })"></div></div>`;
  });
  cardboard.innerHTML = html;
}

////////////////////////
////// GAME  START /////
////////////////////////
cardboard.addEventListener("click", function flipCard(e) {
  if (!e.detail || e.detail == 1) {
    var clickedCard = e.target.parentNode;
    if (flippedCardIDs.includes(clickedCard.getAttribute("id"))) {
      return;
    }
    if (flippedCards.length < 2) {
      if (flippedCards.length === 0) {
        moveCounter();
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
  }
});

function match(cardArray, cardIds, cardList) {
  var clickedCards = document.querySelectorAll(".active");

  if (cardArray[0] === cardArray[1]) {
    cardArray.splice(-2, 2);
    setTimeout(() => {
      clickedCards.forEach(card => {
        card.classList.remove("active");
        card.classList.add("match");
        isComplete(cardList, flippedCardIDs);
      });
      starRating(true);
    }, delay);
  } else {
    setTimeout(() => {
      cardIds.splice(-2, 2);
      cardArray.splice(-2, 2);
      clickedCards.forEach(card => {
        card.classList.remove("active", "flip");
      });
      starRating(false);
    }, delay);
  }
}

function isComplete(cards, ids) {
  ids.length === cards.length ? showModal() : "";
}

////////////////////////
////// MOVE COUNTER ////
////////////////////////
function moveCounter() {
  moves++;
  if (moves === 1) {
    startTimer();
  }
  move.innerHTML = "Move: " + moves;
}

////////////////////////
////// START TIMER /////
////////////////////////
function startTimer() {
  interval = setInterval(function() {
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
////// START RATING ////
////////////////////////
function starRating(val) {
  var html = "";
  if (val) {
    numberOfStars < 3 ? numberOfStars++ : "";
  } else {
    numberOfStars > 0 ? numberOfStars-- : "";
  }

  for (var i = 0; i < numberOfStars; i++) {
    html += `<i class="fa fa-star" aria-hidden="true"></i>`;
  }
  star.innerHTML = html;
}

////////////////////////
//// MODAL COMPLETE ////
////////////////////////
function showModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

close.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
