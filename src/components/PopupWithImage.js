import Popup  from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupFoto = this._popupElement.querySelector('.popup__photo');
    this._popupImageText = this._popupElement.querySelector('.popup__photo-text')
  }
  //Этот класс должен перезаписывать родительский метод open
  open(title, link) {
    this._popupFoto .src = link; 
    this._popupFoto.alt = title; 
    this._popupImageText.textContent = title; 
    super.open(); 
  }
}