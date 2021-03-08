// create an array of the three game choices
var gameChoices = ["rock", "paper", "scissors"];

// create variables to hold the number of wins, losses and ties.
if (localStorage.getItem("wins")) {
	var results = {
		wins: localStorage.getItem("wins"),
		losses: localStorage.getItem("losses"),
		ties: localStorage.getItem("ties"),
	};
} else {
	var results = {
		wins: 0,
		losses: 0,
		ties: 0,
	};
}

// function to request user input
var userTurn = function () {
	// get the user's input
	userChoice = prompt("Please choose ROCK, PAPER, or SCISSORS");

	// check if the input is valid; if not, re-request input
	if (gameChoices.includes(userChoice)) {
		return userChoice.toLowerCase();
	} else {
		alert("Please enter a valid response.");
		return userTurn();
	}
};

// function to determine the result of the game
var game = function (user, comp) {
	if (user === comp) {
		alert("You both chose " + user + ". It's a tie!");
		results.ties++;
	} else if (user === "rock") {
		if (comp === "paper") {
			alert("You lost!");
			results.losses++;
		} else {
			alert("You won!");
			results.wins++;
		}
	} else if (user === "paper") {
		if (comp === "rock") {
			alert("You won!");
			results.wins++;
		} else {
			alert("You lost!");
			results.losses++;
		}
	} else {
		if (comp === "rock") {
			alert("You lost!");
			results.losses++;
		} else {
			alert("You won!");
			results.wins++;
		}
	}
};

// loop that contains the game
for (var i = 0; i < 3; i++) {
	// randomly choose a choice from the gameChoices array (computer's turn)
	var computerChoice = gameChoices[Math.floor(Math.random() * 3)];

	console.log(computerChoice);

	// collect the user's response (user's turn)
	var userChoice = userTurn();

	console.log(userChoice);

	// Create the game logic to run if the user chooses a valid choice
	game(userChoice, computerChoice);
}

// when the game is overm alert the final total to the user
alert(
	"The final score is: " +
		results.wins +
		" wins, " +
		results.losses +
		" losses, and " +
		results.ties +
		" ties."
);

// update the local storage with the number of wins
localStorage.setItem("wins", results.wins);
localStorage.setItem("losses", results.losses);
localStorage.setItem("ties", results.ties);
