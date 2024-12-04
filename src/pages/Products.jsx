import Footer from "../components/Footer";
import ListProduits from "../components/ListProduitsHuiles";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sideba";

export default function Products() {
  return (
    <>
    <Navbar />
    <div className="flex justify-evenly">
        <Sidebar />
        <ListProduits />
    </div>
    <Footer />
    </>
  );
}