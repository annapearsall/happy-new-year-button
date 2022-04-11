// Behavior or interactions

// JS Expression OBJECT(noun) dot ACTION(verb) (OPTION (adverb))
// Datatypes
console.log('Anna');
// numbers not in quotes
console.log(27);
console.log(true);

// Single line comment
/*
multi
line comment
*/

// get button
const button = document.querySelector("button");
// listen for click
button.addEventListener("click", function () {
  // Get the Date object
  let today = new Date();
  let year = today.getFullYear();
  console.log(year);

  //console.log(document.querySelector("span").textContent);
  // Get the year
  const yearToShow = document.querySelector("span");
  // Set the year
  yearToShow.textContent = year;

  //   Run Confetti
  confetti();
});