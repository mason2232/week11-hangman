
var start= require("start");
var inquire = require('inquirer');
var letter = require("./letter.js");
var game = require("./game.js");
var word = require("./word.js");

function initHangman(){
	game.startNewGame();
	promptAndProcessInput();
}

function promptAndProcessInput(){
	inquirer.prompt([{
		type: 'input',
		name: 'guess',
		message: ' guess (letter a-z):',
		validate: function(value){
			var validInputs = /[a-z]|[0-9]/i;

			if (value.length == 1 && validInputs.test(value))
				return true;

			return 'Please enter letter:';
		}
	}]).then(function(answer){
		var userGuess = answer.userGuess.toUpperCase();

		if(game.lettersUsed.indexOf(userGuess) == -1){
			game.lettersUsed.push(userGuess);

			var correct = game.word.checkLetterInput(userGuess);

			if(correct){
				game.printresults("You are correct.");
			}
			else {
				game.livesRemaining--;
				game.printresults(" you are Wrong.");
			}
		}
		else{
			game.printresults("try again.");
		}

		var userWon = game.word.getDisplayWord() === game.word.getTargetWord();

		if(userWon){
			game.wins++;
			endCurrentGame("WINNING");
		}
		else if(game.livesRemaining > 0)
			promptAndProcessInput();
		else {
			game.losses++;
			endCurrentGame("you lost");
		}
	});
}


initHangman();

