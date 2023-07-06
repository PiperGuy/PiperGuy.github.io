import SEO from '~/components/seo';
import type { FC, ReactNode } from 'react';

// import { createImageUrl } f,rom '~/utils/cloudinary';

import pkg from '../../../package.json';

type PageLayoutProps = {
	children?: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return (
		<>
			<SEO
				title='🏠 my home on the web'
				keywords={pkg.keywords}
				// icon={createImageUrl('/site/favicon.ico')}
				// facebook={{
				// 	image: createImageUrl('/social/facebook.png'),
				// 	url: 'https://youfoundpiperguy.com',
				// 	type: 'website'
				// }}
				// twitter={{
				// 	image: createImageUrl('/social/twitter.png'),
				// 	site: '@_PiperGuy_',
				// 	card: 'summary'
				// }}
			/>

			<main className='grid min-h-screen content-center justify-center px-5 py-0 font-text text-black transition-all dark:text-white'>
				{children}
			</main>
		</>
	);
};

export default PageLayout;
