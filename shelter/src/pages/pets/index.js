const elementsPets = {
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
    elementsPets.hamburgerNav.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', e => {
        let target = e.target;
        console.log(target)
        let its_hamburger = target === elementsPets.hamburgerNav;
        let menu_is_active = elementsPets.menu.classList.contains('active');

        if (!its_hamburger && menu_is_active) {
            e.stopPropagation();
            toggleMenu();
        }
    })
}

const toggleMenu = () => {
    elementsPets.hamburgerNav.classList.toggle('active');
    elementsPets.menu.classList.toggle('active');
    elementsPets.body.classList.toggle('fix');
}