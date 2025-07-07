'use client';

import cn from 'clsx';
import { PropsWithChildren, useEffect, useState } from 'react';

import { Content } from '@/components/layout/content/Content';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';

import { authService } from '@/services/auth.service';

import styles from './Layout.module.scss';

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSidebar] = useState(true);
	const [isReady, setIsReady] = useState(false);

	const toggleSidebar = () => {
		setIsShowedSidebar((prev) => !prev);
	};

	useEffect(() => {
		const init = async () => {
			await authService.initializeAuth();
			setIsReady(true);
		};
		init();
	}, []);

	if (!isReady) return null;

	return (
		<div
			className={cn(
				'flex min-h-screen',
				isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar,
			)}>
			<Sidebar toggleSidebar={toggleSidebar} isShowedSidebar={isShowedSidebar} />
			<Content>{children}</Content>
		</div>
	);
}
