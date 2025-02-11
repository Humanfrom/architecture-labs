import React, { useContext, lazy } from "react";
import { AuthContext } from "auth/AuthContext";

const Gallery = lazy(() =>
  import("gallery/Gallery").catch(() => {
    return { default: () => <div className="error">Component is not available!</div> };
  })
);

const Profile = lazy(() =>
  import("auth/Profile").catch(() => {
    return { default: () => <div className="error">Component is not available!</div> };
  })
);


function Main() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <main className="content">
      <Profile />
      <Gallery user={user} setUser={setUser} />
    </main>
  );
}

export default Main;
