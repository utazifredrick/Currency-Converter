homeCount = document.getElementById("home-count");
guestCount = document.getElementById("guest-count");
resetBtn = document.getElementById("reset-btn");

let homeScore = 0;
let guestScore = 0;
function homePlusOne() {
  homeScore += 1;
  homeCount.textContent = homeScore;
}

function homePlusTwo() {
  homeScore += 2;
  homeCount.textContent = homeScore;
}

function homePlusThree() {
  homeScore += 3;
  homeCount.textContent = homeScore;
}

// function for the guestscore

function guestPlusOne() {
  guestScore += 1;
  guestCount.textContent = guestScore;
}

function guestPlusTwo() {
  guestScore += 2;
  guestCount.textContent = guestScore;
}

function guestPlusThree() {
  guestScore += 3;
  guestCount.textContent = guestScore;
}

//function for reset button

function reset() {
  homeScore = 0;
  guestScore = 0;
  homeCount.textContent = homeScore;
  guestCount.textContent = guestScore;
}
