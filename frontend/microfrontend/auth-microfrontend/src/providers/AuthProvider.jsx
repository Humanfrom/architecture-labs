import InfoTooltip from "../components/InfoTooltip";
import Login from "../components/Login";
import Register from "../components/Register";
import * as auth from "../utils/auth";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState, useMemo } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AuthProvider({ children, navigate, location, Header }) {
  const { user, isAuth, setIsAuth, setUser } = useAuth();
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState("");
  const [email, setEmail] = useState("");

  const pathname = useMemo(() => (location?.pathname ?? ""), [location?.pathname]);

  const closeAuthPopups = () => {
    setIsInfoToolTipOpen(false);
  };

  function onRegister({ email, password }) {
    auth
      .register(email, password)
      .then((res) => {
        setTooltipStatus("success");
        setIsInfoToolTipOpen(true);
        navigate("/signin");
      })
      .catch((err) => {
        setTooltipStatus("fail");
        setIsInfoToolTipOpen(true);
      });
  }

  function onLogin({ email, password }) {
    auth
      .login(email, password)
      .then((res) => {
        setIsAuth(true);
        setEmail(email);
        navigate("/");
      })
      .catch((err) => {
        setTooltipStatus("fail");
        setIsInfoToolTipOpen(true);
      });
  }
  
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setEmail(res.data.email);
          setUser(res.data);
          setIsAuth(true);
          navigate("/");
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          console.log(err);
        });
    }
  }, [pathname]);

  function onSignOut() {
    // при вызове обработчика onSignOut происходит удаление jwt
    localStorage.removeItem("jwt");
    setIsAuth(false);
    // После успешного вызова обработчика onSignOut происходит редирект на /signin
    navigate("/signin");
  }

  const gePpublicRoutes = () => {
    switch (pathname) {
      case "/signup":
        return (
          <>
            <Register onRegister={onRegister} />
            <InfoTooltip isOpen={isInfoToolTipOpen} onClose={closeAuthPopups} status={tooltipStatus} />
          </>
        );
      case "/signin":
        return (
          <>
            <Login onLogin={onLogin} />
            <InfoTooltip isOpen={isInfoToolTipOpen} onClose={closeAuthPopups} status={tooltipStatus} />
          </>
        );
      default:
        return <div style={{ color: "#fff" }}>Loading...</div>;
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuth,
      }}
    >
      <Header pathname={pathname} onSignOut={onSignOut} email={email} />
      {!isAuth ? (
        gePpublicRoutes()
      ) : (
        <>
          {children}
        </>
      )}
    </AuthContext.Provider>
  );
}
