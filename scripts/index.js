import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, validationSelectors } from './data.js';

const popups = document.querySelectorAll('.popup');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');       // кнопка редактирования (карандаш)
const closeButtonProfile = document.querySelector('#profile-btn');
const closeButtonNewCard = document.querySelector('#newcard-btn');
const cardsList = document.querySelector('.elements');                    // вся секция с карточками
const cardSelector = '#cards-template';
const popupImage = document.querySelector('.img-popup__element');
const popupText = document.querySelector('.img-popup__text');
const closeImage = document.querySelector('.img-popup__close-btn');
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

formProfileValidator.enableValidation();
formNewCardValidator.enableValidation();

//// открывашки
function openPopup(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    document.addEventListener('mousedown', closePopupMouse);
};
  
function openProfilePopup() {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    formProfileValidator.enableSubmitButton();
    formProfileValidator.removeValidationErrors();
    openPopup(popupProfile);
};
  
function openNewCardPopup() {
    openPopup(popupNewCard);
    formNewCardValidator.removeValidationErrors();
    formNewCard.reset();
    formNewCardValidator.disableSubmitButton();
};
  
  //// закрывашки
function closePopup(element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
    document.removeEventListener('mousedown', closePopupMouse);
};
  
function closePopupProfile() {
    closePopup(popupProfile);
};
  
function closePopupNewCard() {
    closePopup(popupNewCard);
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

function submitProfileForm (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupProfile);
};

function handleCardClick(name, link) {
  popupImage.src = link;
  popupText.textContent = name;
  openPopup(popupBigImage);  
}


function createCard(name, link, alt) {
  const card = new Card(name, link, alt, cardSelector, handleCardClick);
  const cardElement = card.render();

  return cardElement;
}

initialCards.forEach((item) => {
  document.querySelector('.elements').append(createCard(item.name, item.link, item.alt));
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
  cardsList.insertBefore(createCard(cardInfo.name, cardInfo.link, '#'), cardsList.firstChild);
  formNewCardValidator.disableSubmitButton();
  closePopupNewCard();
});
closeImage.addEventListener('click', closePopupBigImage);

// самое крутое ревью, спасибо!