import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._form = document.querySelector('.confirm-popup__content');
        this._submitButton = this._popup.querySelector('.confirm-popup__btn');
        this._submitButtonText = this._popup.querySelector('.confirm-popup__btn').textContent;

        this._card = null;
        this._cardId = null;
    }

    renderLoading(isLoading) {
        if (isLoading) {
          this._submitButton.textContent = 'Удаление...';
        } else {
          this._submitButton.textContent = this._submitButtonText;
        }
      }

    getCardToDelete(card, id) {
        this._card = card;
        this._cardId = id;
    }

    _submitHandler = (evt) => {
        evt.preventDefault();
        this._submitCallback(this._card, this._cardId);
    }


   setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', this._submitHandler)
   }

   _removeEventListeners() {
       super._removeEventListeners();
       this._form.removeEventListener('submit', this._submitHandler)
   }

}