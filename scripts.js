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