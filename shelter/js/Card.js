export class Card {
    constructor({ id, name, img, ...rest }) {
        this.id = id;
        this.name = name;
        this.img = img;
    }

    // Article generator
    generateCard(){
        let template = '';
        let article = document.createElement('article');
        article.className = 'friend__card';
        article.setAttribute('data-id', this.id)

        // if (this.img) {
        //     template += `<img class="card__img" src="${this.img}" alt="jennifer.png">`
        // }

        // this.img &&
        // (template += `<img class="card__img" src="${this.img}" alt="jennifer.png">`)

        if (this.img) {
            template += `<div class="card__img"></div>`
        }

        if (this.name){
            template += `<span class="card__name">${this.name}</span>`
        }
    }
}