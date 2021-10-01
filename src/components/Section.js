export default class Section {
    constructor({ data, renderer }, containerSelector) {
        this._items = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }


    createCards() {
        this._items.forEach((item) => {
          this._renderer(item);
        });
    }

    addItem(card) {
        this._container.append(card);
    }
    // я создаю метод для добавления карточки в начало списка при добавлении её пользователем
    addNewCard(card) {
        this._container.prepend(card);
    }
}