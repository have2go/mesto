export default class Section {
    constructor({ data, renderer }, containerSelector) {
        this._items = data;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }


    createCards() {
        this._items.forEach((item) => {
          this._renderer(item);
        });
    }

    addItem(card) {
        document.querySelector(this._containerSelector).append(card);
    }
}