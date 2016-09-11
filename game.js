var Word = require('./Word.js');

var wordBank = ['mumford', 'joel', 'brooks', 'blink', ];

function Game() {
	this.wins = 0;
	this.losses = 0;
	this.livesRemaining = 0;
	this.lettersUsed = [];
	this.word;

	this.startNewGame = function() {
		this.livesRemaining = 10;
		this.lettersUsed = [];
		this.word = this.generateRandomWord();

		console.log("This man hangs");

	}

	this.generateRandomWord = function(){
		var len = wordBank.length;
		var newWord = wordBank[Math.floor(Math.random() * len)];
		var Word = new Word(randomWord);

		return Word;
	}

	this.printResults = function(){
		
	}

	this.endGame = function(){
		
	}
}

module.exports = Game;