import React from "react";
import "./Post.css";
import { CCard, CCardImage, CCardBody, CCardText } from "@coreui/react"
import { Link } from "react-router-dom";
export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <CCard className="card" >
      {post.photo &&
        <CCardImage style={{ width: "100%" }} orientation="top" src={PF + post.photo} />
      }
      <CCardBody>
        <CCardText>Post by - {post.title}</CCardText>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "-22px",
          marginTop: "-22px"
        }}>
          <CCardText> {new Date(post.createdAt).toDateString()}</CCardText>
          <CCardText> {new Date(post.createdAt).toLocaleTimeString()}</CCardText>
        </div>

        <CCardText>
          Address - {post.address}
        </CCardText>
        <CCardText>
          Food - {post.desc}
        </CCardText>
        <CCardText style={{
          marginBottom: "40px"
        }}>
          Contact - {post.contact}
        </CCardText>
        <Link className="link cbtn" to={`/post/${post._id}`}>Go to Post</Link>
      </CCardBody>
    </CCard>
  );
}
