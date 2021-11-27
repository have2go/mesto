export default class Card {
  constructor(obj, cardSelector, handleCardClick, userId, openConfirmPopup, setLike, deleteLike) {
    this._obj = obj;
    this._name = obj.name;
    this._link = obj.link;
    this._userId = userId;
    this._id = obj.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._openConfirmPopup = openConfirmPopup;
    this._setLike = setLike;
    this._deleteLike = deleteLike;
  }


  _getCard = () => {
    this._template = document.querySelector(this._cardSelector).content.cloneNode(true).children[0];

    this._likeButton = this._template.querySelector('.elements__like');
    this._cardImage = this._template.querySelector('.elements__image');
    this._cardTitle = this._template.querySelector('.elements__title');
    this._trashButton = this._template.querySelector('.elements__trash');
    this._likeCounter = this._template.querySelector('.elements__like-counter');

    return this._template;
  }

  _confirmHandler = (e) => {
    this._openConfirmPopup(e, this._obj._id);
  }

  _removeTrashButtons() {
    if (this._id !== this._userId) {
      this._trashButton.remove();
    }
  }
 

  _likeHandler = (e) => {
    if (!this._likeButton.classList.contains('elements__like_active')) {
      this._setLike(e, this._obj)
    } else {
      this._deleteLike(e, this._obj);
    }
  }

  _setIventListeners = () => {
    this._trashButton.addEventListener('click', this._confirmHandler);
    this._likeButton.addEventListener('click', this._likeHandler);
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _checkIfLiked = () => {
    if (this._obj.likes.filter(e => e._id === this._userId).length > 0) {
      this._likeButton.classList.add('elements__like_active');
    }
  }

  render() {
    this._card = this._getCard();
    
    this._setIventListeners();
    this._removeTrashButtons();
    this._checkIfLiked();


    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeCounter.textContent = this._obj.likes.length;

    
    return this._card;
  };
}


