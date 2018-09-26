console.log("Up and running!");
// Memory game cards array
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne;
var cardTwo;
cardOne = cards[0];
//push card one to cards in play
cardsInPlay.push(cardOne);
console.log("User flipped queen");
cardTwo = cards[2];
//push card 3 to cards in play
cardsInPlay.push(cardTwo);
console.log("User flipped king");
if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}else{
		alert("Sorry, try again.");
	}
	
}