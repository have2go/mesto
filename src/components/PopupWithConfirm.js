import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._form = document.querySelector('.confirm-popup__content');

        this._card = null;
        this._cardId = null;
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