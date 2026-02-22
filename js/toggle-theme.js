const button = document.getElementById("toggle-theme");
const icon = document.getElementById("icon");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
	icon.classList.remove("fa-sun");
	icon.classList.add("fa-moon");
  }

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
	if (document.body.classList.contains("dark")) {
		icon.classList.remove("fa-sun");
		icon.classList.add("fa-moon");
    } else {
		icon.classList.remove("fa-moon");
		icon.classList.add("fa-sun");
    }
  });
