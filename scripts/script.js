let popups = document.querySelectorAll('.popup');
let popupProfile = document.querySelector('.popup_profile');
let popupNewCard = document.querySelector('.popup_newcard');
let addButton = document.querySelector('.profile__add-button');
let editButton = document.querySelector('.profile__edit-button'); // кнопка редактирования (карандаш)
let closeButtonProfile = document.querySelector('#profile-btn');
let closeButtonNewCard = document.querySelector('#newcard-btn');
let formProfile = document.querySelector('#profile-form'); // переменная с формой
let nameInput = document.querySelector('.popup__input_type_name'); // имя с инпута
let aboutInput = document.querySelector('.popup__input_type_about'); // описаие с инпута
let formNewCard = document.querySelector('#newcard-form');
let titleInput = document.querySelector('.popup__input_type_title');
let linkInput = document.querySelector('.popup__input_type_link');
let profileName = document.querySelector('.profile__name'); // имя на странице
let profileAbout = document.querySelector('.profile__description'); // описание на странице
const cardsList = document.querySelector('.elements');// вся секция с карточками
const cardsTemplate = document.querySelector('#cards-template').content; // шаблон одной карточки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const popupImage = document.querySelector('.img-popup__element');
const popupText = document.querySelector('.img-popup__text');
const bigImage = document.querySelector('.img-popup');
const closeImage = document.querySelector('.img-popup__close-btn');

function openPopup(element) {
  element.classList.add('popup_opened');
}
// функция открывает попап, добавляя модификатор блоку popup и вносит в инпуты значения со страницы
function openProfilePopup() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupProfile);
}

function openNewCardPopup() {
  openPopup(popupNewCard);
}



// закрывает попап
function closePopup() {
  //NodeList в массив, затем цикл
  Array.prototype.slice.call(popups).forEach(function (item) {
    item.classList.remove('popup_opened');
  });
}

// функция заменяет имя и описание на страницы данными из инпутов и зыкрывает попап
function formProfileSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup();
}


function InitCards(el) {
  // клонирование шаблона карточки
  const card = cardsTemplate.cloneNode(true);
  const cardTextSource = card.querySelector('.elements__title').textContent = el.name;
  const cardImageSource = card.querySelector('.elements__image').src = el.link;
  // нажатие на кнопку лайка
  const likeImg = card.querySelector('.elements__like');
  likeImg.addEventListener('click', function() {
    likeImg.classList.add('elements__like_active');
  });
  // удаление карточки по клику на мусорку
  const trashBtn = card.querySelector('.elements__trash');
  trashBtn.addEventListener('click', function(e) {
    e.target.parentNode.remove();
  });
  //открытие изображения на полный экран
  const cardImage = card.querySelector('.elements__image');
  cardImage.addEventListener('click', function() {
    bigImage.classList.add('img-popup_active');
    popupImage.src = cardImageSource;
    popupText.textContent = cardTextSource;
    closeImage.addEventListener('click', function(){
      bigImage.classList.remove('img-popup_active')
    })
  });
  cardsList.insertBefore(card, cardsList.firstChild);
}

initialCards.forEach(InitCards);


// слушатели
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openNewCardPopup);
closeButtonProfile.addEventListener('click', closePopup);
closeButtonNewCard.addEventListener('click', closePopup);
formProfile.addEventListener('submit', formProfileSubmit);
formNewCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardInfo = {
    name: titleInput.value,
    link: linkInput.value
  };
  InitCards(cardInfo);
  closePopup();
});
