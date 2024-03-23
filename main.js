document.addEventListener("DOMContentLoaded", function() {
    const moonButton = document.querySelector(".cabecalho__moon");

    moonButton.addEventListener("click", function() {
        toggleDarkMode();
    });

    function toggleDarkMode() {
        const body = document.querySelector("body");
        body.classList.toggle("dark-mode");
    }
});
