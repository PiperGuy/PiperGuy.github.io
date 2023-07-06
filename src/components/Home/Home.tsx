'use client';
import type { FC } from 'react';

import FeaturedProjects from '~/components/FeaturedProjects';
import Hero from '~/components/Hero';
import LatestPosts from '~/components/LatestPosts';
import Section from '~/components/Section';
import type { PostFrontmatter } from '~/types/post';
import type { Project } from '~/types/project';

type HomeProps = {
	latestPosts: PostFrontmatter[];
	featuredProjects: Project[];
};

const Home: FC<HomeProps> = ({ latestPosts, featuredProjects }) => {
	return (
		<div className='mt-16 grid gap-y-16 max-[700px]:m-0'>
			<button
				onClick={() => {
					console.log('test');
				}}
			>
				click me
			</button>
			<Hero />

			<Section title='blog' link='/blog'>
				<LatestPosts latestPosts={latestPosts} />
			</Section>

			<Section title='projects' link='https://github.com/piperguy'>
				<FeaturedProjects featuredProjects={featuredProjects} />
			</Section>
		</div>
	);
};

export default Home;
