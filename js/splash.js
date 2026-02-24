window.addEventListener("load", function() {
	setTimeout(function() {
		document.getElementById("splash").classList.add("fade-out");
		document.getElementById("content").style.display = "block";
	}, 2500); // duración total del splash
});
