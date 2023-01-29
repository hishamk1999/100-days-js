/**
 * Target Elements in the DOM.
 */
const numberAria = document.querySelector(".number");
const generateBtn = document.querySelector(".generate");

/**
 * This function generates a random number and then
 * sets the number in the DOM.
 */
function generateRandomNumber() {
	// Generate a random number between 0 and 10;
	const randomNumber = Math.floor(Math.random() * 10 + 1);
	// set the random number in the element DOM.
	numberAria.textContent = randomNumber;
}

// add event listeners to the button element.
generateBtn.addEventListener("click", generateRandomNumber);

// Execute the generator function when page is loaded.
window.addEventListener("load", generateRandomNumber);
