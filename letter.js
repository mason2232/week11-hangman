


function Letter(character){
	this.character = character;
	this.placeholder = '_';
	this.guess = false;
}

	this.getCharacter = function() {
		var char = '';

		if (this.guess)
			char = this.character;
		else
			char = this.placeholder;

		return char;
	}
}

module.exports = Letter;