import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { ReactNode } from 'react';

import { Providers } from '@/providers/Providers';

import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'RED Video',
		template: `%s | RED Video`,
	},
	description: 'App for video watching',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`${notoSans.className} bg-bg text-textColor text-base`}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
