/**
 * Target elements in the DOM.
 */
const textArea = document.querySelector(".input-text"),
	checkBtn = document.querySelector(".btn"),
	resultArea = document.querySelector(".result");

/**
 * @param {String} text
 * This function checks if the entered text is a valid as a palindrome
 * or not.
 */
function palindromeCheck(text) {
	if (text.trim().length < 0 || text === "") {
		showResult("Please add a valid text");
	} else if (text.trim().split("").reverse().join("") === text) {
		showResult("True this's a valid palindrome");
	} else {
		showResult("False this's not a valid palindrome");
	}
}

/**
 * @param {String} massage
 * Throw the result under input.
 */
function showResult(massage) {
	resultArea.textContent = massage;
}

checkBtn.addEventListener("click", () => {
	palindromeCheck(textArea.value);
});
