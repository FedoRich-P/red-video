import {SidebarHeader} from '@/components/layout/sidebar/header/SidebarHeader';
import {SidebarMenu} from '@/components/layout/sidebar/menus/SidebarMenu';
import {SidebarSubscriptions} from '@/components/layout/sidebar/menus/subscriptions/SidebarSubscriptions';
import {MORE_SIDEBAR_DATA, SIDEBAR_DATA} from '@/components/layout/sidebar/sidebar.data';
import dynamic from "next/dynamic";

const DynamicLogout = dynamic(() => import('@/components/layout/sidebar/Logout').then(mod => mod.Logout), {
	ssr: false,
})

interface Props {
	toggleSidebar: () => void;
	isShowedSidebar: boolean
}

export function Sidebar({ toggleSidebar, isShowedSidebar}: Props) {
	return (
		<aside className="p-6 border-r border-[var(--border-color)] mr-3 whitespace-nowrap overflow-hidden">
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenu menu={SIDEBAR_DATA}  isShowedSidebar={isShowedSidebar} />
			<SidebarSubscriptions />
			<SidebarMenu
				title="More from youtube"
				menu={MORE_SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>
			<DynamicLogout/>
		</aside>
	);
}
