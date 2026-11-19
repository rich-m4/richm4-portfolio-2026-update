
document.addEventListener("DOMContentLoaded", () => {

    // Select all main sections
    const sections = document.querySelectorAll(
        ".profile, .about, .work, .colorred, .contacts, .blog"
    );

    // Add animation class
    sections.forEach(section => {
        section.classList.add("fade-section");
    });

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                // Animate only once
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    // Observe sections
    sections.forEach(section => {
        observer.observe(section);
    });

});
