import Categorie from "../components/category";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section_1 from "../components/Section_1";
import Section_2 from "../components/Section_2";
import WaterSection from "./TestimonialSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section_1 />
      <Section_2 />
      <Categorie />
      <WaterSection />
      <Footer />
    </>
  );
}

