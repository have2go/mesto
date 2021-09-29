import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
    }

    _getInputValues() {
        this._form = document.querySelector(this._popupSelector);

        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
        this._firstInput = this._inputList[0].value;
        this._secondInput = this._inputList[1].value;
    }


    setEventListeners() {
       super.setEventListeners();
       this._submitCallback();
    }

    close() {
        super.close();
        // this._form.reset();
    }
}