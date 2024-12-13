import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../api/auth";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Lavender Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744485/assets/images/product_images/wb8mqysdjdw4rjc5vgty.webp",
    price: 12.99,
  },
  {
    id: 2,
    name: "Peppermint Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744462/assets/images/product_images/f8pyny7bqj973xngigwy.webp",
    price: 10.99,
  },
  {
    id: 3,
    name: "Tea Tree Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744461/assets/images/product_images/hul6yle5moz7yvvcrzbt.jpg",
    price: 9.99,
  },
  {
    id: 4,
    name: "Eucalyptus Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744459/assets/images/product_images/p55bmlsike85zowwzdkf.webp",
    price: 11.99,
  },
  {
    id: 5,
    name: "Lemon Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744458/assets/images/product_images/lapevbpigrqqemy6uss7.webp",
    price: 8.99,
  },
  {
    id: 6,
    name: "Rosemary Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744456/assets/images/product_images/hawzehyits9ig63zv7gp.webp",
    price: 13.99,
  },
  {
    id: 7,
    name: "Frankincense Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744456/assets/images/product_images/cxdbtniyv1xirapp0zvm.webp",
    price: 14.99,
  },
  {
    id: 8,
    name: "Orange Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744455/assets/images/product_images/sol0nmsuy8gw8u2j4km7.webp",
    price: 7.99,
  },
  {
    id: 9,
    name: "Ylang Ylang Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744454/assets/images/product_images/jdirdxkfunopndattzdz.webp",
    price: 15.99,
  },
  {
    id: 10,
    name: "Geranium Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744452/assets/images/product_images/vsuddzsfgicnsiqomxig.webp",
    price: 13.49,
  },
  {
    id: 11,
    name: "Chamomile Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744450/assets/images/product_images/kaci5fzoj6mwc2npsrsg.webp",
    price: 16.99,
  },
  {
    id: 12,
    name: "Clove Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744449/assets/images/product_images/fy9spvqgmxog04q5pfcp.webp",
    price: 9.49,
  },
  {
    id: 13,
    name: "Basil Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744446/assets/images/product_images/vugim98qpot0o8hupa8v.jpg",
    price: 12.49,
  },
  {
    id: 14,
    name: "Cedarwood Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744445/assets/images/product_images/p8cfy5ube4dm6uvzynxa.webp",
    price: 10.49,
  },
  {
    id: 15,
    name: "Patchouli Essential Oil",
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744444/assets/images/product_images/ijkjxocsvauflobluk9v.webp",
    price: 11.49,
  },
];


const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

const Titre = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const AffProduit = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem; /* Larger gaps for larger screens */
  }
`;

const CartProduit = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ImageProduit = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const HoverBtn = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CartProduit}:hover & {
    opacity: 1;
  }
`;

const Ajouter_panier = styled.button`
  background-color: white;
  color: #1a202c;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #e2e8f0;
    transform: scale(1.1);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const ProduitContainer = styled.div`
  padding: 1rem;
`;

const NomProduit = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Prix = styled.p`
  color: #4a5568;
  font-weight: bold;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: ${(props) => (props.active ? "#e2e8f0" : "white")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover:not(:disabled) {
    background-color: #e2e8f0;
  }
`;

export default function ListProduits() {
  // const [products, setProducts] = useState([]);
  const [pageAcc, setPageAcc] = useState(1);
  const navigate = useNavigate();
  const produitsEnPage = 8;
  const nbrPages = Math.ceil(products.length / produitsEnPage);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // const addToCart = async (product) => {
  //   try {
  //     const response = await api.post("/api/cart", {
  //       id: product.id,
  //       name: product.name,
  //       price: product.price,
  //       image: product.image,
  //       quantity: 1,
  //     });
  //     console.log("Added to cart:", response.data);
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //   }
  // };
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const idProduitF = pageAcc * produitsEnPage;
  const idProduitI = idProduitF - produitsEnPage;
  const produitAcc = products.slice(idProduitI, idProduitF);

  const paginate = (numPage) => setPageAcc(numPage);

  return (
    <Container>
      <Titre>Nos Huiles</Titre>
      <AffProduit>
        {produitAcc.map((produit) => (
          <CartProduit key={produit.id} onClick={() => navigate(`/huile-produit`)}>
            <ImageContainer>
              <ImageProduit src={produit.image} alt={produit.name} />
              <HoverBtn>
                <Ajouter_panier onClick={() => handleAddToCart(produit)}>
                  <ShoppingCart size={20} />
                  Add to Cart
                </Ajouter_panier>
              </HoverBtn>
            </ImageContainer>
            <ProduitContainer>
              <NomProduit>{produit.name}</NomProduit>
              <Prix>{produit.price} DH</Prix>
            </ProduitContainer>
          </CartProduit>
        ))}
      </AffProduit>
      {nbrPages > 1 && (
        <PaginationContainer>
          <PaginationButton
            onClick={() => paginate(pageAcc - 1)}
            disabled={pageAcc === 1}
          >
            <ChevronLeft size={20} />
          </PaginationButton>
          {Array.from({ length: nbrPages }, (_, i) => i + 1).map((nbr) => (
            <PaginationButton
              key={nbr}
              onClick={() => paginate(nbr)}
              active={pageAcc === nbr}
            >
              {nbr}
            </PaginationButton>
          ))}
          <PaginationButton
            onClick={() => paginate(pageAcc + 1)}
            disabled={pageAcc === nbrPages}
          >
            <ChevronRight size={20} />
          </PaginationButton>
        </PaginationContainer>
      )}
    </Container>
  );
}
