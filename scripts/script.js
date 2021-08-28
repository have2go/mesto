const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupNewCard = document.querySelector('.popup_newcard');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');       // кнопка редактирования (карандаш)
const closeButtonProfile = document.querySelector('#profile-btn');
const closeButtonNewCard = document.querySelector('#newcard-btn');
const formProfile = document.querySelector('#profile-form');              // переменная с формой
const nameInput = document.querySelector('.popup__input_type_name');      // имя с инпута
const aboutInput = document.querySelector('.popup__input_type_about');    // описаие с инпута
const formNewCard = document.querySelector('#newcard-form');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__name');             // имя на странице
const profileAbout = document.querySelector('.profile__description');     // описание на странице
const cardsList = document.querySelector('.elements');                    // вся секция с карточками
const cardsTemplate = document.querySelector('#cards-template').content;  // шаблон одной карточки
const popupImage = document.querySelector('.img-popup__element');
const popupText = document.querySelector('.img-popup__text');
const popupBigImage = document.querySelector('.img-popup');
const closeImage = document.querySelector('.img-popup__close-btn');

//// открывашки
function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('mousedown', closePopupMouse);
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

//// закрывашки
function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('mousedown', closePopupMouse);
  removeValidationErrors(element);
}

function closePopupProfile() {
  closePopup(popupProfile);
  removeValidationErrors(popupProfile);
}

function closePopupNewCard() {
  closePopup(popupNewCard);
  formNewCard.reset();
  removeValidationErrors(popupNewCard);
}

function closePopupBigImage() {
  closePopup(popupBigImage);
}

function closePopupEsc(el) {
  if (el.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function closePopupMouse(el) {
  if (el.target.classList.contains('popup_opened')) {
    closePopup(el.target);
  }
}

// функция заменяет имя и описание на страницы данными из инпутов и зыкрывает попап
function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupProfile);
}


function createCard(el) {
  // клонирование шаблона карточки
  const card = cardsTemplate.cloneNode(true);
  const cardTextSource = card.querySelector('.elements__title').textContent = el.name;
  const cardImageSource = card.querySelector('.elements__image').src = el.link;
  const cardImageAlt = card.querySelector('.elements__image').alt = el.alt;

  // нажатие на кнопку лайка
  const likeImg = card.querySelector('.elements__like');
  likeImg.addEventListener('click', function() {
    likeImg.classList.toggle('elements__like_active');
  });
  // удаление карточки по клику на мусорку
  const trashBtn = card.querySelector('.elements__trash');
  trashBtn.addEventListener('click', function(e) {
    e.target.parentNode.remove();
  });
  //открытие изображения на полный экран
  const cardImage = card.querySelector('.elements__image');
  cardImage.addEventListener('click', function() {
    openPopup(popupBigImage);
    popupImage.src = cardImageSource;
    popupText.textContent = cardTextSource;
    popupImage.alt = cardImageAlt;
  });
  return card;
}

function renderList() {
  const result = initialCards.map(el => {
    const card = createCard(el);
    return card;
  });
  cardsList.append(...result);
}

renderList();

function disableSubmitButton(evt) {
  evt.target.lastChild.previousSibling.classList.add('popup__save-btn_inactive');
  evt.target.lastChild.previousSibling.setAttribute('disabled', true);
}

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
  const newCard = createCard(cardInfo);
  cardsList.insertBefore(newCard, cardsList.firstChild);
  disableSubmitButton(evt);
  closePopupNewCard();
});
closeImage.addEventListener('click', closePopupBigImage);
