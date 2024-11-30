// import React from "react";
// import styled from "styled-components";
// import BioHuile1 from './assets/BioHuile1.webp';

// export default function Section_1() {
//   const BigContainer = styled.div`
//     width: 100%;
//     background-color: #eff5f2;
//     height: 100vh;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: nowrap;
//     margin: 0;

//     @media (max-width: 768px) {
//       flex-direction: column;
//       height: auto;
//       padding: 20px;
//     }
//   `;

//   const ImageContainer = styled.div`
//     width: 50%;
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-left: 10px;

//     img {
//       width: 100%;
//       max-width: 800px;
//       height: 660px;
//       min-width: 200px;
//       padding-left: 10px;
//       border-radius: 90%;
//       clip-path: ellipse(43% 60%);
//       clip-path: inset(20px 20px);
//       object-fit: cover;
//     }

//     &::after {
//       content: '';
//       position: absolute; 
//       top: 70%; 
//       left: 96.4%; 
//       width: 130px;
//       height: 31%;
//       // min-width: 120px;
//       // max-width: 500px;
//       opacity: 0.7; 
//       transform: translate(-50%, -50%); /* Pour centrer précisément */
      
//       background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="156.497" height="244.156" viewBox="0 0 156.497 244.156"><path id="Trac%C3%83%C2%A9_53080" data-name="Trac%C3%83%C2%A9 53080" d="M78.165-20.629c37.543,89.5,77.95,116.8,78.4,165.785s-39.281,78.8-78.4,78.366S.552,190.4.079,143.4,42.449,71.048,78.165-20.629Z" transform="translate(-0.075 20.629)" fill="%2366c48e" style="mix-blend-mode: multiply;isolation: isolate"/></svg>');
//       background-size: cover;
//       background-repeat: no-repeat;
//       background-position: center;
//     }

//     @media (max-width: 768px) {
//       width: 100%;
//       margin-bottom: 20px;
//     }
//   `;

//   const ContentL = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     width: 50%;
//     padding: 30px;

//     @media (max-width: 768px) {
//       width: 100%;
//       text-align: center;
//       padding: 10px;
//     }
//   `;

//   const Titre = styled.h1`
//     color: green;
//     margin-bottom: 10px;

//     @media (max-width: 768px) {
//       font-size: 24px;
//     }
//   `;

//   const Bienvenue = styled.div`
//     color: #3ab83c;
//     font-family: 'Brush Script MT', cursive;
//     font-size: 50px;

//     @media (max-width: 768px) {
//       font-size: 28px;
//     }
//   `;

//   const Bio = styled.span`
//     font-family: 'Brush Script MT', cursive;
//     font-weight: bold;
//     font-size: 30px;
//     margin: 0 10px;
//     padding: 0;
//     display: inline;
//     color: #3ab83c;
//   `;

//   const NosBtn = styled.button`
//     width: 200px;
//     height: 40px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: nowrap;
//     margin: 10px auto;
//     background-color: #3ab83c;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;

//     &:hover {
//       background-color: #2a8a2b;
//     }

//     @media (max-width: 768px) {
//       width: 150px;
//     }
//   `;

//   const NosHuiles = () => {
//     window.location.href = 'https://www.google.com/search?client=firefox-b-d&q=nizar+baraka';
//   };

//   return (
//     <BigContainer>
//       <ImageContainer>
//         <img src={BioHuile1} alt="Huiles_Bio_et_Bien_Etre" />
//       </ImageContainer>
//       <ContentL>
//         <Titre>Bio et Bien Être, les Huiles Que je préfère</Titre>
//         <Bienvenue>
//           Bienvenue dans le monde des huiles essentielles bio de qualité ! 🌿✨
//         </Bienvenue>
//         <p>
//           Découvrez notre sélection des meilleures huiles bio pour votre bien-être.
//         </p>
//         <p>
//           Chez <Bio>Bio et Bien Etre</Bio>, nous sommes ravis de vous accueillir dans
//           notre boutique dédiée à votre bien-être et à la nature. Découvrez une
//           sélection exceptionnelle d’huiles essentielles 100 % bio, soigneusement
//           choisies pour vous offrir le meilleur de la nature.
//         </p>
//         <p>🌟 Pourquoi nous choisir ?</p>
//         <ul style={{listStyle:'none'}}>
//           <li>- Produits certifiés biologiques et écoresponsables.</li>
//           <li>- Bienfaits naturels pour votre corps, esprit et maison.</li>
//           <li>- Service client passionné et à votre écoute.</li>
//         </ul>
//         <p>
//           👉 Explorez nos produits dès aujourd’hui et faites le plein de bien-être !
//           Bienvenue dans cette belle aventure, et merci de nous faire confiance ! 🛍️💚
//         </p>
//         <NosBtn onClick={NosHuiles}>Découvrez Nos Huiles</NosBtn>
//       </ContentL>
//     </BigContainer>
//   );
// }

