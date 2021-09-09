import Card from './Card.js';
import FormValidator from './FormValidator.js';

import { openPopup, openProfilePopup, openNewCardPopup,
         closePopup, closePopupProfile, closePopupNewCard,
         closePopupBigImage, closePopupEsc, closePopupMouse,
         submitProfileForm, popupBigImage, popupProfile,
         popupNewCard, formNewCard, formNewCardValidator,
         formProfileValidator, formProfile, nameInput,
         aboutInput, titleInput, linkInput, profileName,
         profileAbout } from './popup.js';

import { initialCards } from './data.js';

const popups = document.querySelectorAll('.popup');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');       // кнопка редактирования (карандаш)
const closeButtonProfile = document.querySelector('#profile-btn');
const closeButtonNewCard = document.querySelector('#newcard-btn');
const cardsList = document.querySelector('.elements');                    // вся секция с карточками
const cardsTemplate = document.querySelector('#cards-template').content;  // шаблон одной карточки
const popupImage = document.querySelector('.img-popup__element');
const popupText = document.querySelector('.img-popup__text');
const closeImage = document.querySelector('.img-popup__close-btn');

formProfileValidator.enableValidation();
formNewCardValidator.enableValidation();

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, item.alt);
  const cardElement = card.render();

  document.querySelector('.elements').append(cardElement);
});

// слушатели
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openNewCardPopup);
closeButtonProfile.addEventListener('click', closePopupProfile);
closeButtonNewCard.addEventListener('click', closePopupNewCard);
formProfile.addEventListener('submit', submitProfileForm);
formNewCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardInfo = {
    name: titleInput.value,
    link: linkInput.value
  };
  const newCard = new Card(cardInfo.name, cardInfo.link, '#');
  cardsList.insertBefore(newCard.render(), cardsList.firstChild);
  formNewCardValidator.disableSubmitButton();
  closePopupNewCard();
});
closeImage.addEventListener('click', closePopupBigImage);
