export default class FormValidator {
  constructor(config, elementForm) {
    this._elementForm  = elementForm 
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inputErrorClass = config.inputErrorClass 
    this._errorClass = config.errorClass
  }
  //показать сообщение об ошибке
  _seeInputError(input, errorMessage) {
    const inputError = this._elementForm.querySelector(`#${input.id} + .popup__error`)
    input.classList.add(this._inputErrorClass)
    inputError.textContent = errorMessage
    inputError.classList.add(this._errorClass)
  } 
  //убрать сообщение об ошибке
  _hideInputError(input) {
    const inputError = this._elementForm.querySelector(`#${input.id} + .popup__error`)
    input.classList.remove(this._inputErrorClass)
    input.classList.remove(this._errorClass)
    inputError.textContent = ""
  }
  //проверяем на валидность
  _valid(input) {
    if (!input.validity.valid) {
      this._seeInputError(input, input.validationMessage)
    } else {
      this._hideInputError(input)
    }
  }
  //проверяем все ли элементы массива валидны
  _fieldIsValid() {
    return this._inputs.some((input) => {
      return !input.validity.valid
    })
  }
  //ссостояние кнопки сохранить
  _toggleButtonSave() {
    if (this._fieldIsValid()) {
      this._buttonSave.setAttribute('disabled', 'disabled');
    } else {
      this._buttonSave.removeAttribute('disabled');
    }
  }
  resetValidation() {
    this._toggleButtonSave()
    this._inputs.forEach((input) => {
      this._hideInputError(input) 
    });
  }
  _setInputListenet() {
    this._inputs = Array.from(this._elementForm.querySelectorAll(this._inputSelector))
    this._buttonSave = this._elementForm.querySelector(this._submitButtonSelector)
    this._toggleButtonSave()
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._valid(input)
        this._toggleButtonSave()
      })
    })
  }
  enableValidation() {
    this._setInputListenet()
  }
}
