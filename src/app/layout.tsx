import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { ReactNode } from 'react';

import { Layout } from '@/components/layout/Layout';

import { Providers } from '@/providers/Providers';

import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'RED Video',
	description: 'App for video watching',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`${notoSans.className} bg-[var(--bg-color)] text-[var(--text-color)] text-base`}>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	);
}
