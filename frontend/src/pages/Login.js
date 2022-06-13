import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import EntrysListPage from './EntrysListPage';
import "./log.css";
import profile from "../assets/user.svg";
import email from "../assets/email.jpg";
import pass from "../assets/pass.png";
function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("userPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("userEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }


  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3 id="logtitle">LogIn</h3>
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>
          </div>
          <div className="form-group1">
            <label>Email</label>
            <img src={email} alt="email" className="email"/>
            <input
              type="email"
              className="Label-reg"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group1">
            <label>Password</label>
            <img src={pass} alt="pass" className="email"/>
            <input
              type="password"
              className="Label-reg"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="sub-btn">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <EntrysListPage />
      )}
    </div>
  );
}

export default Login;
