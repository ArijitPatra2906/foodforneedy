import React, { useEffect, useState } from "react";
// import Header from "../../component/Header/Header";
// // import Sidebar from "../../component/Sidebar/Sidebar";
import Posts from "../../Posts/Posts";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Topbar from "../../component/Topbar/Topbar";
import Navbar from "../../component/Navbar/Navbar";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="home-sec">
      {/* <Header /> */}
      <div className="navbar-sex">
        {/* <Topbar /> */}
        <Navbar />

      </div>
      <div className="home">
        <Posts posts={posts} />
      </div>
    </div>
  );
}
