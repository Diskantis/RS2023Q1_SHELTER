const elements = {
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
    elements.hamburgerNav.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', e => {
        let target = e.target;
        let its_hamburger = target === elements.hamburgerNav;
        let menu_is_active = elements.menu.classList.contains('active');

        if (!its_hamburger && menu_is_active) {
            e.stopPropagation();
            toggleMenu();
        }
    })
}

const toggleMenu = () => {
    elements.hamburgerNav.classList.toggle('active');
    elements.menu.classList.toggle('active');
    elements.body.classList.toggle('fix');
}






