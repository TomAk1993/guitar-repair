
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelectorAll('.nav-link');

const nav = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('active');
})

/*nav.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('open');
}) 
*/
