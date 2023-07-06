'use client';

import type { FC } from 'react';
import { useState } from 'react';

import PostList from '~/components/PostList';
import PostSearchBar from '~/components/PostSearchBar';
import type { PostFrontmatter } from '~/types/post';

type BlogProps = {
	allPosts: PostFrontmatter[];
};

const Blog: FC<BlogProps> = ({ allPosts }) => {
	const [posts, setPosts] = useState(allPosts);

	const onSearch = (filteredPosts: PostFrontmatter[]) => {
		setPosts(filteredPosts);
	};
	return (
		<>
			<div>
				<PostSearchBar posts={allPosts} onSearch={onSearch} />
				<PostList posts={posts} />
			</div>
		</>
	);
};

export default Blog;
