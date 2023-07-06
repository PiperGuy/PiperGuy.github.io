import type { FC } from 'react';

import PostList from '~/components/PostList';
import TopicMeta from '~/components/TopicMeta';
import type { Topic } from '~/types/post';
import { getPostsByTopic, getTopic, getTopics } from '~/utils/posts';

type TopicPageProps = {
	params: any;
};

export const generateStaticParams = async () => {
	const topics = getTopics();

	return topics.map((topic) => {
		return {
			params: {
				name: topic.name
			}
		};
	});
};

const getProps = async (slugString: Topic['name']) => {
	const name = slugString;
	const topic = getTopic(name);
	const posts = getPostsByTopic(topic.name);

	return {
		topic,
		posts
	};
};
const TopicPage: FC<TopicPageProps> = async ({ params }) => {
	const { topic: topicSlug } = params;
	const { topic, posts } = await getProps(topicSlug);
	return (
		<>
			<TopicMeta topic={topic} />
			<PostList posts={posts} />
		</>
	);
};

export default TopicPage;
