import React, { useState } from "react";
import axios from "axios";
import Comments from "../Comments/Comments";
import { Redirect } from "react-router-dom";
import { useQuery } from "react-query";

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
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : null}
      <button onClick={() => deletePost(data.id)}>Delete</button>
      <button onClick={() => setshowComments(!showComments)}>
        {!showComments ? <p>View Comments</p> : <p>Hide Comments</p>}
      </button>
      {showComments && <Comments postId={postId} />}
    </div>
  );
};

export default PostDetails;
