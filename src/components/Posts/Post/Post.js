import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import { NavLink } from "react-router-dom";

const Post = ({ posts }) => {
  //pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <div>
      {currentPosts.map((post) => (
        <div>
          <p>{post.title}</p>
          <NavLink to={"/posts/" + post.id}>View Details</NavLink>
        </div>
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Post;
