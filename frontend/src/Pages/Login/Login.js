import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";
import old from "../../images/ezgif-3-94639c9bf8.png"

// import img1 from "../../images/download-removebg-preview.png"

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (

    <>
      <div style={{
        display: "flex",
        gap: 20,

      }}>
        <div className="link" style={{
          display: "flex",
          textDecoration: "none",
          color: "#111"
        }}>
          <Link to="/">
            <i className="fa-solid fa-arrow-left icon-arrow-login"></i>

          </Link>
        </div>
        <p >Don't want to Sign up</p>
      </div>
      <div className="main_register">
        <h5 className="heading">Food for the needy</h5>

        <div className="register_container">
          <div className="left_login">
            <img className="old" src={old} alt="" />


          </div>
          <div className="right_register">
            <form className="registerForm" onSubmit={handleSubmit}>
              <h2 className="title_register">Sign In</h2>
              <div className="email">
                <i className="fa-solid fa-user icon-login"></i>
                <input
                  ref={userRef}
                  type="text" placeholder="Enter Your Name" className="name" />
              </div>

              <div className="password">
                <i class="fa-solid fa-lock icon-login"></i>
                <input
                  ref={passwordRef}
                  type="text" placeholder="Enter Your Password" className="pass" />
              </div>
              <button className="registerButton" type="submit">
                Login
              </button>
              <Link to="/register">
                <h4 className="have link">Create an account</h4>
              </Link>
            </form>
          </div>
        </div>

      </div>
    </>

  );
}
