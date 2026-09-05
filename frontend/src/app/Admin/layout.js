"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBriefcase, FiStar, FiMail } from "react-icons/fi";
import "./admin.css";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/Admin", icon: <FiHome /> },
    { name: "Main Projects", href: "/Admin/main-projects", icon: <FiBriefcase /> },
    { name: "More Projects", href: "/Admin/more-projects", icon: <FiBriefcase /> },
    { name: "Hero", href: "/Admin/hero", icon: <FiStar /> },
    { name: "Skills", href: "/Admin/skills", icon: <FiStar /> },
    { name: "Contacts", href: "/Admin/contacts", icon: <FiMail /> },
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">Admin Panel</div>
        <nav className="admin-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/Admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`admin-nav-item ${isActive ? "active" : ""}`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
