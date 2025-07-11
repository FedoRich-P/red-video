'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LazyMotion, domAnimation } from 'framer-motion';
import {ReactNode, useState} from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';
import {Toaster} from "react-hot-toast";

type Props = {
	children: ReactNode;
};

export function Providers({ children }: Props) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<LazyMotion features={domAnimation}>
					{children}
					<Toaster/>
				</LazyMotion>
			</Provider>
		</QueryClientProvider>
	);
}
