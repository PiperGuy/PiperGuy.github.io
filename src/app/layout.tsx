import Script from 'next/script';
import '../styles/globals.css';
import Layout from '~/components/Layout';
import { AppProvider } from '~/contexts/App';
import { ThemeProvider } from '~/contexts/Theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='bg-white transition duration-300 dark:bg-black'>
				{/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
				<Script src='/theme.js' strategy='beforeInteractive' />
				<ThemeProvider>
					<AppProvider>
						<Layout>{children}</Layout>
					</AppProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