import React from "react";
import styled from "styled-components";
import BioHuile1 from './assets/BioHuile1.webp';

export default function Section_1() {
  const BigContainer = styled.div`
    width: 100%;
    background-color: #eff5f2;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0;
    padding: 20px;

    @media (max-width: 1024px) {
      height: auto;
      flex-direction: column;
    }

    @media (max-width: 768px) {
      padding: 10px;
    }
  `;

  const ImageContainer = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 600px;
      height: auto;
      border-radius: 80%;
      clip-path: ellipse(70% 70%);
      clip-path: inset(10px 30px);
      object-fit: cover;

      @media (max-width: 768px) {
        max-width: 400px;
        margin-bottom: 20px;
      }

      @media (max-width: 480px) {
        max-width: 250px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 70%; 
      left: 96.1%;
      width: 160px;
      height: 220px;
      opacity: 0.6;
      transform: translate(-50%, -50%);
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="156.497" height="244.156" viewBox="0 0 156.497 244.156"><path id="Trac%C3%83%C2%A9_53080" data-name="Trac%C3%83%C2%A9 53080" d="M78.165-20.629c37.543,89.5,77.95,116.8,78.4,165.785s-39.281,78.8-78.4,78.366S.552,190.4.079,143.4,42.449,71.048,78.165-20.629Z" transform="translate(-0.075 20.629)" fill="%2366c48e" style="mix-blend-mode: multiply;isolation: isolate"/></svg>');
      background-size: contain;
      background-repeat: no-repeat;

      @media (max-width: 768px) {
        width: 70px;
        height:100px;
        left:92%;
        top:70%;
        background-size: contain;

      }

      @media (max-width: 480px) {

        left:86.1%;
        top:74%;
        width:43px;
        height:66px;
        background-size: contain;
      }
    }
  `;

  const ContentL = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;

    @media (max-width: 1024px) {
      width: 100%;
      padding: 20px;
      text-align: center;
    }

    @media (max-width: 768px) {
      padding: 10px;
    }
  `;

  const Titre = styled.h1`
    color: green;
    font-size: 2.5rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  `;

  const Bienvenue = styled.div`
    color: #3ab83c;
    font-family: 'Brush Script MT', cursive;
    font-size: 2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.7rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  `;

  const Bio = styled.span`
    font-family: 'Brush Script MT', cursive;
    font-weight: bold;
    font-size: 1.8rem;
    color: #3ab83c;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  `;

  const NosBtn = styled.button`
    width: 200px;
    height: 40px;
    margin: 20px auto;
    background-color: #3ab83c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #2a8a2b;
    }

    @media (max-width: 768px) {
      width: 150px;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      width: 120px;
      width: auto;
      font-size: 0.8rem;
    }
  `;

  const NosHuiles = () => {
    window.location.href = 'https://www.google.com/search?client=firefox-b-d&q=nizar+baraka';
  };

  return (
    <BigContainer>
      <ImageContainer>
        <img src={BioHuile1} alt="Huiles Bio et Bien Etre" />
      </ImageContainer>
      <ContentL>
        <Titre>Bio et Bien Être, les Huiles Que je préfère</Titre>
        <Bienvenue>
          Bienvenue dans le monde des huiles essentielles bio de qualité ! 🌿✨
        </Bienvenue>
        <p>
          Découvrez notre sélection des meilleures huiles bio pour votre bien-être.
        </p>
        <p>
          Chez <Bio>Bio et Bien Etre</Bio>, nous sommes ravis de vous accueillir dans
          notre boutique dédiée à votre bien-être et à la nature.
        </p>
        <ul style={{ listStyle: 'none' }}>
          <li>- Produits certifiés biologiques et écoresponsables.</li>
          <li>- Bienfaits naturels pour votre corps, esprit et maison.</li>
          <li>- Service client passionné et à votre écoute.</li>
        </ul>
        <p>👉 Explorez nos produits dès aujourd’hui et faites le plein de bien-être !</p>
        <NosBtn onClick={NosHuiles}>Découvrez Nos Huiles</NosBtn>
      </ContentL>
    </BigContainer>
  );
}
