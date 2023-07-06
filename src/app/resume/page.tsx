import type { FC } from 'react';
import Resume from '~/components/Resume';
import type { Markdown } from '~/types/markdown';
import { getMarkdownBySlug } from '~/utils/markdown';

const getProps = async () => {
	const resume = await getMarkdownBySlug('resume');

	return {
		resume
	};
};
const ResumePage: FC = async () => {
	const { resume } = await getProps();
	return <Resume resume={resume} />;
};

export default ResumePage;
