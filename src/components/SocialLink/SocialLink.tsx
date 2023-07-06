import type { FC } from 'react';

import Icon from '~/components/Icon';
import Link from '~/components/Link';

type SocialLinkProps = {
	platform: 'instagram' | 'github' | 'twitter' | 'linkedin';
};

const SocialLink: FC<SocialLinkProps> = ({ platform }) => {
	let url = '';
	let name = '';

	switch (platform) {
		case 'instagram':
			url = 'https://instagram.com/piperguy_';
			name = 'instagram';
			break;

		case 'github':
			url = 'https://github.com/PiperGuy';
			name = 'github';
			break;

		case 'twitter':
			url = 'https://twitter.com/_PiperGuy_';
			name = 'twitter';
			break;

		case 'linkedin':
			url = 'https://youfoundpiperguy.com/discord';
			name = 'discord';
			break;
	}

	return (
		<Link to={url}>
			<Icon
				className='h-8 fill-black transition duration-300 hover:fill-red-400 dark:fill-white hover:dark:fill-red-400'
				name={name}
			/>
		</Link>
	);
};

export default SocialLink;
