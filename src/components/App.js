import "../styles/index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api"
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
      api.getInitialCards()
      .then((res) => {
        setCards(res)
      });

  }, [])

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
    setSelectedCard({});
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}
function handleCardDelete(card) {
  api.deleteCard(card._id)
  .then(() => {
    setCards((state) => state.filter((c) => c._id !== card._id && c));
  });
}

function handleUpdateUser(name, about ) {
  api.patchUserInfo(name, about )
    .then((res) => {
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err);
    });
}



  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="save-avatar"
        title="Обновить аватар"        
      >
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
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="create "
        title="Новое место"
        buttonText="Создать"
      >
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
      </PopupWithForm>
    </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
