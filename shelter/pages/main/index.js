// import { Card } from "../../js/Card";


// const cardName = document.querySelector('.card__name');
// // const cardImg = document.querySelector('.card__img');
//
// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
//
// async function getDatePets() {
//     const quotes = '../pets.json';
//     const res = await fetch(quotes);
//     const data = await res.json();
//     let petsNum = getRandomNum(0, data.length - 1);
//     if (data[petsNum]) {
//         // cardImg.textContent = data[quoteNum]['text'];
//         cardName.textContent = data[petsNum]['name'];
//     } else {
//         await getDatePets()
//     }
// }

const pets = [
    {
        "name": "Jennifer",
        "img": "../../sass/assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../sass/assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../sass/assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    }
]

window.onload = function() {
    console.log('Hello Rolling Scopes!');

    // Render Cards
    if (pets) {
        renderCardsToDom();
    }
}

const renderCardsToDom = () => {
    const friendsSlider = getFriendsSlider();
}

const getFriendsSlider = () => {
    const friendsSliderContainer = document.querySelector('.friends__slider');
    friendsSliderContainer.innerHTML = '';
    return friendsSliderContainer
}


//     if (data[quoteNum]['lang'] === language) {
//     quoteContent.textContent = data[quoteNum]['text'];
//     author.textContent = data[quoteNum]['author'];
// } else {
//     await getQuotes()
// }







// // SHOW QUOTES
// async function getQuotes() {
//     const quotes = './data.json';
//     const res = await fetch(quotes);
//     const data = await res.json();
//     let quoteNum = getRandomNum(0, data.length - 1);
//     if (data[quoteNum]['lang'] === language) {
//         quoteContent.textContent = data[quoteNum]['text'];
//         author.textContent = data[quoteNum]['author'];
//     } else {
//         await getQuotes()
//     }
// }
//
// changeQuote.addEventListener('click', getQuotes);