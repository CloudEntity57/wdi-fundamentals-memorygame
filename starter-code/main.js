// console.log("JS file is connected to HTML! Woo!");
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if(cardOne === cardTwo){
// 	alert("you found a match!");
// }else{
// 	alert("sorry, try again.");
// };


var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

function appendCards(str){
var gameBoard = document.getElementById(str);
for(i=0; i<=cards.length-1; i++){
	var card = document.createElement('div');
	card.className = "card";
	card.setAttribute('data-card',cards[i]);
	gameBoard.appendChild(card);
}
}

appendCards('game-board');

var dealt = document.getElementsByClassName('card');
document.getElementsByClassName('card').addEventListener('click',isTwoCards);

function isMatch(){
	var attrs = [];
	for(i=0; i<= dealt.length-1; i++){
		var current = dealt[i].getAttribute("data-card");
		attrs.push(current);
		for(x=0; x<=attrs.length-2; x++){
			if(attrs[x] === current){
				console.log("It's a match!!");
				return true;
			};
		};

	};
	console.log('false');
	return false;
}
window.onload = function(){
	isMatch();
};

function isTwoCards(){
	cardsInPlay.push(this.getAttribute("data-card"));
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);

		cardsInPlay = [];
	};

}









