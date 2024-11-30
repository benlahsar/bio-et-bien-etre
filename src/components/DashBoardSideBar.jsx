import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";

export default function DashBoardSideBar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Set activeIndex based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case "/account":
        setActiveIndex(0);
        break;
      case "/favorite":
        setActiveIndex(1);
        break;
      case "/cart":
        setActiveIndex(2);
        break;
      default:
        setActiveIndex(null);
    }
  }, [location.pathname]);

  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  const menuItems = [
    { id: 0, label: "My Account", path: "/account", icon: <FaUser /> },
    { id: 1, label: "My Favorites", path: "/favorite", icon: <FaHeart /> },
    { id: 2, label: "My Cart", path: "/cart", icon: <FaShoppingCart /> },
    { id: 3, label: "Logout", path: "", icon: <FaSignOutAlt /> },
  ];

  return (
    <aside className="w-1/5 bg-white shadow-lg rounded-lg p-6 mt-20">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Dashboard
      </h1>
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-4 p-3 rounded-lg text-lg cursor-pointer transition-all duration-300 ${
              activeIndex === item.id
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => handleNavigation(item.id, item.path)}
          >
            <div className="text-2xl">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
