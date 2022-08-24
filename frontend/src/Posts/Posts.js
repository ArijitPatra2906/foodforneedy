import React from "react";
import Post from "../component/Post/Post";
import "./Posts.css";
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div >
  );
}
