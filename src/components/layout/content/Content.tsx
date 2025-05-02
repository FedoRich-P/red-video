import { PropsWithChildren } from 'react';

import { Header } from '@/components/layout/content/header/Header';

export function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<main>
			<Header />
			<section className={'p-6'}>{children}</section>
		</main>
	);
}
