document.addEventListener("DOMContentLoaded", function() {
    const moonButton = document.querySelector(".cabecalho__moon");
   
    const moonImage = "./img/cabecalho/moon.png";
    const sunImage = "./img/cabecalho/sun.png";

    let isDarkMode = false;

    moonButton.addEventListener("click", function() {
        toggleDarkMode();
    });

    function toggleDarkMode() {
        const body = document.querySelector("body");
        body.classList.toggle("dark-mode");

        const image = moonButton.querySelector("img");
        if (isDarkMode) {
            image.src = moonImage;
        } else {
            image.src = sunImage;
        }
        isDarkMode = !isDarkMode;
    }
});