let fqas = document.querySelectorAll(".fqa");

fqas.forEach((fqa) => {
    fqa.addEventListener('click', function (evt) {
        let isActive = this.classList.contains("active");
        fqas.forEach(active => {
            active.classList.remove("active");
    });
    if (!isActive) {
        this.classList.add("active");
    }
    });
});
