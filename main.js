var answerSpan = document.getElementById("answer");
var valueOne = document.getElementById("value-one");
var valueTwo = document.getElementById("value-two");
var button = document.getElementById("calculate-button");

function calc (a, b) {
  var val1 = Number(valueOne.value);
  var val2 = Number(valueTwo.value);
  var results = val1 + val2;
  answerSpan.innerHTML = results;
}


button.addEventListener('click', calc);
