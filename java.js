document.addEventListener("DOMContentLoaded", () => {
    // Form Validation
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            let isValid = true;
            const inputs = form.querySelectorAll("input, textarea");
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "2px solid green";
                }
            });
            if (isValid) {
                alert("Form submitted successfully!");
                form.reset();
            }
        });
    });

    // FAQ Collapsible Sections
    const faqButtons = document.querySelectorAll(".question");
    faqButtons.forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });

    // Simple Animation on Scroll
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });
});
