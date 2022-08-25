import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

import { userInputs, productInputs } from "./formSource";

import "./components/style/dark.scss";

import { useSelector } from "react-redux";

const App = () => {
  const { darkMode } = useSelector((state) => {
    return state.mode;
  });

  const { currentUser } = useSelector((state) => {
    return state.auth;
  });

  const RequirAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequirAuth>
                <Home />
              </RequirAuth>
            }
          />

          <Route
            path="/users"
            element={
              <RequirAuth>
                <List type="users" />
              </RequirAuth>
            }
          />
          <Route
            path="/users/new"
            element={
              <RequirAuth>
                <New inputs={userInputs} title="Add New User" type="users" />
              </RequirAuth>
            }
          />
          <Route
            path="/users/:userId"
            element={
              <RequirAuth>
                <Single />
              </RequirAuth>
            }
          />
          <Route
            path="/products"
            element={
              <RequirAuth>
                <List type="products" />
              </RequirAuth>
            }
          />
          <Route
            path="/products/new"
            element={
              <RequirAuth>
                <New
                  inputs={productInputs}
                  title="Add New Product"
                  type="products"
                />
              </RequirAuth>
            }
          />
          <Route
            path="/products/:productId"
            element={
              <RequirAuth>
                <Single />
              </RequirAuth>
            }
          />
          <Route
            path="*"
            element={
              <h1
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                404
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
