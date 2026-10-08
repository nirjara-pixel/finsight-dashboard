import {
  LayoutDashboard,
  Receipt,
  BarChart3,
  Users,
  Settings,
  WalletCards,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Transactions", icon: Receipt, path: "/transactions" },
  { name: "Analytics", icon: BarChart3, path: "/analytics" },
  { name: "Customers", icon: Users, path: "/customers" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <WalletCards size={22} />
        </div>

        <span>FinSight</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <p>Finance & Analytics</p>
        <span>v1.0.0</span>
      </div>
    </aside>
  );
}

export default Sidebar;