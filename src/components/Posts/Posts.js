import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";
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
      {isLoading && <Spinner />}
      {data && <Post posts={data} />}
    </div>
  );
};

export default Posts;
