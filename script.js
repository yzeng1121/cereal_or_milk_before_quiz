var milkCount = 0; // count for milk before cereal
var cerealCount = 0; // count for cereal before milk
var qCount = 0; // counts amount of answers

// stores value of each answer button 
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");

// associates click with each type of result
q1a1.addEventListener("click", cereal);
q1a2.addEventListener("click", milk);

q2a1.addEventListener("click", cereal);
q2a2.addEventListener("click", milk);

q3a1.addEventListener("click", milk);
q3a2.addEventListener("click", cereal);

q4a1.addEventListener("click", milk);
q4a2.addEventListener("click", cereal);

q5a1.addEventListener("click", cereal);
q5a2.addEventListener("click", milk);

q6a1.addEventListener("click", milk);
q6a2.addEventListener("click", cereal);

q7a1.addEventListener("click", cereal);
q7a2.addEventListener("click", milk);

// changing result display 
var result = document.getElementById("result");

// restart button 
var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

function restartQuiz() {
  qCount = 0;
  milkCount = 0;
  cerealCount = 0;
  result.innerHTML = "Your result is...";
  reaction.innerHTML = "";
  enableButton();
}

function milk() {
  milkCount+=1;
  qCount+=1;
  console.log("questionCount = " + qCount + " milkCount = " + milkCount);

  if (qCount == 7) {
    console.log("The quiz is done!");
    updateResult("button");
  }

}

function cereal() {
  cerealCount+=1;
  qCount+=1;
  console.log("questionCount = " + qCount + " cerealCount = " + cerealCount);

  if (qCount == 7) {
    console.log("The quiz is done!");
    updateResult("button");
  }

}

var reaction = document.getElementById("reaction");

function updateResult() {
  if (milkCount > cerealCount) {
    console.log("you definitely put milk before your cereal");
    result.innerHTML = "You definitely put milk before your cereal.";
    reaction.innerHTML = "Maybe rethink your life choices...";
  }
  else if (milkCount < cerealCount) {
    console.log("you definitely put cereal before your milk");
    result.innerHTML = "You definitely put cereal before your milk.";
    reaction.innerHTML = "Great Choice!";
  }
}

function disable(b) {
  b.disabled= true; 
}

function enableButton() {
  q1a1.disabled= false;
  q1a2.disabled= false;
  q2a1.disabled= false;
  q2a2.disabled= false;
  q3a1.disabled= false;
  q3a2.disabled= false;
  q4a1.disabled= false;
  q4a2.disabled= false;
  q5a1.disabled= false;
  q5a2.disabled= false;
  q6a1.disabled= false;
  q6a2.disabled= false;
  q7a1.disabled= false;
  q7a2.disabled= false;
}