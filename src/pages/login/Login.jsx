import React, { useContext, useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";

import "./Login.scss";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { login } from "../../store/authSlice";

const Login = () => {
  const [authError, setAuthError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login(user));
        navitage("/");
      })

      .catch((error) => {
        setAuthError(true);
      });
  };

  return (
    <div className="login">
      <form onSubmit={loginHandler}>
        <input
          type="email"
          placeholder="admin@gmail.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="12345678"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {authError && <span>Wrong email or password</span>}
      </form>
    </div>
  );
};

export default Login;
