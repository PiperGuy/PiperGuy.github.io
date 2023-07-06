'use client';
import { useContext } from 'react';

import type { ThemeContextType } from '~/contexts/Theme';
import { ThemeContext } from '~/contexts/Theme';

const useTheme = (): ThemeContextType => {
	const themeCtx = useContext(ThemeContext);
	return themeCtx;
};

export default useTheme;
