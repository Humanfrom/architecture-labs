import React, { useState, useEffect } from "react";
import Card from "./Card";
import AddPlacePopup from "./AddPlacePopup";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";

function Gallery({ user, setUser }) {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === user._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(newCard) {
    api
      .addCard(newCard)
      .then((newCardFull) => {
        setCards([newCardFull, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    api
      .getAppInfo()
      .then(([cardData, userData]) => {
        setUser(userData);
        setCards(cardData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="places page__section">
        <div style={{marginBottom: 20, position: "absolute", right: 0, top: "-130px"}}>
          <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
        </div>
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              user={user}
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onAddPlace={handleAddPlaceSubmit} onClose={closeAllPopups} />
      <PopupWithForm title="Вы уверены?" name="remove-card" buttonText="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default Gallery;
