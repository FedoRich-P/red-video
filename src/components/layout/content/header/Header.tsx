import { SearchField } from '@/components/layout/content/header/SearchField';
import { HeaderLinks } from '@/components/layout/content/header/HeaderLinks';
import dynamic from 'next/dynamic'
import {SkeletonLoader} from "@/ui/skeleton-loader/SkeletonLoader";

const DynamicHeaderProfile = dynamic(() => import('@/components/layout/content/header/profile/HeaderProfile').then(mod => mod.default), {
	ssr: false, loading: () => <SkeletonLoader className={'w-8 h-8 mb-0 rounded-lg'}/>,
})

export function Header() {
	return (
		<header className='p-3 pl-0 pr-5 border-b border-[var(--border-color)] flex items-center justify-between'>
			<SearchField />
			<div className='flex items-center gap-8'>
				<HeaderLinks />
				<DynamicHeaderProfile />
			</div>
		</header>
	)
}