import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./SinglePost.css";
import TopBar from "../Topbar/Topbar"
export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [address, setAddress] = useState("");
  // const [details, setDetails] = useState("");
  const [contact, setContact] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts/" + path);

      setPost(res.data);
      setTitle(res.data.title)
      setDesc(res.data.desc);
      setAddress(res.data.address);
      setContact(res.data.contact)
    };
    getPosts();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {
        data: { username: user.username },
      });

      setUpdateMode(false);
      window.location.replace("/");

    } catch (err) { }
  };
  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + path, {
        username: user.username,
        title,
        desc,
        contact,
        address,
      });
      window.location.replace("/");
    } catch (err) { }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="singlePostTitleInput"
            autoFocus
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          {/* <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link ">
              <b> {post.name}</b>
            </Link>
          </span> */}

          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
          <span className="singlePostTime">
            {new Date(post.createdAt).toLocaleTimeString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            ClassName="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <span className="sub">{post.desc}</span>
        )}

        {updateMode ? (
          <textarea
            ClassName="singlePostDescInput"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        ) : (
          <span className="sub">{post.contact}</span>


        )}
        {updateMode ? (
          <textarea
            ClassName="singlePostDescInput"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        ) : (
          <span className="sub">{post.address}</span>

        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
