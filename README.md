# Matching Game

A browser-based card matching game that presents the player with cards arranged in a 4x4 grid. I did it as the solo prework project for Chingu cohort.

The back of each card is a common design shared by all cards. The front contains a distinctive symbol shared by one pair of cards in the deck, thus there are 8 unique symbols shared by 8 pairs of cards in the deck.

### Completed:

The objective of the Matching Game is for the player to turn over pairs of matching cards across eight successive turns. In a turn if the player selects two cards whose symbols match those cards, along with those successfully matched in previous turns, will remain up. However, if the player chooses two cards with different symbols they will both be flipped over, obscuring their symbols.

The game ends when all eight pairs of matching cards have been revealed. When this occurs a message should be displayed to let the user know they have won the game.

A 'New Game' Button gives the player the means to reset the game board.

Star Rating - From 1 to 3 stars are displayed to provide the player with a visual indication of his or her performance. Three stars are displayed at the start of the first turn and will be decremented by one star when the player fails to match cards in a turn. A star will be added when a turn is "won", but at any point in time a minimum of 0 stars and a maximum of 3 stars will be displayed.

Timer - A timer displaying the number of minutes and seconds that have elapsed. The timer is stopped when the player wins the game.

Move Counter - Displays the number of turns the player has taken, starting with one at the first turn.

### Screenshot:

![Main site](/src/demo.png "Screenshot of the matching game")

### Deployment:

The demo site can be viewed here: https://ngthu1995-match.herokuapp.com/

## Technologies & Tools

- HTML/CSS
- DOM Manipulation

### Installing

1. Clone the repo to your local machine \
   `$ git clone https://github.com/ngthu1995/match`

2. Open index.html in browser

## Deployment

The site is deployed with Heroku.

## Author

Thu Nguyen - personal website: http://thunguyen.space/

## License

This project is licensed under ThuNguyen@2019.

## Acknowledgments

Chingu solo project.
