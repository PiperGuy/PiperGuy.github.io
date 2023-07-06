// 'use client';
import SEO from '~/components/seo';
import type { FC } from 'react';
import { useState } from 'react';

import PostList from '~/components/PostList';
import PostSearchBar from '~/components/PostSearchBar';
import type { PostFrontmatter } from '~/types/post';
import { getAllPosts } from '~/utils/posts';

type BlogPageProps = {
	allPosts: PostFrontmatter[];
};

const getProps = () => {
	const allPosts = getAllPosts();

	return {
		allPosts
	};
};

const BlogPage: FC<BlogPageProps> = () => {
	const { allPosts } = getProps();

	return (
		<>
			<SEO title='✍🏼 blog' />

			<div>
				<PostSearchBar posts={allPosts} />
				<PostList posts={allPosts} />
			</div>
		</>
	);
};

export default BlogPage;
