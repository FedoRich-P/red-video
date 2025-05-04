import { SearchField } from '@/components/layout/content/header/SearchField';
import { HeaderLinks } from '@/components/layout/content/header/HeaderLinks';
import { HeaderProfile } from '@/components/layout/content/header/profile/HeaderProfile';

export function Header() {
	return (
		<header className='p-3 pl-0 pr-5 border-b border-[var(--border-color)] flex items-center justify-between'>
			<SearchField />
			<div className='flex items-center gap-8'>
				<HeaderLinks />
				<HeaderProfile />
			</div>
		</header>
	)
}