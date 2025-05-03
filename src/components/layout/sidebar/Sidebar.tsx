import { SidebarHeader } from '@/components/layout/sidebar/header/SidebarHeader';
import { SidebarMenu } from '@/components/layout/sidebar/menus/SidebarMenu';
import { SidebarSubscriptions } from '@/components/layout/sidebar/menus/subscriptions/SidebarSubscriptions';
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from '@/components/layout/sidebar/sidebar.data';

interface Props {
	toggleSidebar: () => void;
}

export function Sidebar({ toggleSidebar }: Props) {
	return (
		<aside className="p-6 border-r border-[var(--border-color)] mr-3 whitespace-nowrap overflow-hidden">
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenu menu={SIDEBAR_DATA} />
			<SidebarSubscriptions />
			<SidebarMenu
				title="More from youtube"
				menu={MORE_SIDEBAR_DATA}
			/>
		</aside>
	);
}
