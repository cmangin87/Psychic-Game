

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

		 var wins = 0;
		 var losses = 0;
		 var guessCount = 9;
		 var guessChoices = [""];

		 document.onkeyup = function(event) {

		var userGuess = event.key;
		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

			if (letters.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					guessCount = 9;
					guessChoices = [];
				}

				if (userGuess != computerGuess) {
					guessCount --;
					guessChoices.push(userGuess);
				}

				if (guessCount === 0) {

				guessCount = 9;
				losses ++;
				guessChoices = [];

			}

	var html = 
	"<h1>**The Psychic Game**</h1>" +
	"<p>Guess what letter I'm thinking of!</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessCount + "</p>" +
	"<p>Your Guesses So Far: " + guessChoices.join(", ") + "</p>";

		document.querySelector("#game").innerHTML = html;

			}
		}