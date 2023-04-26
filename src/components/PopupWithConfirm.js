import Popup from "./Popup";
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector('.popup__form_type_delete')
    this._confirmButton = this._form.querySelector('.popup__button')
    this._confirmText = this._confirmButton.textContent;
  }
  open(card) {
    super.open()
    this._card = card
  }
  renderLoading(loading) {
    if(loading) {
      this._confirmButton.textContent = "Удаление...";
    } else {
      this._confirmButton.textContent = this._confirmText;
    };
  }
  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._card);
    });
    super.setEventListeners()
  }
}