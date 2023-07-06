import type { FC } from 'react';

import Blog from '~/components/Blog/Blog';

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

	return <Blog allPosts={allPosts} />;
};

export default BlogPage;
