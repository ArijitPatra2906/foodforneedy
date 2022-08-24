import React from "react";
import "./Single.css";
// import Sidebar from "../../component/Sidebar/Sidebar";
import SinglePost from "../../component/SinglePost/SinglePost";
import { Link } from "react-router-dom";
export default function Single() {
  return (
    <>
      <Link to="/">
        <i className="fa-solid fa-arrow-left icon-arrow-profile"></i>
      </Link>
      <div className="single">
        <SinglePost />
        {/* <Sidebar/> */}
      </div>
    </>
  );
}
