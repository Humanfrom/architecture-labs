import Main from "../screen/Main";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AuthProvider = lazy(() =>
  import("auth/AuthProvider").catch(() => {
    return { default: () => <div className="error">Component is not available!</div> };
  })
);

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="page">
      <Routes>
        <Route
          path="/*"
          element={
            <AuthProvider location={location} navigate={navigate} Header={Header}>
              <div className="page__content">
                <Main />
              </div>
            </AuthProvider>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
