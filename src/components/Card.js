export  default class Card {
  constructor(dataCard, selectorTemlate, handleCardClick, handleBacketButClick, handleLikeClick, userId) {
    this._title = dataCard.name;
    this._link = dataCard.link;
    this._selectorTemlate = selectorTemlate;
    this._handleCardClick= handleCardClick;
    this._handleBacketButClick = handleBacketButClick;
    this._ownerId = dataCard.owner._id;
    this._likes = dataCard.likes;
    this._myId = userId;
    this._handleLikeClick = handleLikeClick;
    this.cardId = dataCard._id;
  }
  //клонировали и получили разметку 
  _cardTemplate() {
    const newCard = document.querySelector(this._selectorTemlate).content.querySelector(".element").cloneNode(true);
    return newCard;
  }
  //новое
  updateLike(newData) {
    this._likes = newData.likes
  } 
  checkLike() {
    return this._likes.some((like) => like._id === this._myId);
  }
  //приватный метод удаления карточки
  deleteCard = () => {
    this._cardElement.remove()
    this._cardElement = null
  }  
 deleteLike(newLikes) {
  this._cardLike.classList.remove('element__like_active')
  this.likeCounter.textContent = newLikes;
 }
 addLike(newLikes) {
  this._cardLike.classList.add('element__like_active')
  this.likeCounter.textContent = newLikes;
 }
 //приватный метод слушителя
  _eventListeners () {
    //this._cardElement.querySelector('.element__delete-button').addEventListener('click',this.deleteCard)
    this._busketBut.addEventListener('click', () => {
      this._handleBacketButClick(this)
    });
    this._cardLike.addEventListener('click', () => {
      this._handleLikeClick(this, this.checkLike())
    });
    //this._cardElement.querySelector('.element__like').addEventListener('click',this._changeLike)    
    this._cardImage.addEventListener('click', () => { 
      this._handleCardClick(this._title, this._link)       
    });  
  }  
  //публичный метод создания карточки
  createCard() {
    this._cardElement = this._cardTemplate()
    //переменные поле и ссылка    
    this._cardImage = this._cardElement.querySelector('.element__foto')
    this._cardImage.src = this._link
    this._cardImage.alt = this._title
    this._busketBut = this._cardElement.querySelector('.element__delete-button');
    this._cardElement.querySelector('.element__title').textContent = this._title
    this._cardLike = this._cardElement.querySelector('.element__like')   
    this.likeCounter = this._cardElement.querySelector('.element__like-counter')
    this.likeCounter.textContent = this._likes.length
    //this.checkLike = this._likes.some((like) => like._id === this._myId);
    if (this._ownerId !== this._myId) {
      this._busketBut.remove();
      }
    if (this.checkLike()) {
      this._cardLike.classList.add('element__like_active');
    }  
    this._eventListeners();
    return this._cardElement
  }  
}
