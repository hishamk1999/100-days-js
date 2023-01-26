// Target elements on the dom.
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

/**
 * This function sets the color of the count according to the type of number
 * whether it is positive, negative, or equal to zero.
 */
function setCountColor() {
	if (count.innerHTML > 0) {
		count.style.color = "yellow";
	} else if (count.innerHTML < 0) {
		count.style.color = "orange";
	} else {
		count.style.color = "#fff";
	}
}

// Add Event listeners to the buttons container using (Event Delegation).
buttons.addEventListener("click", (e) => {
	if (e.target.classList.contains("subtract")) {
		count.innerHTML--;
		setCountColor();
	} else if (e.target.classList.contains("reset")) {
		count.innerHTML = 0;
		setCountColor();
	} else if (e.target.classList.contains("add")) {
		count.innerHTML++;
		setCountColor();
	}
});
