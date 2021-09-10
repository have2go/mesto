export default class Card {
  constructor(name, link, alt, cardSelector, handleCardClick ) {
    this._name = name;
    this._link = link;
    this._alt = alt;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }


  _getCard = () => {
    this._template = document.querySelector(this._cardSelector).content.cloneNode(true).children[0];

    this._likeButton = this._template.querySelector('.elements__like');
    this._cardImage = this._template.querySelector('.elements__image');
    this._cardTitle = this._template.querySelector('.elements__title');
    this._trashButton = this._template.querySelector('.elements__trash');

    return this._template;
  }

  _deleteHandler = () => {
    this._card.remove();
  }

  _likeHandler = () => {
    this._likeButton.classList.toggle('elements__like_active');
  }

  _setIventListeners = () => {
    this._trashButton.addEventListener('click', this._deleteHandler);
    this._likeButton.addEventListener('click', this._likeHandler);
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  render() {
    this._card = this._getCard();
    
    this._setIventListeners();

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    
    return this._card;
  };
}


