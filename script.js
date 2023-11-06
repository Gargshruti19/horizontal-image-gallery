let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", function (e) {
	e.preventDefault();

	scrollContainer.scrollLeft += e.deltaY;
	scrollContainer.style.scrollBehavior = "auto";
});
nextBtn.addEventListener("click", function () {
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", function () {
	scrollContainer.style.scrollBehavior = "smooth";

	scrollContainer.scrollLeft -= 900;
});


