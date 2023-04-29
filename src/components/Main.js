import React from "react"
import "../styles/index.css"

function Main(props) {
 
  return (
    <main className="content">
    <section className="profile">
     <button className="profile__avatar-button"></button>
      <img className="profile__avatar" src="<%=require('./images/profile-avatar.png')%>" alt="изображение человека" />
      <div className="profile__info">
        <div className="profile__name">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button type="button" onClick = {props.onEditProfile}  className="profile__edit-button"></button>
        </div>
        <p className="profile__subtitle">Исследователь океана</p>
      </div>
      <button type="button" className="profile__add-button"></button>
     </section>
    <section className="elements">
    </section>
   </main>
  )
}
export default Main
