import './pages/index.css';
import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import { initialCards, validationSelectors } from './scripts/data.js';
import Popup from './scripts/Popup.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';

// const popups = document.querySelectorAll('.popup');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const closeButtonProfile = document.querySelector('#profile-btn');
const closeButtonNewCard = document.querySelector('#newcard-btn');
// const cardsList = document.querySelector('.elements');
const cardsContainer = '.elements';                    
const cardSelector = '#cards-template';
// const popupImage = document.querySelector('.img-popup__element');
// const popupText = document.querySelector('.img-popup__text');
const closeImage = document.querySelector('.img-popup__close-btn');
// const popupBigImage = document.querySelector('.img-popup');
// const popupProfile = document.querySelector('.popup_profile');
// const popupNewCard = document.querySelector('.popup_newcard');
const formNewCard = document.querySelector('#newcard-form');
const formProfile = document.querySelector('#profile-form');
const nameInput = document.querySelector('.popup__input_type_name');      
const aboutInput = document.querySelector('.popup__input_type_about');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__description');

const popupProfileSelector = '.popup_profile';
const popupNewCardSelector = '.popup_newcard';
const popupBigImageSelector = '.img-popup';

const formNewCardValidator = new FormValidator(validationSelectors, formNewCard);
formNewCardValidator.enableValidation();

const formProfileValidator = new FormValidator(validationSelectors, formProfile);
formProfileValidator.enableValidation();

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
      const card = createCard(item.name, item.link, item.alt, '#');
      cardList.addItem(card);
    }
  } ,
  cardsContainer
);

cardList.createCards();

const popupProfile = new PopupWithForm(popupProfileSelector, submitProfileForm);
const popupNewCard = new PopupWithForm(popupNewCardSelector, createCard);
const bigImagePopup = new PopupWithImage(popupBigImageSelector);

// popupProfile._getInputValues();
  
function openProfilePopup() {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    formProfileValidator.enableSubmitButton();
    formProfileValidator.removeValidationErrors();
    popupProfile.open();
};
  
function openNewCardPopup() {
    formNewCardValidator.removeValidationErrors();
    formNewCard.reset();
    formNewCardValidator.disableSubmitButton();
    popupNewCard.open();
};

function submitProfileForm () {
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupProfile.close();
};

function handleCardClick(name, link) {
  bigImagePopup.open(name,link);  
}


function createCard(name, link, alt) {
  const card = new Card(name, link, alt, cardSelector, handleCardClick);
  const cardElement = card.render();

  return cardElement;
}

// слушатели
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openNewCardPopup);
closeButtonProfile.addEventListener('click', () => {popupProfile.close()});
closeButtonNewCard.addEventListener('click', () => {popupNewCard.close()});
formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitProfileForm();
});
formNewCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardInfo = {
    name: titleInput.value,
    link: linkInput.value
  };
  cardList.addItem(createCard(cardInfo.name, cardInfo.link, '#'));
  formNewCardValidator.disableSubmitButton();
  popupNewCard.close();
});
closeImage.addEventListener('click', () => {bigImagePopup.close()});