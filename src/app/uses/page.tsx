import type { FC } from 'react';
import Uses from '~/components/Uses';
import type { Markdown } from '~/types/markdown';
import { getMarkdownBySlug } from '~/utils/markdown';

type UsesPageProps = {
	uses: Markdown;
};

const getProps = async () => {
	const uses = await getMarkdownBySlug('uses');

	return {
		uses
	};
};
const UsesPage: FC<UsesPageProps> = async () => {
	const { uses } = await getProps();
	return <Uses uses={uses} />;
};

export default UsesPage;
