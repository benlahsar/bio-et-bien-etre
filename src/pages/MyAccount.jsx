import { useEffect, useState } from "react";
import DashBoardSideBar from "../components/DashBoardSideBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import api from "../api/auth";
import { Pencil } from "lucide-react";

export default function MyAccount() {
  const [user, serUser] = useState(null);

  async function getUser() {
    const { data } = await api.get("/api/user");
    serUser(data);
  }
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
        <DashBoardSideBar />
        <main className="w-full lg:w-4/5 p-8 mt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">My Account</h1>

          {/* Profile Section */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Profile Information
            </h2>
            <form className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-gray-600 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-300 focus:outline-none"
                  placeholder="John Doe"
                  value={user?.first_name}
                  readOnly
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-300 focus:outline-none"
                  placeholder="John Doe"
                  value={user?.last_name}
                  readOnly
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-300 focus:outline-none"
                  placeholder="example@email.com"
                  value={user?.email}
                  readOnly
                  disabled
                />
              </div>
              <div className="col-span-full">
                <button className="flex w-full md:w-auto bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
                  Edit<Pencil className="ml-6 h-6" size={20}/>
                </button>
              </div>
            </form>
          </section>

          {/* Order History Section */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Order History
            </h2>
            <ul className="space-y-6">
              {[12345, 12344].map((orderId) => (
                <li key={orderId} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-800 font-medium">
                        Order #{orderId}
                      </p>
                      <p className="text-sm text-gray-500">Date: 2023-01-01</p>
                    </div>
                    <button className="text-green-500 hover:underline">
                      View Details
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Address Book Section */}
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Address Book
            </h2>
            <ul className="space-y-6">
                <li className="border p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">Adresse</p>
                      <p className="text-gray-600">
                        {user?.address}
                      </p>
                    </div>
                    <button className="text-green-500 hover:underline">
                      Edit
                    </button>
                  </div>
                </li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
