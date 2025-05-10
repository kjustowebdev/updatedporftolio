const roles = ["data analyst",  "Structured cable technician"];
let roleIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeText(text, index = 0) {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    setTimeout(() => typeText(text, index + 1), 100);
  } else {
    setTimeout(() => eraseText(text), 1000);
  }
}

function eraseText(text) {
  if (text.length > 0) {
    typingElement.textContent = text.slice(0, -1);
    setTimeout(() => eraseText(typingElement.textContent), 100);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(() => typeText(roles[roleIndex]), 500);
  }
}

typeText(roles[roleIndex]);
