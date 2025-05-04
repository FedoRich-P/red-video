'use client';

import cn from 'clsx';
import { PropsWithChildren, useEffect, useState } from 'react';

import { Content } from '@/components/layout/content/Content';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';

import { authService } from '@/services/auth.service';

import styles from './Layout.module.scss';

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSidebar] = useState(true);

	const toggleSidebar = () => {
		setIsShowedSidebar((prev) => !prev);
	};
	useEffect(() => {
		authService.initializeAuth();
	}, []);

	return (
		<div
			className={cn(
				'flex min-h-screen',
				isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar,
			)}>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</div>
	);
}
