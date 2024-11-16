import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";

export default function NosHuiles() {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    return (
        <div className="flex">
            <Sidebar minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
            <ProductGrid minPrice={minPrice} maxPrice={maxPrice} />
        </div>
    );
}