import type { ISidebarItem } from '../sidebar.types';

import { MenuItem } from './MenuItem';
import { usePathname } from 'next/navigation';
import { match } from 'path-to-regexp';

interface Props {
	title?: string;
	menu: ISidebarItem[];
}

export function SidebarMenu({ menu, title}: Props) {
	const pathname = usePathname();
	return (
		<nav>
			{title && <div className="opacity-40 uppercase font-medium text-xs mb-3">{title}</div>}
			<ul>
				{menu
					.filter((item) => typeof item.link === 'string')
					.map((item) => {
						const isMatched = match(item.link!)(pathname);
						return (
							<MenuItem
								key={item.label}
								item={item}
								isActive={!!isMatched}
							/>
						);
					})}
			</ul>
		</nav>
	);
}
