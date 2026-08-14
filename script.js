/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {

    const menuIsOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        menuIsOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    menuToggle.textContent =
        menuIsOpen ? "✕" : "☰";
});


/* Close mobile navigation after clicking a link */

const navigationLinks =
    document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";

    });

});


/* =====================================================
   PROJECT FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-button");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category =
            button.getAttribute("data-filter");


        /* Change active filter */

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");


        /* Filter projects */

        projectCards.forEach(function (project) {

            const projectCategory =
                project.getAttribute("data-category");

            if (
                category === "all" ||
                category === projectCategory
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* =====================================================
   PROJECT MODAL
===================================================== */

const projectModal =
    document.getElementById("projectModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const closeModal =
    document.getElementById("closeModal");

const projectButtons =
    document.querySelectorAll(".project-button");


projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const title =
            button.getAttribute("data-title");

        const description =
            button.getAttribute("data-description");

        modalTitle.textContent = title;

        modalDescription.textContent =
            description;

        projectModal.classList.add("show");

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        closeModal.focus();

    });

});


/* Close modal */

function closeProjectModal() {

    projectModal.classList.remove("show");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


closeModal.addEventListener(
    "click",
    closeProjectModal
);


/* Close modal by clicking outside */

projectModal.addEventListener(
    "click",
    function (event) {

        if (event.target === projectModal) {
            closeProjectModal();
        }

    }
);


/* Close modal using Escape key */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("show")
        ) {

            closeProjectModal();

        }

    }
);


/* =====================================================
   CONTACT FORM VALIDATION
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");

const formSuccess =
    document.getElementById("formSuccess");


/* Email validation */

function validEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


/* Clear errors */

function clearErrors() {

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    messageInput.classList.remove("error");

    formSuccess.textContent = "";

}


/* Validate form */

function validateForm() {

    let valid = true;

    clearErrors();


    /* Name */

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        nameInput.classList.add("error");

        valid = false;

    }


    /* Email */

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email address.";

        emailInput.classList.add("error");

        valid = false;

    } else if (
        !validEmail(emailInput.value.trim())
    ) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.classList.add("error");

        valid = false;

    }


    /* Message */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter a message.";

        messageInput.classList.add("error");

        valid = false;

    } else if (
        messageInput.value.trim().length < 10
    ) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        messageInput.classList.add("error");

        valid = false;

    }


    return valid;

}


/* Form submit */

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        if (validateForm()) {

            formSuccess.textContent =
                "Thank you! Your message has been submitted successfully.";

            contactForm.reset();

        }

    }
);


/* =====================================================
   REAL-TIME VALIDATION
===================================================== */

nameInput.addEventListener(
    "input",
    function () {

        if (nameInput.value.trim() !== "") {

            nameInput.classList.remove("error");

            nameError.textContent = "";

        }

    }
);


emailInput.addEventListener(
    "input",
    function () {

        if (
            validEmail(emailInput.value.trim())
        ) {

            emailInput.classList.remove("error");

            emailError.textContent = "";

        }

    }
);


messageInput.addEventListener(
    "input",
    function () {

        if (
            messageInput.value.trim().length >= 10
        ) {

            messageInput.classList.remove("error");

            messageError.textContent = "";

        }

    }
);


/* =====================================================
   DEBUGGING MESSAGE
===================================================== */

console.log(
    "Portfolio website successfully loaded."
);