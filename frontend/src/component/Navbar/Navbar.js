import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Menu } from "react-feather";
import { Context } from '../../context/Context';
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="Navbar">
            <span className="nav-logo">
                <a href="/">
                    <img className='logo-img' src={logo} alt="" />

                </a>
            </span>
            <span className='title-nav'>
                <h2>Food for needy</h2>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/ngo">Contact</a>
                <a href="/post">Upload</a>
                <a href="/settings">Profile</a>
                <a href="/login" onClick={handleLogout}>{user && "Logout"}</a>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img className="userimage" src={PF + user.profilePic} alt="" />
                    </Link>
                ) : (
                    <a className="nav-itemss" href='/login'>
                        Login
                    </a>
                )}
            </div>
        </div>
    )
}

export default Navbar