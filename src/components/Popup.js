export  default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(popupSelector);    
    this._popupCloseEsc = this._popupCloseEsc.bind(this);
  }
//которые отвечают за открытие и закрытие попапа.
open() {
  this._popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', this._popupCloseEsc);
}
close() {
  this._popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', this._popupCloseEsc);
}
//который содержит логику закрытия попапа клавишей Esc.
_popupCloseEsc(evt) {
  if (evt.key === 'Escape') {    
    this.close();
  }
}

//который добавляет слушатель клика иконке закрытия попапа. 
//Модальное окно также закрывается при клике на затемнённую
// область вокруг формы.
setEventListeners() {
  this._popupElement.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
      this.close();
    }
  })
}
}