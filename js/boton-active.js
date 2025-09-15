sections.forEach(current => {
            const id = current.getAttribute("id")
            const h = document.querySelector(`#${id}`).offsetHeight
            const t = document.querySelector(`#${id}`).offsetTop - 80

            if (scrollY > t && scrollY <= t + h) {
                document.querySelector(`.header a[href="#${id}"]`).classList.add("active")
            } else {
                document.querySelector(`.header a[href="#${id}"]`).classList.remove("active")
            }
        })