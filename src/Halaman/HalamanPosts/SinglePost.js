import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CardSinglePost from "./CardSinglePost";

const SingleBlogPost = () => {
  const { postId } = useParams();
  console.log("post id", postId)
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/posts/${postId}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [postId]);

  return (
    <div>
      <div><CardSinglePost  
            key={post.id}
            title={post.title}
            body={post.body}
            image={post.image}
            userId={post.userId}
            
          /></div>
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          go back
        </button>
      </div>
    </div>
  );
};

export default SingleBlogPost;
