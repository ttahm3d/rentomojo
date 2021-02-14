import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import "./Comment.css";
import Spinner from "../../Spinner/Spinner";

const getCommentsByPostId = async ({ queryKey }) => {
  const [_key, { postId }] = queryKey;
  const response = await axios.get(`comments?postId=${postId}`);
  return response.data;
};

const Comments = ({ postId }) => {
  const { data, isLoading, error } = useQuery(
    ["comments", { postId }],
    getCommentsByPostId
  );

  return (
    <div className="comment-container">
      {isLoading && <Spinner />}
      {data &&
        data.map((comment) => (
          <Comment
            key={comment.id}
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        ))}
    </div>
  );
};

const Comment = ({ body, email, name }) => {
  return (
    <div className="comments">
      <p className="name">{name}</p>
      <p className="email">{email}</p>
      <p className="comment-body">
        {body}
        {body}
      </p>
    </div>
  );
};

export default Comments;
