
// =================================
// RICHM4 HAMBURGER MENU
// =================================

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (!hamburger || !navLinks) return;

    // Toggle menu
    hamburger.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        hamburger.classList.toggle("active", isOpen);

        hamburger.setAttribute("aria-expanded", isOpen);

        hamburger.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            hamburger.classList.remove("active");

            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "Open navigation menu");

        });

    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {

        if (
            !hamburger.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {

            navLinks.classList.remove("active");
            hamburger.classList.remove("active");

            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "Open navigation menu");

        }

    });

    // Close menu with Escape key
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");
            hamburger.classList.remove("active");

            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "Open navigation menu");

        }

    });

});
