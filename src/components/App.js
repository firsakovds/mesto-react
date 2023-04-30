import "../styles/index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});  
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        children={
          <>
            <input
              type="text"
              name="name"
              id="input-name"
              placeholder="Введите имя"
              className="popup__input popup__input_place_name"
              minLength="2"
              maxLength="40"
              title="Длина поля должна быть 2 и более символов и менее или равно 40"
              required
            />
            <span className="popup__error popup__error_type_name"></span>
            <input
              type="text"
              name="about"
              id="input-job"
              placeholder="Введите род деятельности"
              className="popup__input popup__input_place_job"
              minLength="2"
              maxLength="200"
              title="Длина поля должна быть 2 и более символов и менее или равно 200"
              required
            />
            <span className="popup__error popup__error_type_job"></span>
          </>
        }
        buttonText="Сохранить"
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="save-avatar"
        title="Обновить аватар"
        children={
          <>
            <input
              type="url"
              name="avatar"
              id="input-avatar"
              placeholder="Ссылка на аватар"
              className="popup__input popup__input_type_avatar-link"
              title="Введите адрес сайта"
              required
            />
            <span className="popup__error popup__error_type_link"></span>
          </>
        }
        buttonText="Сохранить"
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="create "
        title="Новое место"
        children={
          <>
            <input
              type="text"
              name="name"
              id="input-space"
              placeholder="Название"
              className="popup__input popup__input_place_space"
              minLength="2"
              maxLength="30"
              title="Длина поля должна быть 2 и более символов и менее или равно 30"
              required
            />
            <span className="popup__error popup__error_type_space"></span>
            <input
              type="url"
              name="link"
              id="input-link"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_place_link"
              title="Введите адрес сайта"
              required
            />
          </>
        }
        buttonText="Создать"
      />
    </div>
  );
}
export default App;
