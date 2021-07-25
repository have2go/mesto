let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-btn');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__description');



function popupOpen() {
  popup.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  popupClose();
}


formElement.addEventListener('submit', formSubmitHandler);


