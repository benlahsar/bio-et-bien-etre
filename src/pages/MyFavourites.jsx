import DashBoardSideBar from "../components/DashBoardSideBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function MyFavourites() {
  const favoriteItems = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex">
        <DashBoardSideBar />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-20 xl h-screen mt-16">
          <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favoriteItems.map((item) => (
              <div key={item.id} className="bg-white shadow rounded-lg p-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
                <button
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                  onClick={() =>
                    console.log(`Removing item ${item.id} from favorites`)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
