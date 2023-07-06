'use client';
import { useContext } from 'react';

import type { AppContextType } from '~/contexts/App';
import { AppContext } from '~/contexts/App';

const useApp = (): AppContextType => {
	const appCtx = useContext(AppContext);
	return appCtx;
};

export default useApp;
