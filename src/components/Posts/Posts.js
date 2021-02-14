import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Post from "./Post/Post";
import axios from "axios";

const getPostsByUserId = async ({ queryKey }) => {
  const [_key, { userId }] = queryKey;
  const response = await axios.get(`/posts?userId=${userId}`);
  return response.data;
};

const Posts = (props) => {
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const userId = params.get("userId");

  const { data, isLoading, error } = useQuery(
    ["posts", { userId }],
    getPostsByUserId
  );

  return (
    <div>
      {isLoading && <p>Loading</p>}
      <ul>{data && <Post posts={data} />}</ul>
    </div>
  );
};

export default Posts;
