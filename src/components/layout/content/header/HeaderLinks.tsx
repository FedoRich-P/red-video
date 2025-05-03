import { Bell, LayoutGrid, PlusSquare } from 'lucide-react';
import Link from 'next/link';

import { STUDIO_PAGE } from '@/config/studio-page';

export function HeaderLinks() {
	return (
		<ul className="flex items-center gap-5">
			<li>
				<Link
					href={STUDIO_PAGE.UPLOAD_VIDEO}
					className="transition-opacity hover:opacity-100 duration-300 opacity-50">
					<PlusSquare size={25} />
				</Link>
			</li>
			<li>
				<Link
					href={STUDIO_PAGE.HOME}
					className="transition-opacity hover:opacity-100 duration-300 opacity-50">
					<LayoutGrid size={25} />
				</Link>
			</li>
			<li>
				<Link
					href={STUDIO_PAGE.HOME}
					className="transition-opacity hover:opacity-100 duration-300 opacity-50">
					<Bell size={25} />
				</Link>
			</li>
		</ul>
	);
}
