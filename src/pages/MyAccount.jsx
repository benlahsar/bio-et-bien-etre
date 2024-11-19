import DashBoardSideBar from "../components/DashBoardSideBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyAccount() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <DashBoardSideBar />
        <div className="w-full h-screen mt-16">
          <h1 className="text-3xl font-bold mb-6">My Account</h1>

          {/* Profile Section */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="example@email.com"
                />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Save Changes
              </button>
            </form>
          </div>

          {/* Order History Section */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Order History</h2>
            <ul className="space-y-4">
              <li className="border-b pb-4">
                <div className="flex justify-between">
                  <span>Order #12345</span>
                  <span className="text-gray-500">Date: 2023-01-01</span>
                </div>
                <div className="text-right mt-2">
                  <button className="text-blue-500 hover:underline">
                    View Details
                  </button>
                </div>
              </li>
              <li className="border-b pb-4">
                <div className="flex justify-between">
                  <span>Order #12344</span>
                  <span className="text-gray-500">Date: 2023-01-10</span>
                </div>
                <div className="text-right mt-2">
                  <button className="text-blue-500 hover:underline">
                    View Details
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* Address Book Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Address Book</h2>
            <ul className="space-y-4">
              <li className="border p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Home Address</p>
                    <p>123 Main St, Cityville, CA 12345</p>
                  </div>
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                </div>
              </li>
              <li className="border p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Work Address</p>
                    <p>456 Business Rd, Metropolis, NY 67890</p>
                  </div>
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
