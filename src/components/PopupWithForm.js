import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._popup.querySelector('.popup__save-btn');
        this._submitButtonText = this._popup.querySelector('.popup__save-btn').textContent;
    }


    renderLoading(isLoading) {
        if (isLoading) {
          this._submitButton.textContent = 'Сохранение...';
        } else {
          this._submitButton.textContent = this._submitButtonText;
        }
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