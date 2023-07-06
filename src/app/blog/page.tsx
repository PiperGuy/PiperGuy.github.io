import type { FC } from 'react';
import Blog from '~/components/Blog/Blog';
import { getAllPosts } from '~/utils/posts';

const getProps = () => {
	const allPosts = getAllPosts();
	return {
		allPosts
	};
};

const BlogPage: FC = () => {
	const { allPosts } = getProps();

	return <Blog allPosts={allPosts} />;
};

export default BlogPage;
