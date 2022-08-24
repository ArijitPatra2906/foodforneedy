import React, { useContext, useState } from "react";
import "./Settings.css";
import { AiOutlineDoubleLeft } from "react-feather"
// import Sidebar from "../../component/Sidebar/Sidebar";
import { Context } from "../../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Settings() {
  const { dispatch, user } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="setting_container">
      <Link to="/">
        <i className="fa-solid fa-arrow-left icon-setting"></i>
      </Link>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">

            <span className="settingsUpdateTitle">Update your Account</span>
            {/* <span className="settingsDeleteTitle">Delete Account</span> */}
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                className="image"
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                alt=""
              />
              <label htmlFor="fileInput">
                <i className=" far fa-user-circle settingsPPIcon"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <label>Username</label>
            <input
              type="text"
              // value={user.username}
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              // value={user.email}
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              // value={user.password}
              placeholder="Enter Password to update"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="settingsSubmit" type="submit">
              Update
            </button>
            {success && (
              <span
                style={{ color: "green", marginTop: "8px", textAlign: "center" }}
              >
                Profile has been updated....
              </span>
            )}
          </form>
        </div>
        {/* <Sidebar /> */}
      </div>

    </div>
  );
}
