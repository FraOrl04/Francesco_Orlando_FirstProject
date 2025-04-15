// Ricerca articoli
function search() {
    const parola = document.getElementById("search").value.toLowerCase();
    const articoli = document.querySelectorAll(".card");

    articoli.forEach(articolo => {
        const testo = articolo.textContent.toLowerCase();
        articolo.style.display = testo.includes(parola) ? "block" : "none";
    });
}

// Menu a tendina al click
const toggleMenu = document.getElementById("toggleMenu");
const menuTendina = document.getElementById("menuTendina");

toggleMenu.addEventListener("click", function (e) {
    e.preventDefault();
    menuTendina.classList.toggle("show");

    // Toggle manuale della proprietà CSS
    const currentPosition = menuTendina.style.position || window.getComputedStyle(menuTendina).position;

    if (currentPosition === "fixed") {
        menuTendina.style.position = "absolute";
    } else {
        menuTendina.style.position = "fixed";
    }
});

// Chiudi se clicchi fuori dal menu
document.addEventListener("click", function (e) {
    if (!toggleMenu.contains(e.target) && !menuTendina.contains(e.target)) {
        menuTendina.classList.remove("show");

    }
});
