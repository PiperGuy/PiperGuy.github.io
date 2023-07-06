import type { FC } from 'react';
import Post from '~/components/Post';
import PostList from '~/components/PostList';
import Section from '~/components/Section';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '~/utils/posts';

type PostPageProps = {
	params: any;
};

export function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => {
		return {
			params: {
				slug: post.slug
			}
		};
	});
}

const getProps = async (slugString: string) => {
	const slug = slugString;
	const post = await getPostBySlug(slug);
	const relatedPosts = getRelatedPosts(post.frontmatter);

	return {
		post,
		relatedPosts
	};
};

const PostPage: FC<PostPageProps> = async ({ params }) => {
	const { slug } = params;
	const { post, relatedPosts } = await getProps(slug);
	return (
		<div className='flex flex-col gap-y-28'>
			<Post post={post} />

			<Section title='related posts'>
				<PostList posts={relatedPosts} />
			</Section>
		</div>
	);
};

export default PostPage;
