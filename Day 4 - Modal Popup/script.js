/**
 * Target elements in the DOM.
 */
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const pupUpBtn = document.querySelector(".btn");

function showPupUp(e) {
	e.preventDefault();
	modal.style.display = "block";
}

function closePupUp() {
	modal.style.display = "none";
}

pupUpBtn.addEventListener("click", showPupUp);
closeBtn.addEventListener("click", closePupUp);
modal.addEventListener("click", closePupUp);
