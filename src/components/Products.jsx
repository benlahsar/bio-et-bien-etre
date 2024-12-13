import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import api from "../api/auth";
import RecommendedProducts from "./Recommended";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await api.get(`/api/products/${id}`);
  //       setProduct(response.data);
  //     } catch (err) {
  //       setError(err.response?.data?.message || "An error occurred");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const updateQuantity = (change) => {
    setQuantity((prev) => {
      const newQuantity = prev + change;
      return newQuantity > 0 && newQuantity <= product.quantity
        ? newQuantity
        : prev;
    });
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <Loader2 className="animate-spin text-blue-500" size={48} />
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <Card className="w-96 border-red-500">
  //         <CardHeader className="bg-red-50 border-b border-red-200">
  //           <div className="flex items-center text-red-600">
  //             <AlertTriangle className="mr-2" />
  //             <span className="font-semibold">Error Loading Product</span>
  //           </div>
  //         </CardHeader>
  //         <CardContent className="p-4">
  //           <p className="text-red-700">{error}</p>
  //         </CardContent>
  //       </Card>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 font-sans mt-20">
        <Card className="grid md:grid-cols-2 gap-8 shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={'https://res.cloudinary.com/du9af99hf/image/upload/v1733744462/assets/images/product_images/f8pyny7bqj973xngigwy.webp'}
              alt={'jhkjhkj'}
              className="w-full h-[500px] object-cover"
            />
            {50 <= 5 && (
              <Badge variant="destructive" className="absolute top-4 right-4">
                Low Stock
              </Badge>
            )}
          </div>
          <CardContent className="space-y-6 p-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Huile Essentielle d'Argan
              </h1>
              <p className="text-gray-600 text-lg mt-2">
                Huile précieuse extraite des noix d'arganier, riche en antioxydants et en vitamine E. Idéale pour la peau, les cheveux et les ongles.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {120} DH
                </p>
                <p className="text-gray-500 mt-1">
                  In Stock: {50}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(-1)}
                    disabled={quantity <= 1}
                    className="w-10 h-10"
                  >
                    -
                  </Button>
                  <span className="px-4 font-semibold text-lg">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(1)}
                    disabled={quantity >= 300}
                    className="w-10 h-10"
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  disabled={300 === 0}
                  className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <RecommendedProducts />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
