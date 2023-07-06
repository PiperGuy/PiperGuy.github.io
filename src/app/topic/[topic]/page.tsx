import SEO from '~/components/seo';

import type { FC } from 'react';

import PostList from '~/components/PostList';
import TopicMeta from '~/components/TopicMeta';
import type { PostFrontmatter, Topic } from '~/types/post';
import { getPostsByTopic, getTopic, getTopics } from '~/utils/posts';

type TopicPageProps = {
	params: any
};

const getProps = async () => {
	const name = context?.params?.name as Topic['name'];
	const topic = getTopic(name);
	const posts = getPostsByTopic(topic.name);

	return {

			topic,
			posts

	};
};
export const generateStaticParams = async () => {
	const topics = getTopics();

	const paths = topics.map((topic) => {
		return {
			params: {
				name: topic.name
			}
		};
	});

	return {
		paths,
		fallback: false
	};
};

const TopicPage: FC<TopicPageProps> = await ({ params }) => {
	const { paths } = params;
	return (
		<>
			<SEO title={`${topic.icon} ${topic.name}`} />

			<TopicMeta topic={topic} />
			<PostList posts={posts} />
		</>
	);
};





export default TopicPage;
