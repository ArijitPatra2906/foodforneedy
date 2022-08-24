import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import img1 from "../../images/ezgif-3-94639c9bf8.png"
// import img1 from "../../images/144844057-people-with-box-and-basket-of-charity-donation-vector-illustration-design.webp"
// import img1 from "../../images/640px-Logo_of_No_Food_Waste-removebg-preview.png"
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        phoneNumber,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
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
          <div className="left_register">
            <form className="registerForm" onSubmit={handleSubmit}>
              <h2 className="title_register">Sign up</h2>
              <div className="reg-section">
                <i className="fa-solid fa-user icon-reg"></i>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="reg-section">
                <i className="fa-solid fa-envelope icon-reg"></i>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="reg-section hulla">
                <i class="fa-solid fa-lock icon-reg"></i>
                <input
                  type="text"
                  placeholder="Enter Your Password"
                  className="name"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="reg-section">
                <i class="fa-solid fa-phone icon-reg"></i>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="name"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <button className="registerButton" type="submit">
                Register
              </button>
              <Link to="/login">
                <h4 className="have link">Already have an account</h4>
              </Link>
            </form>
            {error && (
              <span style={{ color: "red", marginTop: "10px" }}>
                Something went wrong!!!!
              </span>
            )}
          </div>
          <div className="right_register">
            <img src={img1} alt="" />

          </div>
        </div>

      </div>
    </>
  );
}
