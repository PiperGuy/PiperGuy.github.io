import type { FC } from 'react';

import PostList from '~/components/PostList';
import type { Tag } from '~/types/post';
import { getPostsByTag, getTags } from '~/utils/posts';

type TagPageProps = {
	params: any;
};

const getProps = (tagSlug: Tag) => {
	const tag = tagSlug;
	const posts = getPostsByTag(tag);

	return {
		tag,
		posts
	};
};

export const generateStaticParams = () => {
	const tags = getTags();

	return tags.map((tag) => {
		return {
			params: {
				tag
			}
		};
	});
};

const TagPage: FC<TagPageProps> = ({ params }) => {
	const { tag: tagSlug } = params;
	const { tag, posts } = getProps(tagSlug);
	return (
		<>
			<div className='self-start'>
				<h1 className='mb-16 flex flex-col items-center gap-y-2'>
					<span className='font-heading text-4xl font-semibold'>posts tagged</span>

					<span className='rounded-lg bg-black px-6 py-1 text-center font-heading text-6xl font-bold text-white dark:bg-white dark:text-black'>
						{tag}
					</span>
				</h1>

				<PostList posts={posts} />
			</div>
		</>
	);
};

export default TagPage;
