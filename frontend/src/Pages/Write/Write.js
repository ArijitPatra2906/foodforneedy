import React, { useContext, useState } from "react";
import "./Writw.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import Topbar from "../../component/Topbar/Topbar";
import side from "../../images/donation.png"
// import side from "../../images/download.jpg"

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      contact,
      address
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    console.log(newPost)
    try {
      const res = await axios.post("/posts", newPost, {

        headers: {
          "Content-Type": "application/json"
        }
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <>
      <Link to="/">
        <i className="fa-solid fa-arrow-left icon-post"></i>
      </Link>
      {/* <Topbar /> */}
      <div className="post_container">
        <img src={side} alt="" />

        <div className="write">

          <form className="writeForm" onSubmit={handleSubmit}>

            <div className="formGroup">
              {file && <img className="image" src={URL.createObjectURL(file)} alt="" />}

              <div style={{
                display: "flex",
                alignItems: "center"
              }}>
                <label htmlFor="fileInput">
                  <i class="icon fa-solid fa-plus"> Select file</i>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <button className="submit" type="submit">
                  Publish
                </button>
              </div>
              <div className="form_field">
                <label>Enter Your name</label>
                <input
                  type="text"
                  placeholder="Enter Your name"
                  // className="writeInput"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form_field">
                <label>Enter Your contact number</label>

                <input
                  type="text"
                  placeholder="Enter your contact details"
                  // className="writeInput"
                  // autoFocus={true}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="form_field">
                <label>Enter food details</label>

                <input
                  placeholder="Enter food details"
                  type="text"
                  // className=" writeInput"
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="form_field">
                <label>Enter Your location</label>

                <input
                  style={{
                    marginBottom: "20px"
                  }}
                  placeholder="Enter location"
                  type="text"
                  // className=" writeInput"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

          </form>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1" d="M0,256L40,245.3C80,235,160,213,240,224C320,235,400,277,480,261.3C560,245,640,171,720,144C800,117,880,139,960,138.7C1040,139,1120,117,1200,106.7C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </>
  );
}
