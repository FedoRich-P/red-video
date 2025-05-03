import { PropsWithChildren } from 'react';

import { Header } from '@/components/layout/content/header/Header';

export function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={'w-full'}>
			<Header/>
			<main className={'p-6 w-full'}>
				{children}
			</main>
		</div>
	);
}
