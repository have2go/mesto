import { openPopup } from './popup.js';

export default class Card {
  constructor(name, link, alt) {
    this._title = name;
    this._link = link;
    this._alt = alt;
  }

  static _template = document.querySelector('#cards-template').content;

  _getCard = () => {
    return Card._template.cloneNode(true).children[0];
  }

  _deleteHandler = () => {
    this._card.remove();
  }

  _likeHandler = () => {
    this._card.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  _fullSizeHandler = () => {
    openPopup(document.querySelector('.img-popup'));
    document.querySelector('.img-popup__element').src = this._link;
    document.querySelector('.img-popup__element').alt = this._alt;
    document.querySelector('.img-popup__text').textContent = this._title;
  }

  render() {
    this._card = this._getCard();

    this._card.querySelector('.elements__title').textContent = this._title;
    this._card.querySelector('.elements__image').src = this._link;
    this._card.querySelector('.elements__image').alt = this._alt;
    this._card.querySelector('.elements__trash').addEventListener('click', this._deleteHandler);
    this._card.querySelector('.elements__like').addEventListener('click', this._likeHandler);
    this._card.querySelector('.elements__image').addEventListener('click', this._fullSizeHandler);
  
    return this._card;
  };
}


