import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comments from "../Comments/Comments";
import { Redirect } from "react-router-dom";
import { useQuery } from "react-query";

import "./PostDetails.css";

const getPostDetails = async ({ queryKey }) => {
  const [_key, { postId }] = queryKey;
  const response = await axios.get(`/posts/${postId}`);
  return response.data;
};

const PostDetails = (props) => {
  const [deleted, setdeleted] = useState(false);
  const [showComments, setshowComments] = useState(false);
  const postId = props.match.params.id;
  const { data, isLoading, error } = useQuery(
    ["posts", { postId }],
    getPostDetails
  );

  const deletePost = async (id) => {
    const response = await axios.delete(`/posts/${id}`);
    if (response.status === 200) {
      setdeleted(true);
      toast.success("Sucessfully deleted the post!!!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <div>
      {data && deleted ? (
        <Redirect to={`/posts?userId=${data.userId}`} />
      ) : null}
      {isLoading && <p>Loading .....</p>}
      {error && <p>Error in fetching data</p>}
      {data ? (
        <div className="details-wrapper">
          <div className="title-delete">
            <h3>{data.title}</h3>
            <button className="delete" onClick={() => deletePost(data.id)}>
              Delete
            </button>
          </div>
          <div className="post-body">
            <p>
              {data.body} {data.body} {data.body}
            </p>
            <p>
              {data.body} {data.body}
            </p>
          </div>
          <button
            className="comment"
            onClick={() => setshowComments(!showComments)}
          >
            {!showComments ? "View Comments" : "Hide Comments"}
          </button>
        </div>
      ) : null}

      {showComments && <Comments postId={postId} />}
    </div>
  );
};

export default PostDetails;
