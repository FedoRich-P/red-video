import { Menu, SquarePlay } from 'lucide-react';
import Link from 'next/link';

import { COLORS } from '@/constants/colors.constants';

import { PAGE } from '@/config/public-page.config';

interface Props {
	toggleSidebar: () => void;
}

export function SidebarHeader({ toggleSidebar }: Props) {
	return (
		<div className="flex items-center gap-4 mb-12">
			<button
				className="opacity-85 hover:opacity-100 transition-opacity duration-300"
				onClick={toggleSidebar}>
				<Menu />
			</button>

			<Link
				href={PAGE.HOME}
				className="group flex items-center gap-1.5 hover:text-[var(--primary-color)] hover:opacity-70  transition-all duration-300">
				<SquarePlay
					className="relative z-10 transition-colors duration-300"
					color={COLORS.primary}
					size={29}
				/>
				<span className="font-medium text-lg">RED Video</span>
			</Link>
		</div>
	);
}
