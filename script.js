const words = [" student.", " problem solver."];
const dynamicText = document.getElementById("dynamic-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.slice(0, charIndex);

  dynamicText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    // Typing effect
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    // Deleting effect
    charIndex--;
    setTimeout(typeEffect, 50);
  } else if (!isDeleting && charIndex === currentWord.length) {
    // Pause before deleting
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    // Move to the next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
