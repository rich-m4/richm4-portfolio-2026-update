
// =================================
// RICHM4 SCROLL ANIMATIONS
// =================================

document.addEventListener("DOMContentLoaded", () => {

    // Select elements to animate
    const elements = document.querySelectorAll(
        ".about, .work, .skilltxt, .listtxt, " +
        ".contacts, .blog-heading, .blog-posts, .post-card"
    );

    // Add reveal animation class
    elements.forEach(element => {
        element.classList.add("reveal");
    });

    // Create observer
    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                // Stop observing after animation
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    // Observe all elements
    elements.forEach(element => {
        observer.observe(element);
    });

});


// Staggered artwork animations

const artwork = document.querySelectorAll(".work-asset img");

artwork.forEach((image, index) => {

    image.classList.add("reveal");

    image.style.transitionDelay = `${index * 0.15}s`;

});


const elements = document.querySelectorAll(
    ".about, .work, .skilltxt, .listtxt, " +
    ".contacts, .blog-heading, .blog-posts, " +
    ".post-card, .work-asset img"
);

