import { WPAdminShell } from "./components/admin/WPAdminShell";

export default function Home() {
  return (
    <WPAdminShell
      siteName="My Plugin Demo"
      plugin={{
        icon: "admin-generic",
        label: "My Plugin",
        active: true,
        items: [
          { label: "Dashboard", active: true },
          { label: "Settings" },
          { label: "Analytics" },
        ],
      }}
    >
      {/* Empty content area - WordPress admin style background */}
      <div className="bg-[#f0f0f1] h-full p-5">
        <h1 className="text-2xl font-semibold text-[#1d2327]">
          Plugin Page Content
        </h1>
        <p className="mt-2 text-[#50575e]">
          Your plugin content goes here.
        </p>
      </div>
    </WPAdminShell>
  );
}
