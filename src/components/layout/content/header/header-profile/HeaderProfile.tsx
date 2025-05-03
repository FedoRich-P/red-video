import Image from 'next/image';
import Link from 'next/link';

import { STUDIO_PAGE } from '@/config/studio-page';

export function HeaderProfile() {
	return (
		<Link
			href={STUDIO_PAGE.SETTINGS}
			className="shrink-0">
			{/* TODO: AUTH AVATAR */}
			<Image
				src="/uploads/avatars/redgroup.jpg"
				alt="User Avatar"
				width={30}
				height={30}
				className="rounded-lg"
			/>
		</Link>
	);
}
