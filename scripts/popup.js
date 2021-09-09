import { validationSelectors } from './data.js';
import FormValidator from './FormValidator.js';

const popupBigImage = document.querySelector('.img-popup');
const popupProfile = document.querySelector('.popup_profile');
const popupNewCard = document.querySelector('.popup_newcard');
const formNewCard = document.querySelector('#newcard-form');
const formProfile = document.querySelector('#profile-form');
const nameInput = document.querySelector('.popup__input_type_name');      
const aboutInput = document.querySelector('.popup__input_type_about');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__description');

const formNewCardValidator = new FormValidator(validationSelectors, formNewCard);
const formProfileValidator = new FormValidator(validationSelectors, formProfile);

//// открывашки
function openPopup(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    document.addEventListener('mousedown', closePopupMouse);
  
};
  
  // функция открывает попап, добавляя модификатор блоку popup и вносит в инпуты значения со страницы
function openProfilePopup() {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    formProfileValidator.enableSubmitButton();
    openPopup(popupProfile);
};
  
function openNewCardPopup() {
    openPopup(popupNewCard);
};
  
  //// закрывашки
function closePopup(element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
    document.removeEventListener('mousedown', closePopupMouse);
};
  
function closePopupProfile() {
    closePopup(popupProfile);
    formProfileValidator.removeValidationErrors();
};
  
function closePopupNewCard() {
    closePopup(popupNewCard);
    formNewCard.reset();
    formNewCardValidator.removeValidationErrors();
    formNewCardValidator.disableSubmitButton();
};
  
function closePopupBigImage() {
    closePopup(popupBigImage);
};
  
function closePopupEsc(el) {
    if (el.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
    }
};
  
function closePopupMouse(el) {
    if (el.target.classList.contains('popup_opened')) {
      closePopup(el.target);
    }
};

  // функция заменяет имя и описание на страницы данными из инпутов и зыкрывает попап
function submitProfileForm (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupProfile);
};

export { openPopup, openProfilePopup, openNewCardPopup,
closePopup, closePopupProfile, closePopupNewCard, closePopupBigImage,
closePopupEsc, closePopupMouse, submitProfileForm, popupBigImage,
popupProfile, popupNewCard, formNewCard, formNewCardValidator, formProfileValidator,
formProfile, nameInput, aboutInput, titleInput, linkInput,
profileName, profileAbout };