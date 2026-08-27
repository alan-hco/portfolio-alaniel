// ========================================
// MENU ATIVO
// ========================================

const sections = document.querySelectorAll("main section");

const navigationLinks = document.querySelectorAll(
    ".main-navigation a"
);


const observerOptions = {
    root: null,

    rootMargin: "-30% 0px -60% 0px",

    threshold: 0
};


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentSection = entry.target.id;

                navigationLinks.forEach((link) => {

                    link.classList.remove("active");

                });


                const activeLink = document.querySelector(
                    `.main-navigation a[href="#${currentSection}"]`
                );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },

    observerOptions
);


sections.forEach((section) => {

    observer.observe(section);

});