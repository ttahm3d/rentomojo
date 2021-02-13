import React from 'react';
import {NavLink} from 'react-router-dom';

const Post = ({post}) => {
	return (
		<div>
			<h4>{post.title}</h4>
			<p><NavLink to={"/posts/" + post.id}>View Details</NavLink></p>
		</div>
	)
}

export default Post;