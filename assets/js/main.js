const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
