import SEO from '~/components/seo';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

import Now from '~/components/Now';
import type { Now as NowType } from '~/types/now';
import { getLatestNow, getNewerNow, getOlderNow } from '~/utils/now';

type NowPageProps = {
	latestNow: NowType;
	newerNow: NowType;
	olderNow: NowType;
};
const getProps = async () => {
	const latestNow = await getLatestNow();
	const newerNow = await getNewerNow(latestNow);
	const olderNow = await getOlderNow(latestNow);

	return {
		latestNow,
		newerNow,
		olderNow
	};
};
const NowPage: FC<NowPageProps> = async () => {
	const { latestNow, newerNow, olderNow } = await getProps();
	return (
		<>
			<SEO title='🧭 now' />
			<Now now={latestNow} newer={newerNow} older={olderNow} />
		</>
	);
};

export default NowPage;
