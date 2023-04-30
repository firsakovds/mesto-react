import React from "react"
import "../styles/index.css"
import api from "../utils/Api"
import Card from "./Card"
import Spinner from "./Spinner"
function Main(props) {
  const [userName, setUserName] = React.useState("")
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  React.useEffect(() => {    
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch((err) => {
        console.log(err)
      })      
  }, []);
  React.useEffect(() => {
    setIsLoading(true)
    api.getInitialCards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        <img className="profile__avatar" src={userAvatar} alt="изображение человека" />
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__title">{userName}</h1>
            <button type="button" onClick={props.onEditProfile} className="profile__edit-button"></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {isLoading ? <Spinner /> :
        cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  )
}
export default Main
