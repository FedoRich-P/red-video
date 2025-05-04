'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';

const client = new QueryClient();

type Props = {
	children: ReactNode;
};

export function Providers({ children }: Props) {
	return (
		<QueryClientProvider client={client}>
			<Provider store={store}>
				<LazyMotion features={domAnimation}>{children}</LazyMotion>
			</Provider>
		</QueryClientProvider>
	);
}
