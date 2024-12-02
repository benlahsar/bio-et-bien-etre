import Categorie from "../components/category";
import Navbar from "../components/Navbar";
import Section_1 from "../components/Section_1";
import Section_2 from "../components/Section_2";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section_1 />
      <Section_2 />
      <Categorie />
    </>
  );
}

