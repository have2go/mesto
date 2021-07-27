let popup = document.querySelector('.popup'); // весь попап
let editButton = document.querySelector('.profile__edit-button'); // кнопка редактирования (карандаш)
let closeButton = document.querySelector('.popup__close-btn'); // кнопка закрытия (крестик)
let formElement = document.querySelector('.popup__form'); // переменная с формой
let nameInput = document.querySelector('.popup__input_type_name'); // имя с инпута
let aboutInput = document.querySelector('.popup__input_type_about'); // описаие с инпута
let profileName = document.querySelector('.profile__name'); // имя на странице
let profileAbout = document.querySelector('.profile__description'); // описание на странице


// функция открывает попап, добавляя модификатор блоку popup и вносит в инпуты значения со страницы
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

// закрывает попап
function closePopup() {
  popup.classList.remove('popup_opened');
}

// функция заменяет имя и описание на страницы данными из инпутов и зыкрывает попап
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup();
}


// слушатели
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
