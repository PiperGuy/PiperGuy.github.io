import type { FC } from 'react';

import Home from '~/components/Home';
import type { PostFrontmatter } from '~/types/post';
import type { Project } from '~/types/project';
import { getLatestPosts } from '~/utils/posts';
import { getFeaturedProjects } from '~/utils/projects';

type IndexPageProps = {
	latestPosts: PostFrontmatter[];
	featuredProjects: Project[];
};
const getProps = async () => {
	const latestPosts = getLatestPosts();
	const featuredProjects = await getFeaturedProjects();

	return {
		latestPosts,
		featuredProjects
	};
};

const IndexPage: FC<IndexPageProps> = async () => {
	const { latestPosts, featuredProjects } = await getProps();
	return <Home latestPosts={latestPosts} featuredProjects={featuredProjects} />;
};

export default IndexPage;
