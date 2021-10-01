export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this); // привязываю обработчик к конкретному попапу, иначе он применяет this.close() ко всему документу и ничего не работает
        this._handleMouseClose = this._handleMouseClose.bind(this);
        this._closeBtn = this._popup.querySelector('.popup__close-btn');
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
        this._closeBtn.removeEventListener('click', () => {this.close()});
    }

    setEventListeners() {
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('mousedown', this._handleMouseClose);
        this._closeBtn.addEventListener('click', () => {this.close()});
    }

    open() {
        this.setEventListeners();
        this._popup.classList.add('popup_opened');
    }

    close() {
        this._removeEventListeners();
        this._popup.classList.remove('popup_opened');
    }
}