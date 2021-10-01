import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
// import Popup from './scripts/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  validationSelectors,
  addButton,
  editButton,
  cardsContainer,
  cardSelector,
  formNewCard,
  formProfile,
  nameInput,
  aboutInput,
  popupProfileSelector,
  popupNewCardSelector,
  popupBigImageSelector,
  userInfoSelectors
} from '../utils/constants.js';


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
const popupNewCard = new PopupWithForm(popupNewCardSelector, submitNewCardForm);
const bigImagePopup = new PopupWithImage(popupBigImageSelector);
const userInfo = new UserInfo(userInfoSelectors);

  
function openProfilePopup() {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    aboutInput.value = userData.about;
    formProfileValidator.enableSubmitButton();
    formProfileValidator.removeValidationErrors();
    popupProfile.open();
};
  
function openNewCardPopup() {
    formNewCardValidator.removeValidationErrors();
    formNewCardValidator.disableSubmitButton();
    popupNewCard.open();
};

function submitProfileForm(inputValues) {
    userInfo.setUserInfo(inputValues);
    popupProfile.close();
};

function submitNewCardForm(inputValues) {
  cardList.addNewCard(createCard(inputValues.title, inputValues.link, '#'));
  formNewCardValidator.disableSubmitButton();
  popupNewCard.close();
}

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