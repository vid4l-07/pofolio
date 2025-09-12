const img = document.getElementById("img");
        const btn = document.getElementById("imgbtn")

        btn.addEventListener("click", () => {
            img.classList.toggle("visible");
        });