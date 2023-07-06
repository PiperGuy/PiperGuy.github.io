import type { FC } from 'react';
import Now from '~/components/Now';
import type { Now as NowType } from '~/types/now';
import { getLatestNow, getNewerNow, getOlderNow } from '~/utils/now';

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
const NowPage: FC = async () => {
	const { latestNow, newerNow, olderNow } = await getProps();
	return <Now now={latestNow} newer={newerNow} older={olderNow} />;
};

export default NowPage;
