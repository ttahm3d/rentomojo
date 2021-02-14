import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const getPostDetails = async ({ queryKey }) => {
  const [_key, { postId }] = queryKey;
  const response = await axios.get(`/posts/${postId}`);
  return response.data;
};

const PostDetails = (props) => {
  const postId = props.match.params.id;
  const { data, isLoading, error } = useQuery(
    ["posts", { postId }],
    getPostDetails
  );
  console.log(data);
  return <div></div>;
};

export default PostDetails;
