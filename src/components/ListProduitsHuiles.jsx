

import React, { useState } from 'react';
import styled from 'styled-components';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

import Thrive from './assets/Thrive.avif';
import Mearom from './assets/Mearom.jpg'
import NatureEsoin from './assets/NatureEsoin.jpg'
import Now_essential_oils from './assets/Now_essential_oils.jpg'
import Saje from './assets/Saje.avif'
import Tea_Tree_Oil from './assets/Tea_Tree_Oil.avif'
import The_Ordinary from './assets/The_Ordinary.avif'
import Sijaco from './assets/Sijaco.webp'
import Lavender from './assets/Lavender.avif'
import Pranarom from './assets/Pranarom.webp'
import Aroma_zone from './assets/Aroma_zone.avif'
import BasilicTropical from './assets/BasilicTropical.jpg'
import Citronnele from './assets/Citronnele.jpg'
import Fleur_orange from './assets/Fleur_orange.jpg'
import Houssance from './assets/Houssance.avif'
import HuileVanille from './assets/HuileVanille.webp'
import Jasmin from './assets/Jasmin.webp'
import Puressentielle from './assets/Puressentielle.jpg'
import Test_svg from './assets/Test_svg.svg'


const products = [
  { id: 1, name: "Thrive", price: 150, image: Thrive },
  { id: 2, name: "Mearom", price: 80, image: Mearom },
  { id: 3, name: "Nature Et soin", price: 200, image: NatureEsoin },
  { id: 4, name: "Now Essential Oils", price: 120, image: Now_essential_oils },
  { id: 5, name: "Saje", price: 100, image: Saje },
  { id: 6, name: "Basilic Tropical", price: 180, image: BasilicTropical},
  { id: 7, name: "Citronnele", price: 160, image: Citronnele },
  { id: 8, name: "Fleur d'Orange", price: 220, image: Fleur_orange },
  { id: 9, name: "Houssance", price: 90, image: Houssance },
  { id: 10, name: "Huile En Vanille", price: 250, image: HuileVanille },
  { id: 11, name: "Jasmin", price: 70, image: Jasmin },
  { id: 12, name: "Puressentielle", price: 110, image: Puressentielle },
  { id: 13, name: "Test", price: 110, image: Test_svg },
];

const Container = styled.div`
  max-width: 1200px;
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
  background-size: contain; 
  //background-color:lightgray;

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
  margin: 0; 
  background-color: ${(props) => (props.active ? '#e2e8f0' : 'white')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover:not(:disabled) {
    background-color: #e2e8f0;
  }
`;


export default function ListProduits() {
    const [PageAcc, setPageAcc] = useState(1);
    const ProduitsEnPage = 8;
    const nbrPages = Math.ceil(products.length / ProduitsEnPage);
  
    const idProduitF = PageAcc * ProduitsEnPage;
    const idProduitI = idProduitF - ProduitsEnPage;
    const produitAcc = products.slice(idProduitI, idProduitF);
  
    const paginate = (NumPage) => setPageAcc(NumPage);
  
    return (
      <Container>
        <Titre> Nos Huiles</Titre>
        <AffProduit>
          {produitAcc.map((produit) => (
            <CartProduit key={produit.id}>
              <ImageContainer>
                <ImageProduit src={produit.image} alt={produit.name} />
                <HoverBtn>
                  <Ajouter_panier>
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
              onClick={() => paginate(PageAcc - 1)}
              disabled={PageAcc === 1}
            >
              <ChevronLeft size={20} />
            </PaginationButton>
            {Array.from({ length: nbrPages }, (_, i) => i + 1).map((nbr) => (
              <PaginationButton
                key={nbr}
                onClick={() => paginate(nbr)}
                active={PageAcc === nbr}
              >
                {nbr}
              </PaginationButton>
            ))}

            <PaginationButton
              onClick={() => paginate(PageAcc + 1)}
              disabled={PageAcc === nbrPages}
            >
              <ChevronRight size={20} />
            </PaginationButton>
          </PaginationContainer>
        )}
      </Container>
    );
  }