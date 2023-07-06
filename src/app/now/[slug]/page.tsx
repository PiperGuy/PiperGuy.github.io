import type { GetStaticPaths, GetStaticProps } from 'next';
import type { FC } from 'react';

import Now from '~/components/Now';
import type { Now as NowType, NowFrontmatter } from '~/types/now';
import { getAllNows, getNewerNow, getNowByDate, getOlderNow } from '~/utils/now';

type NowPageProps = {
	params: any;
};

export function generateStaticParams() {
	const nows = getAllNows();

	return nows.map((now) => {
		return {
			params: {
				slug: now
			}
		};
	});
}

const getProps = async (slugString: string) => {
	const date = slugString;

	const currentNow = await getNowByDate(date);
	const newerNow = await getNewerNow(currentNow);
	const olderNow = await getOlderNow(currentNow);

	return {
		currentNow,
		newerNow,
		olderNow
	};
};

const NowPage: FC<NowPageProps> = async ({ params }) => {
	const { slug } = params;
	const { currentNow, newerNow, olderNow } = await getProps(slug);
	return <Now now={currentNow} newer={newerNow} older={olderNow} />;
};

export default NowPage;
