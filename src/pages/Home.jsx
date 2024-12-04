import Categorie from "../components/category";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Offers from "../components/Offerts";
import Section_1 from "../components/Section_1";
import Section_2 from "../components/Section_2";
import NavbarWithCart from "./NavBar";
import WaterSection from "./TestimonialSection";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <NavbarWithCart /> */}
      <Section_1 />
      <Section_2 />
      <Categorie />
      <WaterSection />
      <Offers />
      <Footer />
    </>
  );
}

