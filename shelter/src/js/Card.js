export class Card {
    constructor({ id, name, img, ...rest }) {
        this.id = id;
        this.name = name;
        this.img = img;
    }

    // Card generator
    generateCard() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'friend__card';
        article.setAttribute('data-id', this.id)
        if (this.img) {
            template += `<img class="card__img" src="${this.img}" alt="${this.name}.png">`
        }
        if (this.name){
            template += `<span class="card__name">${this.name}</span>`
        }
        template += `<a class="card__link"><div class="btn btn_card">Learn more</div></a>`

        article.innerHTML = template;
        return article;
    }
}
