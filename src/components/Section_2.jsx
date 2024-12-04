import styled from "styled-components";
// import maroc from 'src/assets/images/maroc.png';
// import huile_essentielle from 'src/assets/images/huile_essentielle.png';
// import garantie from 'src/assets/images/garantie.png';
import React from 'react';

export default function Section_2() {

  const InformContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    padding: 50px;

    @media (max-width: 1080px) {
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
      font-size:2rem;
    }

    @media (max-width: 720px) {
      flex-direction: column;
      padding: 10px;
      margin-top: 30px;
      align-items:center;
    }
  `;

  const InformContent = styled.div`
    width: 25%;
    text-align: center;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1080px) {
      width: 30%;
    }

    @media (max-width: 720px) {
      width: 80%;
    }

    @media (max-width: 470px) {
      width: 90%;
    }
  `;

  const InformImage = styled.div`
    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      margin-bottom: 20px;

      @media (max-width: 720px) {
        width: 80px;
        height: 80px;
      }

      @media (max-width: 470px) {
        width: 70px;
        height: 70px;
      }
    }
  `;

  const InformText = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: #333;

    @media (max-width: 1080px) {
      font-size: 0.95rem;
    }

    @media (max-width: 720px) {
      font-size: 01.3rem;
    }

    @media (max-width: 470px) {
      font-size: 1.2rem;
    }
  `;

  const MainText = styled.div`
    text-align: center;
    font-size: 1.2rem;
    margin: 20px 0;
    padding: 0 20px;

    @media (max-width: 720px) {
      font-size: 1.3rem;
    }

    @media (max-width: 470px) {
      font-size: 1.3rem;
    }
  `;

  return (
    <div>
      <MainText>
        Découvrez notre site, où chaque produit est une garantie de qualité et d'authenticité, 100 % marocain, conçu pour répondre à vos besoins essentiels avec fiabilité et excellence.
      </MainText>

      <InformContainer>
        <InformContent>
          <InformImage>
            <img src={"src/assets/images/huile_essentielle.png"} alt="Huile essentielle" />
          </InformImage>
          <InformText>
            Huiles essentielles bio, soigneusement sélectionnées pour votre bien-être.
          </InformText>
        </InformContent>

        <InformContent>
          <InformImage>
            <img src={"src/assets/images/garantie.png"} alt="Produit Garantie" />
          </InformImage>
          <InformText>
            Garantie de qualité pour des produits naturels et écoresponsables.
          </InformText>
        </InformContent>

        <InformContent>
          <InformImage>
            <img src={"src/assets/images/maroc.png"} alt="Drapeau Maroc" />
          </InformImage>
          <InformText>
            Entreprise marocaine dynamique et flexible, à votre service et à votre écoute !
          </InformText>
        </InformContent>
      </InformContainer>
    </div>
  );
}
