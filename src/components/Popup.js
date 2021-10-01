export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this); // привязываю обработчик к конкретному попапу, иначе он применяет this.close() ко всему документу и ничего не работает
        this._handleMouseClose = this._handleMouseClose.bind(this);
    }

    _handleEscClose(el) {
        if (el.key === 'Escape') {
            this.close();
          }
    }

    _handleMouseClose(el) {
        if (el.target.classList.contains('popup') || el.target.classList.contains('popup__close-btn')) {
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
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        this._popup.classList.remove('popup_opened');
        this._removeEventListeners();
    }
}