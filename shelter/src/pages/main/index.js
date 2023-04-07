import { Card } from "../../js/Card.js";

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// const data = [
//     {
//         "id": "1",
//         "name": "Jennifer",
//         "img": "../../sass/assets/images/pets-jennifer.png",
//         "type": "Dog",
//         "breed": "Labrador",
//         "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//         "age": "2 months",
//         "inoculations": ["none"],
//         "diseases": ["none"],
//         "parasites": ["none"]
//     },
//     {
//         "id": "2",
//         "name": "Sophia",
//         "img": "../../sass/assets/images/pets-sophia.png",
//         "type": "Dog",
//         "breed": "Shih tzu",
//         "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//         "age": "1 month",
//         "inoculations": ["parvovirus"],
//         "diseases": ["none"],
//         "parasites": ["none"]
//     },
//     {
//         "id": "3",
//         "name": "Woody",
//         "img": "../../sass/assets/images/pets-woody.png",
//         "type": "Dog",
//         "breed": "Golden Retriever",
//         "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//         "age": "3 years 6 months",
//         "inoculations": ["adenovirus", "distemper"],
//         "diseases": ["right back leg mobility reduced"],
//         "parasites": ["none"]
//     }
// ]

async function getCardPets() {
    const cards = '../pets.json';
    const res = await fetch(cards);
    return res.json();
}

// (async () => {
//     let DB = await(await fetch('sample.json')).json();
//
//     console.log(DB);
// })();

const elementsMain = {
    hamburgerNav: document.querySelector('.hamburger_nav'),
    menu: document.querySelector('.hamburger-menu'),
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
// function getSlidePrev() {
//     randomNum < 2 ? randomNum = 20 : randomNum = randomNum - 1;
//     let prevNum = randomNum.toString()
//     prevNum.length < 2 ? prevNum = prevNum.padStart(2, '0') : null
//     setBg(timesOfDay, prevNum)
// }
// function getSlideNext() {
//     randomNum > 20 ? randomNum = 1 : randomNum = randomNum + 1;
//     let nextNum = randomNum.toString()
//     nextNum.length < 2 ? nextNum = nextNum.padStart(2, '0') : null
//     setBg(timesOfDay, nextNum)
// }
//
// slidePrev.addEventListener('click', getSlidePrev)
// slideNext.addEventListener('click', getSlideNext)


// PAGINATION

// POP-UP
const renderArticlesToDom = () => {
    const friendsSlider = getFriendsSlider();
    const data = getCardPets();
    console.log(data)
    generateArrCards(getCardPets()).forEach(card => {
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
