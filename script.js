// REVEAL ON SCROLL
window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 150) {
            element.classList.add("active");
        }
    });
});

// SMOOTH SCROLL
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}