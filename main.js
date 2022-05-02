const hamburgerMenu = document.querySelector('.side__hamburger');

const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active')
}

hamburgerMenu.addEventListener('click', menuIsActive);


//   window.addEventListener('scroll', (e) => {e.})