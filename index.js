let modalButton = document.querySelector("#modal-button");
let closeButton = document.querySelector(".close-button");
let overlay = document.getElementById("overlay");
let modal = document.querySelector(".modal");

modalButton.addEventListener("click", function () {
	modal.classList.add("active");
	overlay.classList.add("active");
});

closeButton.addEventListener("click", function () {
	modal.classList.remove("active");
	overlay.classList.remove("active");
});

overlay.addEventListener("click", function () {
	modal.classList.remove("active");
	overlay.classList.remove("active");
});
