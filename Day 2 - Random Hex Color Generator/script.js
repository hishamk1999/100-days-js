// Target elements on the dom.
const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

/**
 * This function is used to generate a random hex string.
 */
function generateRandomColor() {
	/**
	 * the Math.random() function is used to generate a random number.
	 * the toString() function is used to converts it to a hexadecimal string.
	 * the subString() function is used to Returns the substring
	 *  at the specified location within a String object.
	 * */
	const hexStringColor = Math.random().toString(16).substring(2, 8);

	// Set the body background color to the specified color (hexStringColor).
	document.body.style.backgroundColor = `#${hexStringColor}`;

	// Set the hex <span> innerText to the specified color (hexStringColor).
	hex.innerHTML = `#${hexStringColor}`;
}

// Add listener for click events to invoke the generateRandomColor() function.
btn.addEventListener("click", generateRandomColor);
