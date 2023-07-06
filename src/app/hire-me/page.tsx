import type { FC } from 'react';

import HireMe from '~/components/HireMe';
import type { Testimonial } from '~/types/testimonial';
import { getTestimonials } from '~/utils/testimonials';

type HireMePageProps = {
	testimonials: Testimonial[];
};

const getProps = async () => {
	const testimonials = await getTestimonials();

	return {
		testimonials
	};
};
const HireMePage: FC<HireMePageProps> = async () => {
	const { testimonials } = await getProps();
	return <HireMe testimonials={testimonials} />;
};

export default HireMePage;
