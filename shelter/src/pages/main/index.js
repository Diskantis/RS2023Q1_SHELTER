import { Card } from "../../js/Card.js";
import { data } from "../../js/Pets.js";

const elementsMain = {
    hamburgerNav: document.querySelector('.hamburger_nav'),
    menu: document.querySelector('.hamburger-menu'),
    bgMenu: document.querySelector('.bg_dark'),
    body: document.querySelector('body')
}

window.onload = function () {
    console.log('Hello Rolling Scopes!')

    // HAMBURGER & MENU
    addHamburgerClickHandler();

    // POP-UP
    renderArticlesToDom();
}

// HAMBURGER & MENU
const addHamburgerClickHandler = () => {
    elementsMain.hamburgerNav.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', e => {
        let target = e.target;
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
    elementsMain.bgMenu.classList.toggle('active');
    elementsMain.body.classList.toggle('fix');
}


// POP-UP
const renderArticlesToDom = () => {
    const friendsSlider = getFriendsSlider();
    generateArrCards(data).forEach(card => {
        friendsSlider.append(card.generateCard())
    })
}

const getFriendsSlider = () => {
    const friendsSliderContainer = document.querySelector('.friends__slider');
    friendsSliderContainer.innerHTML = '';
    return friendsSliderContainer;
}

const generateArrCards = (data) => {
    let arrCards = [];
    data.forEach(card => {
        arrCards.push(new Card(card))
    })
    return arrCards;
}
