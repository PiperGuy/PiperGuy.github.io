import classnames from 'classnames';
import type { FC, ReactElement } from 'react';
import React from 'react';

type MarkdownProps = {
	content: ReactElement;
	className?: string;
};

const Markdown: FC<MarkdownProps> = ({ content, className }) => {
	return (
		<div
			className={classnames(
				'prose-md prose-[iframe]:w-100 prose prose-red-400 max-w-3xl dark:prose-invert prose-a:font-normal prose-a:text-gray-700 prose-a:no-underline prose-a:shadow-link prose-a:transition prose-a:duration-300 hover:prose-a:shadow-link-hover prose-code:rounded prose-code:bg-red-400 prose-code:px-2 prose-code:py-1 prose-code:font-normal prose-code:text-white before:prose-code:content-none after:prose-code:content-none prose-pre:bg-red-400 prose-img:mx-auto prose-img:rounded dark:prose-a:text-gray-300',
				className
			)}
		>
			{content}
		</div>
	);
};

export default Markdown;
