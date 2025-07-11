import cn from 'clsx'
import Link from 'next/link'
import {ISidebarItem} from "@/components/layout/sidebar/sidebar.types";

interface Props {
	item: ISidebarItem
	isActive: boolean
	isShowedSidebar: boolean
}

export function MenuItem({ item, isActive, isShowedSidebar }: Props) {
	return (
		<li className={cn(isActive ? 'text-primary' : 'text-textColor')}>
			<Link
				href={item.link}
				className={'group py-3 flex items-center gap-5'}
			>
				<item.icon
					className={cn('min-w-6', {
						'group-hover:text-primary transition group-hover:rotate-6': !isActive,
						'text-red-400': isActive && !isShowedSidebar
					})}
				/>
				<span
					className={cn('border-b', {
						'border-white': isActive,
						'border-transparent': !isActive
					})}
				>
					{item.label}
				</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1px] bg-border my-5 w-full block' />}
		</li>
	)
}
