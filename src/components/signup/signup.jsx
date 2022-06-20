import React, { useState } from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import './signup.css'
import { auth } from '../firebase-config';
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(user?.email)
  })
 
  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(
        auth, 
        registerEmail, 
        registerPassword
      );
      console.log(user)
    } catch(error) {
        console.log(error.message);
      }
  }

  const login = async () => {
     try {
       const user = await signInWithEmailAndPassword(
         auth,
         loginEmail,
         LoginPassword
       );
       console.log(user);
     } catch (error) {
       console.log(error.message);
     }
  };

  const logout = async () => {
    await signOut(auth);
  };

  let navigate = useNavigate();

  return (
    <div className="centered-signup">
      <div>
        <h3> Register User</h3>
        <input type="text" placeholder="Your first name" />
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button
          type="submit"
          id="login-button"
          onClick={(event) => [{ register }, navigate("/main")]}
          className="btn-primary"
        >
          Create User
        </button>
      </div>

      <div>
        <h3> Login</h3>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button
          type="submit"
          id="login-button"
          onClick={(event) => [{ login }, navigate("/main")]}
          className="btn-primary"
        >
          Login
        </button>
      </div>

      <div>
        <button onClick={logout} className="btn-primary">
          Sign Out
        </button>
      </div>
    </div>
  );
}