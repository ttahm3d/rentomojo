import React, { useState } from "react";
import axios from "axios";
import Comments from "../Comments/Comments";
import { useQuery } from "react-query";

const getPostDetails = async ({ queryKey }) => {
  const [_key, { postId }] = queryKey;
  const response = await axios.get(`/posts/${postId}`);
  return response.data;
};

const PostDetails = (props) => {
  const [showComments, setshowComments] = useState(false);
  const postId = props.match.params.id;
  const { data, isLoading, error } = useQuery(
    ["posts", { postId }],
    getPostDetails
  );

  return (
    <div>
      {isLoading && <p>Loading .....</p>}
      {error && <p>Error in fetching data</p>}
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : null}
      <button>Delete</button>
      <button onClick={() => setshowComments(!showComments)}>
        {!showComments ? <p>View Comments</p> : <p>Hide Comments</p>}
      </button>
      {showComments && <Comments postId={postId} />}
    </div>
  );
};

export default PostDetails;
