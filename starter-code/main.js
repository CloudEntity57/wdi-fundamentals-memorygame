


var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

function createBoard(str){
var cardsUp = [];
var gameBoard = document.getElementById(str);
for(i=0; i<=cards.length-1; i++){
	var card = document.createElement('div');
	gameBoard.appendChild(card);
	card.className = "card";
	card.setAttribute('data-card',cards[i]);
	cardsUp.push(card);
	var thisCard = cardsUp[i];
	thisCard.addEventListener('click',function(){displayCard(this)});
	
	// console.log("array is: " + cardsUp);
};
}


createBoard('card-area');

function displayCard(thisElement){
	var king_card = '<img src = "king_card.png" alt = "king card" />';
	var queen_card = '<img src = "queen_card.png" alt = "king card" />';
	if(thisElement.getAttribute('data-card') === 'queen'){
		thisElement.innerHTML = (queen_card);
	}else{
		thisElement.innerHTML = (king_card);
	};
	cardsInPlay.push(thisElement.getAttribute('data-card'));
	console.log("cardsInPlay = " + cardsInPlay);
	isTwoCards();
}




var attrs = [];

function isMatch(){
	function boardReset(){
		setTimeout(function() {
		var newCards = document.createElement('div');
		newCards.setAttribute('id','card-area');
		var gameBoard = document.getElementById('game-board');
		var cardArea = document.getElementById('card-area');
		gameBoard.removeChild(cardArea);
		gameBoard.appendChild(newCards);
		createBoard('card-area');
		document.getElementById('game-board').removeChild(winAlert);
	}, 600);
	}
	for(i=0; i<= cardsInPlay.length-1; i++){
		var current = cardsInPlay[i];
		attrs.push(current);
		for(x=0; x<=attrs.length-2; x++){
			if(attrs[x] === current){
				var winAlert = document.createElement('div');
				winAlert.setAttribute('id','winAlert');
				winAlert.innerHTML = "It's a Match!!";
				document.getElementById('game-board').appendChild(winAlert);
				boardReset();
				cardsInPlay = [];
				return true;
			};
		};

	};
	
	cardsInPlay = [];
	boardReset();

}




function isTwoCards(){
	if(cardsInPlay.length === 2){
		isMatch();
		attrs = [];
	};

}












