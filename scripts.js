const professionText = "JAVA Backend Developer";
const professionElement = document.querySelector('.profession');

let charIndex = 0;
function typeProfession() {
  if (charIndex < professionText.length) {
    professionElement.textContent += professionText.charAt(charIndex);
    charIndex++;
    setTimeout(typeProfession, 100);
  } else {
    professionElement.classList.remove('typing');
  }
}

window.addEventListener('load', () => {
  professionElement.classList.add('typing');
  typeProfession();
});

let resume = document.getElementById('resume-button-2');
resume.addEventListener("click", () => {
  window.open("https://drive.google.com/drive/u/3/folders/1fkJdx2FWop9rAZAXG8wAP3E5_a9QJ7Ly", "_blank");
});

