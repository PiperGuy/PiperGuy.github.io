import matter from 'gray-matter';
import path from 'path';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkInlineLinks from 'remark-inline-links';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkUnwrapImages from 'remark-unwrap-images';
import { unified } from 'unified';
import type { Markdown } from '~/types/markdown';

const getMarkdownBySlug = async (slug: string): Promise<Markdown> => {
	const nowPath = path.join(process.cwd(), `content/pages/${slug}.md`);

	const file = matter.read(nowPath);
	const html = await transformMarkdown(file.content);

	const markdown: Markdown = {
		html,
		frontmatter: file.data
	};

	return markdown;
};

const transformMarkdown = async (markdown: string): Promise<string> => {
	const processor = unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkUnwrapImages)
		.use(remarkInlineLinks)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeExternalLinks, {
			target: '_blank',
			rel: ['noopener', 'noreferrer']
		})
		.use(rehypeRaw)
		.use(rehypeStringify);

	const file = await processor.process(markdown);
	const html = file.toString();

	return html;
};

export { getMarkdownBySlug, transformMarkdown };
