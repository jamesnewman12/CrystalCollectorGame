let currentNum = 0;
let currentScore = 0;
let redVal = 0;
let blueVal = 0;
let greenVal = 0;
let yellowVal = 0;
let wins = 0;
let losses = 0;

function initializeGame() {
	currentScore = 0;
	$('#current').html(currentScore);
	pickNum();
	setCrystalVal();
}

function pickNum() {
	currentNum = Math.floor((Math.random() * 101) + 20);
	$('#goal').html(currentNum);
}

function setCrystalVal() {
	redVal = Math.floor((Math.random() * 12) + 1);
	blueVal = Math.floor((Math.random() * 12) + 1);
	greenVal = Math.floor((Math.random() * 12) + 1);
	yellowVal = Math.floor((Math.random() * 12) +1);
	
}

function scoreChecker() {
	if (currentScore === currentNum) {
		wins++;
		alert("You win!");
		$('#wins').html(wins);
		initializeGame();
	} else if (currentScore > currentNum) {
		losses++;
		alert('You lost!');
		$('#losses').html(losses);
		initializeGame();
	} else {
		return;
	}
}

$(document).ready(function() {
	initializeGame();

	$('#red').on('click', function() {
		currentScore = currentScore + redVal;
		$('#current').html(currentScore);
		scoreChecker();
	})

	$('#blue').on('click', function() {
		currentScore = currentScore + blueVal;
		$('#current').html(currentScore);
		scoreChecker();
	})

	$('#green').on('click', function() {
		currentScore = currentScore + greenVal;
		$('#current').html(currentScore);
		scoreChecker();
	})

	$('#yellow').on('click', function() {
		currentScore = currentScore + yellowVal;
		$('#current').html(currentScore);
		scoreChecker();
	})

});