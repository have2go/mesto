import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
  validationSelectors,
  cardsContainer,
  cardSelector,
  popupProfileSelector,
  popupNewCardSelector,
  popupBigImageSelector,
  popupConfirmSelector,
  popupAvatarSelector,
  userInfoSelectors
} from '../utils/constants.js';

const formNewCard = document.querySelector('#newcard-form');
const formProfile = document.querySelector('#profile-form');
const formAvatar = document.querySelector('#avatar-form');
const nameInput = document.querySelector('.popup__input_type_name');      
const aboutInput = document.querySelector('.popup__input_type_about');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const editAvatarButton = document.querySelector('.profile__shadow');

const userInfo = new UserInfo(userInfoSelectors);

const formNewCardValidator = new FormValidator(validationSelectors, formNewCard);
formNewCardValidator.enableValidation();

const formProfileValidator = new FormValidator(validationSelectors, formProfile);
formProfileValidator.enableValidation();

const formAvatarValidator = new FormValidator(validationSelectors, formAvatar);
formAvatarValidator.enableValidation();

const popupProfile = new PopupWithForm(popupProfileSelector, submitProfileForm);
const popupNewCard = new PopupWithForm(popupNewCardSelector, submitNewCardForm);
const bigImagePopup = new PopupWithImage(popupBigImageSelector);
const confirmPopup = new PopupWithConfirm(popupConfirmSelector, submitConfirmForm);
const avatarPopup = new PopupWithForm(popupAvatarSelector, submitAvatarForm);

const cardList = new Section({
  renderer: (item) => {
      const card = createCard(item);
      cardList.addItem(card);
    }
  },
  cardsContainer
);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-28',
  headers: {
    authorization: 'fbabf2a1-b60d-4ec5-acf1-d3bcd274680a',
    'Content-Type': 'application/json'
  }
});

const getUserInfoPromise = api.getUserInfo()
const getCardsPromise = api.getInitialCards()

//Отрисовываем страницу когда оба промиса выполнены:
Promise.all([getUserInfoPromise, getCardsPromise])
.then(values => {
  userInfo.setUserInfo(values[0]);
  userInfo.setUserAvatar(values[0]);
  cardList.createCards(values[1]);
})
.catch(err => console.log(`Ошибка.....: ${err}`));


function openProfilePopup() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  aboutInput.value = userData.about;
  formProfileValidator.enableSubmitButton();
  formProfileValidator.removeValidationErrors();
  popupProfile.open();
  popupProfile.setEventListeners();
};
  
function openNewCardPopup() {
  formNewCardValidator.removeValidationErrors();
  formNewCardValidator.disableSubmitButton();
  popupNewCard.open();
  popupNewCard.setEventListeners();
};

function openAvatarPopup() {
  formAvatarValidator.removeValidationErrors();
  formAvatarValidator.disableSubmitButton();
  avatarPopup.open();
  avatarPopup.setEventListeners();
}

function openConfirmPopup(evt, id) {
  confirmPopup.open();
  confirmPopup.getCardToDelete(evt.target.parentNode, id);
  confirmPopup.setEventListeners();
}

function submitConfirmForm(card, id) {
  confirmPopup.renderLoading(true);
  api.deleteCard(id)
  .then(() => {
    confirmPopup.close();
    card.remove(); //также перенёс удаление DOM-элемента сюда, чтобы карточка не пропадала до закрытия попапа (то есть до получения ответа с сервера)
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
  .finally(() => {
    confirmPopup.renderLoading(false);
  })
}

function submitProfileForm(inputValues) {
  popupProfile.renderLoading(true);
  userInfo.setUserInfo(inputValues);
  api.setProfileInfo(userInfo.getUserInfo())
  .catch(err => console.log(`Ошибка.....: ${err}`))
  .finally(() => {
    popupProfile.renderLoading(false);
    formProfileValidator.disableSubmitButton();
    popupProfile.close();
  });
};

function submitNewCardForm(inputValues) {
  popupNewCard.renderLoading(true);
  api.postNewCard(inputValues.name, inputValues.link)
  .then(result => {
    cardList.addNewCard(createCard(result))
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
  .finally(() => {
    popupNewCard.renderLoading(false);
    formNewCardValidator.disableSubmitButton();
    popupNewCard.close();
  });
}

function submitAvatarForm(data) {
  avatarPopup.renderLoading(true);
  api.setAvatar(data.link)
  .then(result => {
    userInfo.setUserAvatar(result)
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))
  .finally(() => {
    avatarPopup.renderLoading(false);
    avatarPopup.close();
  });
}

function setLike(e, data) {
  api.addLike(data)
  .then(result => {
    e.target.nextElementSibling.textContent = result.likes.length
  })
  .catch(err => console.log(`Ошибка.....: ${err}`));
}

function deleteLike(e, data) {
  api.deleteLike(data)
  .then(result => {
    e.target.nextElementSibling.textContent = result.likes.length
  })
  .catch(err => console.log(`Ошибка.....: ${err}`));
}

function handleCardClick(name, link) {
  bigImagePopup.open(name,link);
  bigImagePopup.setEventListeners();
}

function createCard(item) {
  const card = new Card(item, cardSelector, handleCardClick, userInfo.getUserId(), openConfirmPopup, setLike, deleteLike);
  const cardElement = card.render();

  return cardElement;
}

// слушатели
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openNewCardPopup);
editAvatarButton.addEventListener('click', openAvatarPopup);