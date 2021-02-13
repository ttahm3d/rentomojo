import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Post from './Post/Post'
import axios from 'axios'

const queryString = require('query-string');
const getPostsByUserId = async () => {
	return await (await axios.get(`/posts?userId=${1}`)
		.then(({ data }) => data)
	)
};

const Posts = (props) => {
	const { data, isLoading, error } = useQuery("posts", getPostsByUserId)
	const search = props.location.search; // could be '?foo=bar'
	const params = new URLSearchParams(search);
	const foo = params.get('userId');

	// const test = qs.parse(location.search, { ignoreQueryPrefix: true }).userId
	// console.log(data)
	console.log(foo)
	return (
		<div>
			<ul>
				{isLoading && <p>Loadin</p>}
				{data && data.map(post => (<Post key={post.id} post={post} />))}
			</ul>
		</div>
	)
}

export default Posts;