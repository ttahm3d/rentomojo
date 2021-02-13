import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query'

const getPostDetails = async () => {
	await (await axios.get(`/posts/1`)
		.then(({ data }) => data)
	)
};

const PostDetails = (props) => {
	const { data, isLoading, error } = useQuery("posts", getPostDetails);
	console.log(data)
	return (
		<div>
			<p>something</p>
		</div>
	)
}

export default PostDetails;