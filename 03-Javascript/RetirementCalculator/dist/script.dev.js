"use strict";

function calculateYearsUntilRetirement(event) {
  var currentAge = event.target.value;
  alert("You have " + (65 - currentAge) + " years until retirement");
}