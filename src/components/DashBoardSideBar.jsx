import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

  return (
    <aside className="w-1/6 bg-white border border-black p-3 mr-10 mt-16">
      <h1 className="font-['Sacramento'] text-4xl underline mb-4">
        Dashboard Sidebar
      </h1>
      <div
        className={`${
          activeIndex === 0 ? "bg-blue-500 text-white" : ""
        } p-2 cursor-pointer`}
        onClick={() => handleNavigation(0, "/account")}
      >
        My account
      </div>
      <div
        className={`${
          activeIndex === 1 ? "bg-yellow-500 text-white" : ""
        } p-2 cursor-pointer`}
        onClick={() => handleNavigation(1, "/favorite")}
      >
        My Favorites
      </div>
      <div
        className={`${
          activeIndex === 2 ? "bg-orange-500 text-white" : ""
        } p-2 cursor-pointer`}
        onClick={() => handleNavigation(2, "/cart")}
      >
        My Cart
      </div>
      <div
        className={`${
          activeIndex === 3 ? "bg-destructive text-white" : "bg-white text-destructive"
        } p-2 cursor-pointer`}
        onClick={() => handleNavigation(3, "")}
      >
        Logout
      </div>
    </aside>
  );
}
