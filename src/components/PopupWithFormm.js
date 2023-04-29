import Popup  from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = document.querySelector(this._popupSelector);
    this._form = this._formElement.querySelector('.popup__form');
    this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'))
    this._saveButton = this._form.querySelector('.popup__button');
    this._saveTextButton = this._saveButton.textContent;
  }
  // который собирает данные всех полей формы.
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;      
    });
    return this._formValues;    
  }
  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());    
    })
  }
  close() {
    this._form.reset();
    super.close();    
  }
  renderLoading(loading) {
    if(loading) {
      this._saveButton.textContent = "Сохранение...";
    } else {
      this._saveButton.textContent = this._saveTextButton;
    };
  }
}