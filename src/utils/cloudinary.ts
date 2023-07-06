const createImageUrl = (location: string) => {
	if (location.startsWith('/')) {
		const imageUrl = createInternalImageUrl(location);
		return imageUrl;
	}

	if (location.startsWith('http://') || location.startsWith('https://')) {
		const imageUrl = createExternalImageUrl(location);
		return imageUrl;
	}

	throw new Error(`Image location is not an internal path or an external url: ${location}`);
};

const createInternalImageUrl = (path: string) => {
	const internalImageUrl = `https://res.cloudinary.com/piperguy/image/upload/f_auto,q_auto/youfoundpiperguy.com${path}`;
	return internalImageUrl;
};

const createExternalImageUrl = (url: string) => {
	const externalImageUrl = `https://res.cloudinary.com/piperguy/image/fetch/f_auto,q_auto/${url}`;
	return externalImageUrl;
};

export { createExternalImageUrl, createImageUrl, createInternalImageUrl };
