import { Search, Bell, UserCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const pageInfo = {
    "/": {
      title: "Dashboard",
      description: "Welcome back! Here's your financial overview.",
    },
    "/transactions": {
      title: "Transactions",
      description: "Manage and monitor all financial transactions.",
    },
    "/analytics": {
      title: "Analytics",
      description: "Track your financial performance and trends.",
    },
    "/customers": {
      title: "Customers",
      description: "Manage and monitor your customer base.",
    },
    "/settings": {
      title: "Settings",
      description: "Manage your account and application preferences.",
    },
  };

  const currentPage = pageInfo[location.pathname] || pageInfo["/"];

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h2>{currentPage.title}</h2>
        <p>{currentPage.description}</p>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>

        <button className="icon-button">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile">
          <UserCircle size={34} />

          <div>
            <strong>Nirjara Jain</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;