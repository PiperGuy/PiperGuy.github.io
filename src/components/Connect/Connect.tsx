import type { FC } from 'react';
import SocialLink from '~/components/SocialLink';

const Connect: FC = () => {
	return (
		<div className='grid justify-items-center gap-8 text-center text-xl'>
			<div>
				<p className='m-0'>Thanks for chatting with me!</p>
				<p className='m-0'>Let&apos;s connect on these platforms.</p>
			</div>

			<div className='grid grid-flow-col content-center justify-center gap-x-5'>
				<SocialLink platform='github' />
				<SocialLink platform='twitter' />
				<SocialLink platform='instagram' />
			</div>
		</div>
	);
};

export default Connect;
