import Link from '~/components/Link';
import type { FC } from 'react';

const Hero: FC = () => {
	return (
		// <div className='grid grid-cols-hero items-start self-center justify-self-center  max-[700px]:grid-cols-1'>
		// 	 <Link to='https://instagram.com/piperguy_' className='max-[700px]:m-auto max-[700px]:w-4/5'>

		// 	</Link>

		// </div>
		<div className='w-full'>
			<h1 className='m-0 font-heading text-5xl font-black leading-normal -tracking-[0.2rem]'>
				i&apos;m Naveen Pandurangi
			</h1>

			<div className='grid grid-cols-[repeat(2,auto)] justify-start justify-items-center gap-x-3 pl-10 leading-normal'>
				<h2 className='m-0 justify-self-start text-2xl font-medium'>frontend developer</h2>
				<span className='m-0 text-2xl font-medium leading-normal'>👨🏼‍💻</span>

				<h2 className='m-0 justify-self-start text-2xl font-medium'>side project connoisseur</h2>
				<span className='m-0 text-2xl font-medium leading-normal'>🥃</span>

				<h2 className='m-0 justify-self-start text-2xl font-medium'>open source maintainer</h2>
				<span className='m-0 text-2xl font-medium leading-normal'>✨</span>
			</div>
		</div>
	);
};

export default Hero;
