document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("mobileMenu");
    const closeBtn = document.getElementById("menuClose");
    const links = menu.querySelectorAll("a");

    if (!hamburger || !menu) {
        console.error("Hamburger or menu not found");
        return;
    }

    hamburger.addEventListener("click", () => {
        menu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });

});
