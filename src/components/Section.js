export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }


    createCards(data) {
        data.forEach((item) => {
          this._renderer(item);
        });
    }

    addItem(card) {
        this._container.append(card);
    }

    addNewCard(card) {
        this._container.prepend(card);
    }
}