import "../styles/index.css"
import logo from "../images/header-logo.svg"

function App() {
  return (
    <div className="page">
     <header className="header">
   <img className="header__logo" src={logo} alt="логотип" />   
 </header>
 <main className="content">
   <section className="profile">
    <button className="profile__avatar-button"></button>
     <img className="profile__avatar" src="<%=require('./images/profile-avatar.png')%>" alt="изображение человека" />
     <div className="profile__info">
       <div className="profile__name">
         <h1 className="profile__title">Жак-Ив Кусто</h1>
         <button type="button" className="profile__edit-button"></button>
       </div>
       <p className="profile__subtitle">Исследователь океана</p>
     </div>
     <button type="button" className="profile__add-button"></button>
    </section>
   <section className="elements">
   </section>
  </main>
  <footer className="footer">
    <p className="footer__copyright">© 2020 Mesto Russia</p>
  </footer>
  <template id="elements__card">
    <div className="element">
      <button type="button" className="element__delete-button"></button>
      <img className="element__foto" src="#" alt="#" />
      <div className="element__group">
        <h2 className="element__title"></h2>
        <button type="button" className="element__like"></button>
        <p className="element__like-counter">0</p>
      </div>
     </div>
  </template>
  <div className="popup popup_type_edit-profile">
    <div className="popup__container">
      <h3 className="popup__title">Редактировать профиль</h3>
      <form name="formProfile" className="popup__form popup__form_type_profile" >
        <fieldset className="popup__fielset">
          <input 
          type="text" 
          name="name"
          id="input-name"
          placeholder="Введите имя" 
          className="popup__input popup__input_place_name"
          minLength="2"
          maxLength="40"
          title="Длина поля должна быть 2 и более символов и менее или равно 40"
          required />
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
            required />
            <span className="popup__error popup__error_type_job"></span>
          <button type="submit" className="popup__button popup__save-profile" >Сохранить</button>
        </fieldset>        
      </form>      
      <button type="button" className="popup__button-close popup__button-close_type_profile"></button>
    </div>
  </div>
  <div className="popup popup_type_add-card ">
    <div className="popup__container">      
      <h3 className="popup__title">Новое место</h3>
      <form name="place" className="popup__form popup__form_type_add">
        <fieldset className="popup__fielset">
          <input type="text"
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
            <span className="popup__error popup__error_type_link"></span>
          <button type="submit" className="popup__button popup__create">Создать</button>
        </fieldset>        
      </form>      
      <button type="button" className="popup__button-close popup__button-close_type_add"></button>
    </div>    
  </div>
  <div className="popup popup_type_image-closer">
    <div className="popup__image-container">
      <img className="popup__photo" src="#" alt="#" />
      <p className="popup__photo-text"></p>
      <button type="button" className="popup__button-close popup__button-close_type_image"></button>
    </div>    
  </div>
 <div className="popup popup_type_avatar">
  <div className="popup__container">      
    <h3 className="popup__title">Обновить аватар</h3>
    <form name="avatar" className="popup__form popup__form_type_avatar">
      <fieldset className="popup__fielset">
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
        <button type="submit" className="popup__button popup__save-avatar">Сохранить</button>
      </fieldset>        
    </form>      
    <button type="button" className="popup__button-close popup__button-close_type_add"></button>
  </div>    
 </div>
 <div className="popup popup_type_delete">
  <div className="popup__container">      
    <h3 className="popup__title">Вы уверены?</h3>
    <form name="delete" className="popup__form popup__form_type_delete">
      <button type="submit" className="popup__button popup__delete-card">Да</button>
    </form>      
    <button type="button" className="popup__button-close popup__button-close_type_add"></button>
  </div>    
 </div>
    </div>
    
  );
}

export default App;
