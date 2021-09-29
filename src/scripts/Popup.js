export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this); // привязываю обработчик к конкретному попапу, иначе он применяет this.close() ко всему документу и ничего не работает
        this._handleMouseClose = this._handleMouseClose.bind(this);
    }

    _handleEscClose(el) {
        if (el.key === 'Escape') {
            this.close();
          }
    }

    _handleMouseClose(el) {
        if (el.target.classList.contains('popup')) {
            this.close();
        }
    }

    _removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('mousedown', this._handleMouseClose);
    }

    setEventListeners() {
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('mousedown', this._handleMouseClose);
    }

    open() {
        this.setEventListeners();
        document.querySelector(this._popupSelector).classList.add('popup_opened');
    }

    close() {
        this._removeEventListeners();
        document.querySelector(this._popupSelector).classList.remove('popup_opened');
    }
}