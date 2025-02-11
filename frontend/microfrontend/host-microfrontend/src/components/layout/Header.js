import React from "react";
import { Link } from "react-router-dom";
import logoPath from "../../images/logo.svg";

function Header({ onSignOut, email, pathname }) {

  function handleSignOut() {
    onSignOut();
  }

  return (
    <header className="header page__section">
      <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo" />
      
      {pathname === "/" && (
        <div className="header__wrapper">
          <p className="header__user">{email}</p>
          <button className="header__logout" onClick={handleSignOut}>Выйти</button>
        </div>
      )}

      {pathname === "/signup" && (
        <Link className="header__auth-link" to="/signin">Войти</Link>
      )}

      {pathname === "/signin" && (
        <Link className="header__auth-link" to="/signup">Регистрация</Link>
      )}
    </header>
  );
}

export default Header;