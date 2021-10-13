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
  addButton,
  editButton,
  editAvatarButton,
  cardsContainer,
  cardSelector,
  formNewCard,
  formProfile,
  formAvatar,
  nameInput,
  aboutInput,
  popupProfileSelector,
  popupNewCardSelector,
  popupBigImageSelector,
  popupConfirmSelector,
  popupAvatarSelector,
  userInfoSelectors
} from '../utils/constants.js';

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

api.getUserInfo()
.then((result) => {
  userInfo.setUserInfo(result);
  userInfo.setUserAvatar(result);
})
.catch((err) => {
  console.log(err);
});

api.getInitialCards()
.then((result) => {
  cardList.createCards(result);
})
.catch((err) => {
  console.log(err);
});


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

function openAvatarPopup() {
  formAvatarValidator.removeValidationErrors();
  formAvatarValidator.disableSubmitButton();
  avatarPopup.open();
}

function openConfirmPopup(evt, id) {
  confirmPopup.open();
  confirmPopup.getCardToDelete(evt.target.parentNode, id);
}

function submitConfirmForm(card, id) {
  card.remove();
  confirmPopup.close();
  api.deleteCard(id)
  .catch((err) => {
    console.log(err);
  })
}

function submitProfileForm(inputValues) {
  popupProfile.renderLoading(true);
  userInfo.setUserInfo(inputValues);
  api.setProfileInfo(userInfo.getUserInfo())
  .finally(() => {
    popupProfile.renderLoading(false);
    formProfileValidator.disableSubmitButton();
    popupProfile.close();
  });
};

function submitNewCardForm(inputValues) {
  popupNewCard.renderLoading(true);
  api.postNewCard(inputValues.name, inputValues.link)
  .then((result) => {
    cardList.addNewCard(createCard(result));
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupNewCard.renderLoading(false);
    formNewCardValidator.disableSubmitButton();
    popupNewCard.close();
  });
}

function submitAvatarForm(data) {
  avatarPopup.renderLoading(true);
  api.setAvatar(data.link)
  .then((result) => {
    userInfo.setUserAvatar(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    avatarPopup.renderLoading(false);
    avatarPopup.close();
  });
}

function setLike(e, data) {
  api.addLike(data)
  .then((result) => {
    e.target.nextElementSibling.textContent = result.likes.length;
  })
  .catch((err) => {
    console.log(err);
  });
}

function deleteLike(e, data) {
  api.deleteLike(data)
  .then((result) => {
    e.target.nextElementSibling.textContent = result.likes.length;
  })
  .catch((err) => {
    console.log(err);
  });
}

function handleCardClick(name, link) {
  bigImagePopup.open(name,link);  
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