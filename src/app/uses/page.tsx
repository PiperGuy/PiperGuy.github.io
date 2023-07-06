import type { FC } from 'react';
import Uses from '~/components/Uses';
import { getMarkdownBySlug } from '~/utils/markdown';

const getProps = async () => {
	const uses = await getMarkdownBySlug('uses');

	return {
		uses
	};
};
const UsesPage: FC = async () => {
	const { uses } = await getProps();
	return <Uses uses={uses} />;
};

export default UsesPage;
