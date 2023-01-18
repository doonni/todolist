const menuBtn = document.querySelector('.menu-btn');
const content = document.querySelector('.dropdown_content');
console.log(content);
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    content.style.display="block"
  } else {
    
    menuBtn.classList.remove('open');
    menuOpen = false;
    content.style.display="none"
  }
});