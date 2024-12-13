import React, { useState } from "react";
import Footer from "../components/Footer";
import ListProduits from "../components/ListProduitsHuiles";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sideba";
import { Menu } from "lucide-react";

export default function Products() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Toggle button for small and medium devices */}
        {/* <button
          onClick={toggleSidebar}
          className="fixed top-24 left-4 w-20 md:hidden bg-amber-600 text-white p-2 rounded z-50 flex shadow-md shadow-amber-700/50"
        >
          <Menu /> Menu
        </button>
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} /> */}
        {/* Main Content */}
        <div className="flex-1">
          <ListProduits />
        </div>
      </div>
      <Footer />
    </>
  );
}
