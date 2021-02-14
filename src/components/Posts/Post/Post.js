import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import { NavLink } from "react-router-dom";

import "./Post.css";

const Post = ({ posts }) => {
  //pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <div className="post-container ">
        {currentPosts.map((post) => (
          <div className="post-wrapper" key={post.id}>
            <p className="title">{post.title}</p>
            <NavLink to={"/posts/" + post.id}>Read More</NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
