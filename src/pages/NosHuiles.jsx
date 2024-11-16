import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";

export default function NosHuiles() {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    return (<>
        <Navbar />
        <div className="flex mt-16">
            <Sidebar minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
            <ProductGrid minPrice={minPrice} maxPrice={maxPrice} />
        </div>
    </>
    );
}