'use client';

import { useMutation } from '@tanstack/react-query';

import { authService } from '@/services/auth.service';
import { LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn } from '@/store/authSlice';

export function Logout() {
	const [isClient, setIsClient] = useState(false);

	const { mutate, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
	});

	const isLoggedIn = useAppSelector(selectIsLoggedIn);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient || !isLoggedIn) {
		return null;
	}

	return (
		<button onClick={()=> mutate()} className="group py-3 flex items-center gap-5 transition-all duration-300 relative">
			<LogOut className="group-hover:text-[var(--primary-color)] transition-transform text-inherit group-hover:rotate-6 min-w-6" />
			<span className="relative text-inherit">
				{isPending ? 'Please wait...' : 'Logout'}
				<span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--primary-color)] transition-all duration-600 group-hover:w-full block"></span>
			</span>
		</button>
	);
}
