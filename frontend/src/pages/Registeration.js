import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import "./log.css";
import styles from "../styles.css"
import profile from "../assets/user.svg"
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("userEmail", JSON.stringify(email));
      localStorage.setItem(
        "userPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div classname= "wholereg">
          
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h1 id= "regtitle">Register new account</h1>
              <div className="container-image">
                <img src={profile} alt="profile" className="profile"/>

              </div>

              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  className="Label-reg"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="Label-reg"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="Label-reg"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              

              <button type="submit" className="reg-button">
                Register
              </button>
              <p onClick={handleClick} className="reged">
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Registration;
