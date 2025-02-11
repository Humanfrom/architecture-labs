import React, { useMemo, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import api from "../utils/api";

function Profile() {
  const { user, setUser } = React.useContext(AuthContext);

  const imageStyle = user ? { backgroundImage: `url(${user?.avatar})` } : {};
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const closeAuthPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsInfoToolTipOpen(false);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleUpdateUser(userUpdate) {
    api
      .setUserInfo(userUpdate)
      .then((newUserData) => {
        setUser(newUserData);
        closeAuthPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatarUpdate) {
    api
      .setUserAvatar(avatarUpdate)
      .then((newUserData) => {
        setUser(newUserData);
        closeAuthPopups();
      })
      .catch((err) => console.log(err));
  }

  const currentUser = useMemo(() => user ?? { name: "Неизвестно", about: "" }, [user]);

  return (
    <>
      <section className="profile page__section">
        <div className="profile__image" onClick={handleEditAvatarClick} style={imageStyle}></div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
      </section>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser} onClose={closeAuthPopups} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onUpdateAvatar={handleUpdateAvatar} onClose={closeAuthPopups} />
    </>
  );
}

export default Profile;
