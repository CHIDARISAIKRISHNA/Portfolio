const textArray = ["Full Stack Web Developer", "Web Developer"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");
function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}
function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});
document.querySelectorAll('.scroll-to').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
event.preventDefault();
const formData = {
  name: event.target.name.value,
  email: event.target.email.value,
  phone: event.target.phone.value,
  message: event.target.message.value
};
console.log('Form data:', formData);
alert('Thank you for contacting me! I will get back to you shortly.');
event.target.reset();
});
