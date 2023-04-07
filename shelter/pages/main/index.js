const elementsMain = {
    hamburgerNav: document.querySelector('.hamburger_nav'),
    menu: document.querySelector('.hamburger-menu'),
    body: document.querySelector('body')
}

window.onload = function () {
    console.log('Hello Rolling Scopes!')

    // HAMBURGER & MENU
    addHamburgerClickHandler();
}

// HAMBURGER & MENU
const addHamburgerClickHandler = () => {
    elementsMain.hamburgerNav.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', e => {
        let target = e.target;
        console.log(target)
        let its_hamburger = target === elementsMain.hamburgerNav;
        let menu_is_active = elementsMain.menu.classList.contains('active');

        if (!its_hamburger && menu_is_active) {
            e.stopPropagation();
            toggleMenu();
        }
    })
}

const toggleMenu = () => {
    elementsMain.hamburgerNav.classList.toggle('active');
    elementsMain.menu.classList.toggle('active');
    elementsMain.body.classList.toggle('fix');
}

// SLIDER
// PAGINATION
// POPUP








// imgJen: document.querySelector('.img_jennifer')
// elementsMain.imgJen.style.backgroundImage = "url('../../sass/assets/images/pets-katrine.png')";


