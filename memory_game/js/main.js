//console.log("Up and running!");
// Memory game cards array
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// added for functions exercise
var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}else{
		alert("Sorry, try again.");
	}

}
var flipCard = function(cardId){

var cardOne;
var cardTwo;

console.log("User Flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);

if (cardsInPlay.length === 2){
	checkForMatch();
}

};
flipCard(0);
flipCard(2);