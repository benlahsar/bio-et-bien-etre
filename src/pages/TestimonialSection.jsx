import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const WaterSection = () => {
  // State pour contrôler quelle série de cartes afficher
  const [startIndex, setStartIndex] = useState(0);
  const cards = [
    {
      description: <p>“Nous souhaitions étoffer notre gamme d'huiles essentielles en proposant à nos clients des produits naturels bio. Après une recherche sur internet, nous avons contacté Voshuiles pour une collaboration avec notre enseigne. Un seul rendez-vous a suffi pour lancer le référencement auprès de notre centrale nationale. Nous avons toujours eu de très bons échanges, ce fournisseur a toujours accepté de nous suivre dans nos mises en avant, nos soirées showroom. L’entreprise a des prix compétitifs et innove .” <br /> Karine</p>,
      iconColor: "text-blue-600",
      bgColor: "bg-gray-200",
    },
    {
      description: <p>“Nous sommes une exploitation laitière de brebis BIO, installée depuis octobre 2022 en Alsace. J'arômatise mes yaourts aux huiles essentielles. J’ai trouvé le grossiste Voshuiles en faisant des recherches sur internet. J'ai passé mes premières commandes seule, en direct sur le site. Puis lorsque mes volumes ont augmenté, j'ai appelé le service commercial pour obtenir des devis. La commerciale m'a bien accompagnée, l'envoi des commandes est rapide et l'emballage est fait pour protéger les produits.”
         <br />Claire</p>,
      iconColor: "text-orange-500",
      bgColor: "bg-gray-200",
    },
    {
      description: <p>“Chaque mois nous recherchons de nouveaux produits de haute qualité, contrôlés et certifiés à faire découvrir à nos abonnés. Je connaissais déjà Voshuiles pour mon usage personnel. Satisfaite de leurs produits, j’ai contacté l’entreprise pour établir avec eux cette super collaboration et créer l’Arôma Box. Toute l’équipe est très réactive et s’investit beaucoup dans notre collaboration. Ils sont toujours présents pour répondre à nos questions.” <br /> Coralie Gonzalès </p>,
      iconColor: "text-green-500",
      bgColor: "bg-gray-200",
    },
    {
      description: <p>“Chaque mois nous recherchons de nouveaux produits de haute qualité, contrôlés et certifiés à faire découvrir à nos abonnés. Je connaissais déjà Voshuiles pour mon usage personnel. Satisfaite de leurs produits, j’ai contacté l’entreprise pour établir avec eux cette super collaboration et créer l’Arôma Box. Toute l’équipe est très réactive et s’investit beaucoup dans notre collaboration. Ils sont toujours présents pour répondre à nos questions.” <br /> Coralie Gonzalès </p>,
      iconColor: "text-yellow-500",
      bgColor: "bg-gray-200",
    },
    {
      description: <p>“Chaque mois nous recherchons de nouveaux produits de haute qualité, contrôlés et certifiés à faire découvrir à nos abonnés. Je connaissais déjà Voshuiles pour mon usage personnel. Satisfaite de leurs produits, j’ai contacté l’entreprise pour établir avec eux cette super collaboration et créer l’Arôma Box. Toute l’équipe est très réactive et s’investit beaucoup dans notre collaboration. Ils sont toujours présents pour répondre à nos questions.” <br /> Coralie Gonzalès </p>,
      iconColor: "text-red-500",
      bgColor: "bg-gray-200",
    },
    {
      description: <p>“Chaque mois nous recherchons de nouveaux produits de haute qualité, contrôlés et certifiés à faire découvrir à nos abonnés. Je connaissais déjà Voshuiles pour mon usage personnel. Satisfaite de leurs produits, j’ai contacté l’entreprise pour établir avec eux cette super collaboration et créer l’Arôma Box. Toute l’équipe est très réactive et s’investit beaucoup dans notre collaboration. Ils sont toujours présents pour répondre à nos questions.” <br /> Coralie Gonzalès </p>,
      iconColor: "text-green-500",
      bgColor: "bg-gray-200",
    },
    // ... autres cartes
  ];

  // Fonction pour afficher la série suivante de cartes
  const showNextCards = () => {
    if (startIndex + 3 < cards.length) {
      setStartIndex(startIndex + 3);
    }
  };

  // Fonction pour afficher la série précédente de cartes
  const showPrevCards = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <div className="bg-gray-100 container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-black-600 text-3xl font-semibold">CE QUE DISENT NOS CLIENTS DE NOUS</h1>
      </div>

      {/* Cartes visibles */}
      <div className="flex flex-wrap justify-center gap-6">
        {cards.slice(startIndex, startIndex + 3).map((card, index) => (
          <div key={index} className="w-80 h-auto flex flex-col items-center justify-between">
            <div className={`p-6 rounded-full shadow-lg ${card.bgColor} border-2 border-gray-300`}>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white">
                  <FontAwesomeIcon icon={faDroplet} className={`${card.iconColor} text-4xl`} />
                </div>
              </div>

              {/* Description avec une taille de texte plus lisible */}
              <p className="text-center mt-2 italic text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Boutons de navigation */}
      <div className="flex justify-center mt-8">
        <button
          onClick={showPrevCards}
          className="bg-gray-300 text-black p-2 rounded-l-lg hover:bg-gray-400"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={showNextCards}
          className="bg-gray-300 text-black p-2 rounded-r-lg hover:bg-gray-400"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default WaterSection;
