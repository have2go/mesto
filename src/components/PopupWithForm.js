import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }
     _submitHandler = (evt) => {
         evt.preventDefault();
         this._submitCallback(this._getInputValues());
     }


    setEventListeners() {
       super.setEventListeners();
       this._form.addEventListener('submit', this._submitHandler)
    }

    _removeEventListeners() {
        super._removeEventListeners();
        this._form.removeEventListener('submit', this._submitHandler)
    }

    close() {
        super.close();
        this._form.reset();
    }
}