import { LogIn } from 'lucide-react';
import { useEffect, useState } from 'react';

import { HeaderAvatar } from '@/components/layout/content/header/profile/HeaderAvatar';

import { LinkButton } from '@/ui/button/LinkButton';

import { PAGE } from '@/config/public-page.config';

import { selectIsLoggedIn } from '@/store/authSlice';
import { useAppSelector } from '@/store/hooks';

export function HeaderProfile() {
	const [isClient, setIsClient] = useState(false);
	const isLoggedIn = useAppSelector(selectIsLoggedIn);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return isLoggedIn ? (
		<HeaderAvatar />
	) : (
		<LinkButton href={PAGE.AUTH}>
			<LogIn />
			Auth
		</LinkButton>
	);
}
