import type { FC } from 'react';

import HireMe from '~/components/HireMe';
import { getTestimonials } from '~/utils/testimonials';

const getProps = async () => {
	const testimonials = await getTestimonials();

	return {
		testimonials
	};
};
const HireMePage: FC = async () => {
	const { testimonials } = await getProps();
	return <HireMe testimonials={testimonials} />;
};

export default HireMePage;
