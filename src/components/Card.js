import React from "react";
function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <>
      <div className="element">
        <button type="button" className="element__delete-button"></button>
        <img
          className="element__foto"
          src={card.link}
          alt="#"
          onClick={handleClick}
        />
        <div className="element__group">
          <h2 className="element__title">{card.name}</h2>
          <button type="button" className="element__like"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
