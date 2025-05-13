document.addEventListener("DOMContentLoaded", function() {
    const contactBar = document.querySelector(".contact-bar");

    window.addEventListener("scroll", function() {
        const scrollHeight = window.scrollY + window.innerHeight;
        const totalHeight = document.documentElement.scrollHeight;

        if (scrollHeight >= totalHeight - 10) { 
            contactBar.classList.add("visible"); // Montre la barre
        } else {
            contactBar.classList.remove("visible"); // Cache la barre
        }
    });
});
