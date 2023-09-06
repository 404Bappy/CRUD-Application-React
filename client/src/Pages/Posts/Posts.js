import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      const fatchPosts = async()=>{
          const res = await axios.get()
      }
  }, []);
  return (
    <div className="posts">
      <div className="container">
        <h1>Posts</h1>
      </div>
    </div>
  );
}

export default Posts;
