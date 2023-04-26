//дефолтный массив
export const profile = document.querySelector('.profile')
//нашли попапы
export const popupEditProfile = document.querySelector('.popup_type_edit-profile')
export const popUpAdd = document.querySelector('.popup_type_add-card')
export const popupImage = document.querySelector('.popup_type_image-closer')
//ищем в них формы
export const formElementEdit = popupEditProfile.querySelector('.popup__form')
export const formUpAdd = popUpAdd.querySelector('.popup__form_type_add')
//данные попапа карточки
export const popupFoto =  popupImage.querySelector('.popup__photo')
export const popupImageText = popupImage.querySelector('.popup__photo-text')
// Находим в формах поля ввода
export const nameInput = formElementEdit.querySelector('.popup__input_place_name')
export const jobInput = formElementEdit.querySelector('.popup__input_place_job')
//кнопки
export const editBut = profile.querySelector('.profile__edit-button')
export const buttonAdd = document.querySelector('.profile__add-button')
export const buttonAvatar = document.querySelector('.profile__avatar-button')
export const formAvatar = document.querySelector('.popup_type_avatar')
//все настройки для валидации
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',  
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};