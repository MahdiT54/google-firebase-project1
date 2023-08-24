import React, { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false); // Once the callback is called, set loading to false
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "test69420")
      .then((user) => {
        // console.log(user);
      })
      .catch((error) => {
        console.log("error");
      });
  }

  function login() {
    setLoggingIn(true); // Set loggingIn state to true when login is clicked
    signInWithEmailAndPassword(auth, "email@email.com", "test69420")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
        setLoggingIn(false); // Set loggingIn state to false when login is successful
      })
      .catch((error) => {
        console.log(error);
        setLoggingIn(false); // Set loggingIn state to false when login fails
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <nav>
        <h1>Frontend Simplified</h1>
        <div className="registrar">
          {loading ? (
            <div className="img__skeleton"></div>
          ) : (
            <>
              {user.email ? (
                <button onClick={logout} className="logout__btn">
                  <span>{user.email[0].toUpperCase()}</span>
                </button>
              ) : (
                <>
                  {loggingIn ? (
                    <h1>Loading...</h1>
                  ) : (
                    <>
                      <button onClick={register}>Register</button>
                      <button onClick={login}>Login</button>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default App;
