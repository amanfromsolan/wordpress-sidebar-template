import { WPAdminShell } from "./components/admin/WPAdminShell";
import {
	WPSidebar,
	WPSidebarGroup,
	WPSidebarItem,
	WPSidebarSubItem,
} from "./components/admin/WPSidebar";

export default function Home() {
	return (
		<WPAdminShell
			siteName="My Plugin Demo"
			sidebar={
				<WPSidebar>
					<WPSidebarGroup>
						<WPSidebarItem icon="dashboard" label="Dashboard" />
					</WPSidebarGroup>

					<WPSidebarGroup>
						<WPSidebarItem icon="admin-post" label="Posts" />
						<WPSidebarItem icon="admin-media" label="Media" />
						<WPSidebarItem icon="admin-page" label="Pages" />
						<WPSidebarItem icon="admin-comments" label="Comments" />
					</WPSidebarGroup>

					<WPSidebarGroup>
						<WPSidebarItem icon="admin-appearance" label="Appearance" />
						<WPSidebarItem icon="admin-plugins" label="Plugins" />
						<WPSidebarItem icon="admin-users" label="Users" />
						<WPSidebarItem icon="admin-generic" label="Settings" />
					</WPSidebarGroup>

					<WPSidebarGroup>
						<WPSidebarItem icon="admin-generic" label="My Plugin" active open>
							<WPSidebarSubItem label="Dashboard" active />
							<WPSidebarSubItem label="Settings" />
							<WPSidebarSubItem label="Analytics" />
						</WPSidebarItem>
					</WPSidebarGroup>
				</WPSidebar>
			}
		>
			<div className="bg-wp-content-bg h-full flex items-center justify-center">
				<div className="text-center">
					<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6">
						<svg className="w-8 h-8 text-[#2271b1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
						</svg>
					</div>
					<h1 className="text-xl font-semibold text-[#1d2327]">
						Your plugin content goes here
					</h1>
					<p className="mt-2 text-sm text-[#646970]">
						Edit <code className="bg-white px-1.5 py-0.5 rounded text-[#2271b1]">app/page.tsx</code> to get started
					</p>
				</div>
			</div>
		</WPAdminShell>
	);
}
