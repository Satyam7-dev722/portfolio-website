
// Select all elements that should animate
const hiddenElements = document.querySelectorAll(".hidden");

// Detect when elements enter the screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

// Watch each hidden element
hiddenElements.forEach((element) => {
    observer.observe(element);
});
const typingText = document.getElementById("typing-text");
if(typingText){
const messages = [
    "I'm learning web development.",
    "I build creative websites.",
    "I'm exploring JavaScript."
];

let messageIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const message = messages[messageIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = message.substring(0, characterIndex);

    let speed = deleting ? 40 : 80;

    if (!deleting && characterIndex === message.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
}
const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Light Mode";
        } else {
            themeButton.textContent = "🌙 Dark Mode";
        }
    });
}