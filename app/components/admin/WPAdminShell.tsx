"use client";

import { ReactNode } from "react";
import { FaWordpress } from "react-icons/fa";
import { Dashicon } from "./Dashicon";

interface MenuItem {
	icon: string;
	label: string;
	active?: boolean;
}

interface PluginSubmenuItem {
	label: string;
	active?: boolean;
}

interface PluginConfig {
	icon: string;
	label: string;
	active?: boolean;
	items: PluginSubmenuItem[];
}

interface WPAdminShellProps {
	children: ReactNode;
	siteName?: string;
	plugin?: PluginConfig;
}

const MENU_ITEMS: MenuItem[] = [
	{ icon: "dashboard", label: "Dashboard" },
	{ icon: "admin-post", label: "Posts" },
	{ icon: "admin-media", label: "Media" },
	{ icon: "admin-page", label: "Pages" },
	{ icon: "admin-comments", label: "Comments" },
	{ icon: "admin-appearance", label: "Appearance" },
	{ icon: "admin-plugins", label: "Plugins" },
	{ icon: "admin-users", label: "Users" },
	{ icon: "admin-generic", label: "Settings" },
];

export const WPAdminShell = ({
	children,
	siteName = "My WordPress Site",
	plugin,
}: WPAdminShellProps) => {
	return (
		<div className="flex flex-col h-screen">
			{/* Top Bar */}
			<header className="w-full h-8 bg-[#1d2327] flex items-center justify-between px-3 z-50">
				{/* Left: WP logo + site name */}
				<div className="flex items-center gap-4">
					<FaWordpress className="w-5 h-5 text-[#a0a5aa] hover:text-[#00b9eb] cursor-pointer" />
					<span className="text-[13px] font-medium text-[#c3c4c7] hover:text-[#72aee6] cursor-pointer">
						{siteName}
					</span>
				</div>

				{/* Right: notifications + user */}
				<div className="flex items-center gap-3">
					<Dashicon
						icon="bell"
						size={16}
						className="text-[#a0a5aa] hover:text-[#00b9eb] cursor-pointer"
					/>
					<div className="flex items-center gap-2 cursor-pointer">
						<span className="text-[13px] font-medium text-[#c3c4c7] hover:text-[#72aee6]">
							Howdy, Admin
						</span>
						<div className="w-6 h-6 rounded-full bg-[#50575e]" />
					</div>
				</div>
			</header>

			<div className="flex flex-1 min-h-0">
				{/* Sidebar */}
				<aside className="w-[160px] bg-[#1d2327] shrink-0 flex flex-col">
					<nav className="py-2 flex-1 overflow-y-auto">
						{MENU_ITEMS.map((item) => (
							<div
								key={item.label}
								className={`flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors ${
									item.active
										? "bg-[#2271b1] text-white"
										: "text-[#c3c4c7] hover:text-white hover:bg-[#2c3338]"
								}`}
							>
								<Dashicon icon={item.icon} size={18} />
								<span className="text-[13px] font-medium">{item.label}</span>
							</div>
						))}

						{/* Plugin section with submenu */}
						{plugin && (
							<>
								{/* Separator */}
								<div className="my-2 border-t border-[#3c4349]" />

								{/* Plugin parent item */}
								<div
									className={`flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors ${
										plugin.active
											? "bg-[#2271b1] text-white"
											: "text-[#c3c4c7] hover:text-white hover:bg-[#2c3338]"
									}`}
								>
									<Dashicon icon={plugin.icon} size={18} />
									<span className="text-[13px] font-medium">{plugin.label}</span>
								</div>

								{/* Plugin submenu items */}
								<div className="bg-[#2c3338]">
									{plugin.items.map((subItem) => (
										<div
											key={subItem.label}
											className={`pl-9 pr-3 py-1.5 cursor-pointer transition-colors ${
												subItem.active
													? "text-white"
													: "text-[#c3c4c7] hover:text-[#72aee6]"
											}`}
										>
											<span className="text-[13px]">{subItem.label}</span>
										</div>
									))}
								</div>
							</>
						)}
					</nav>
				</aside>

				{/* Main Content */}
				<main className="flex-1 min-w-0 overflow-auto">{children}</main>
			</div>
		</div>
	);
};
