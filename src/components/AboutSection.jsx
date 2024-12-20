// src/App.jsx
import React from "react";

const AboutSection = () => {
  return (
    <div className="font-sans text-gray-800 bg-[#e2e4d3e1]">
      {/* Header Section */}
      <section className="bg-white py-12">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-[#13683d]">MISSION & VALUEURS</h2>
          <p className="mt-2 text-lg font-mono text-gray-600">Nos principauc piliers</p>
        </div>
        <div className="flex justify-center gap-8 mt-8">
          {[
            { icon: "🌱", title: "Conscience Sociale" },
            { icon: "🌍", title: "Durabilité" },
            { icon: "🏘️", title: "Amélioration de la communauté" },
            { icon: "💎", title: "Impact Social Positive " },
            { icon: "⚖️", title: "Commerce équitable" },
          ].map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl">{pillar.icon}</div>
              <p className="mt-2  font-light text-[#2b4421e8]">{pillar.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-[#13683d]">Naturel</h3>
            <p>
            Ici, chez <b>Bio & Bien-être</b>, nous croyons fermement que la nature détient le secret d'une vie saine et équilibrée. C'est pourquoi nous nous sommes engagés à créer des huiles biologiques de la plus haute qualité, qui nourrissent votre corps et votre esprit.
            </p>
            <p>
            C'est pourquoi nous nous engageons avec passion à créer des huiles biologiques de la plus haute qualité, extraites de plantes soigneusement sélectionnées et cultivées selon des pratiques durables. Ces huiles, riches en bienfaits, sont conçues pour nourrir à la fois votre corps et votre esprit, en rétablissant l'équilibre naturel de votre peau, tout en apportant une sensation de bien-être profond. Nous mettons un point d'honneur à offrir des produits qui respectent l'environnement et qui favorisent un mode de vie sain, tout en préservant l'harmonie avec la nature.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/474x/25/55/ab/2555ab6a059dd15bcb4c969de2e7abb1.jpg"
              alt="Team"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Sourcing & Partnership Section */}
      <section className="py-12 bg-[#e5eac6]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/474x/7d/52/e0/7d52e04a70739990adb72f84b96bcabe.jpg"
              alt="Sourcing"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-[#13683d]">
              Nos performances 
            </h3>
            <ul className="list-disc list-inside">
              <li>La transparence</li>
              <li>Impact positif sur l'emploi local et les opportunités</li>
              <li>Soyens de traitement èthique</li>
            </ul>
            <p>
            Notre histoire a commencé lorsque notre fondatrice a découvert les bienfaits des huiles biologiques. Aujourd'hui, notre équipe passionnée est dédiée à fournir des produits de la plus haute qualité, testés pour leur pureté et efficacité.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-[#13683d]">Notre engagement</h3>
            <p>
            Chez <b>Bio & Bien-être</b>, nous nous engageons à offrir des produits respectueux de l'environnement, en veillant à ce que chaque étape de production soit durable et éthique.
            </p>
            <p>
            Chaque étape de notre processus de production est soigneusement pensée pour minimiser notre empreinte écologique, en utilisant des méthodes durables et des matériaux 100 % naturels. Nous travaillons main dans la main avec des producteurs locaux, en veillant à ce que tous nos fournisseurs respectent des pratiques éthiques, garantissant ainsi un soutien à l'économie locale tout en préservant les écosystèmes. Nous croyons fermement que le bien-être de notre planète et celui de ses habitants sont indissociables, et nous faisons de notre mieux pour contribuer à un avenir plus vert et plus juste, tout en vous offrant des produits de qualité exceptionnelle.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/474x/25/55/ab/2555ab6a059dd15bcb4c969de2e7abb1.jpg"
              alt="Team"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
