import Link from 'next/link';

import type { ISidebarItem } from '../sidebar.types';
import cn from 'clsx';

interface Props {
	item: ISidebarItem;
	isActive: boolean;
}

export function MenuItem({ item, isActive }: Props) {
	return (
		<li className={cn(isActive ? 'text-[var(--primary-color)] opacity-90' : 'text-[var(--text-color)])]')}>
			<Link
				href={item.link}
				className="group py-3 flex items-center gap-5 transition-all duration-300 relative">
				<item.icon className="group-hover:text-[var(--primary-color)] transition-transform text-inherit group-hover:rotate-6 min-w-6" />
				<span className="relative text-inherit">
					{item.label}
					<span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--primary-color)] transition-all duration-600 group-hover:w-full block"></span>
				</span>
			</Link>
			{item.isBottomBorder && (
				<span className="h-[1px] bg-[var(--border-color)] my-5 w-full block" />
			)}
		</li>
	);
}
