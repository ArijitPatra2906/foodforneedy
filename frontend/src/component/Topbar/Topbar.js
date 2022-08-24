import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { Menu } from "react-feather";
import { Context } from "../../context/Context";
import logo from "../../images/logo.png"
function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="nav-section">
      <nav className="navbar">
        <Link to="/" >
          <img className="logo" src={logo} alt="" />

        </Link>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          {/* <Link to="/" className="nav-home">
          <li>Home</li>
        </Link> */}
          <Link to="/ngo" className="nav-write">
            <li>Contact</li>
          </Link>
          <Link to="/post" className="nav-write">
            <li>Upload</li>
          </Link>
          <Link to="/settings" className="nav-settings">
            <li>Profile</li>
          </Link>
          <Link to="/login" className="nav-login" onClick={handleLogout}>
            <li>{user && "Logout"}</li>
          </Link>
        </ul>
        <div className="topRight">
          {user ? (
            <Link to="/settings">
              <img className="userimage" src={PF + user.profilePic} alt="" />
            </Link>
          ) : (
            <ul className="list">

              <Link className="nav-login" to="/login">
                <li>Login</li>
              </Link>

            </ul>
          )}
        </div>
        <button onClick={() => setIsMobile(!isMobile)} className="menu">
          {isMobile ? (
            <i className="fas fa-times" ></i>
          ) : (
            <Menu />
          )}
        </button>
      </nav>
    </div>
  );
}

export default Topbar;
