import DashBoardSideBar from "../components/DashBoardSideBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyFavourites() {
  const favoriteItems = [
    {
      id: 1,
      name: "Lavender Essential Oil",
      price: 29.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Rosehip Oil",
      price: 49.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Tea Tree Oil",
      price: 19.99,
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
        <DashBoardSideBar />
        <main className="w-full lg:w-4/5 p-8 mt-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">My Favorites</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h2 className="text-lg font-medium text-gray-800 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <button
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  onClick={() =>
                    console.log(`Removing item ${item.id} from favorites`)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
