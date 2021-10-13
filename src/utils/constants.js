export const addButton = document.querySelector('.profile__add-button');
export const editButton = document.querySelector('.profile__edit-button');
export const editAvatarButton = document.querySelector('.profile__shadow');
export const cardsContainer = '.elements';                    
export const cardSelector = '#cards-template';
export const formNewCard = document.querySelector('#newcard-form');
export const formProfile = document.querySelector('#profile-form');
export const formAvatar = document.querySelector('#avatar-form');
export const nameInput = document.querySelector('.popup__input_type_name');      
export const aboutInput = document.querySelector('.popup__input_type_about');
export const popupProfileSelector = '.popup_profile';
export const popupNewCardSelector = '.popup_newcard';
export const popupBigImageSelector = '.img-popup';
export const popupConfirmSelector = '.confirm-popup';
export const popupAvatarSelector = '.popup-avatar';
export const userInfoSelectors = {
  nameSelector: '.profile__name',
  aboutSelector: '.profile__description',
  avatarSelector: '.profile__photo'
};
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt: 'Архыз'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      alt: 'Челябинская область'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Иваново'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      alt: 'Камчатка'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt: 'Холмогорский район'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      alt: 'Байкал'
    }
  ];
  
  export const validationSelectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    popups: '.popup'
  }
  