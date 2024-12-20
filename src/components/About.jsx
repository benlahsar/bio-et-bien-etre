import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AboutUs() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [headerImageIndex, setHeaderImageIndex] = useState(0);
  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
   const navigate = useNavigate()
  /////////////////////////////////




  ////////////////////////////////////////////////////////////////
  // const handleQuestionSubmit = (e) => {
  //   e.preventDefault();
  //   const responses = {
  //     "What does your company do?": "Our company specializes in creating innovative solutions that leverage cutting-edge technology to solve complex problems across various industries.",
  //     "How long have you been in business?": "We've been in business for over a decade, constantly evolving and adapting to the changing technological landscape.",
  //     "Do you offer internships?": "Yes, we offer internships in various departments including software development, design, and marketing. Check our careers page for current opportunities.",
  //     "BIO ET BIEN ETRE": " BIO ET BIEN ÊTRE se spécialise dans la vente d’huiles essentielles bio",
  //     "bio et bien etre": " BIO ET BIEN ÊTRE se spécialise dans la vente d’huiles essentielles bio",
  //     "What makes your company unique?": "Our unique blend of creativity, technical expertise, and commitment to social responsibility sets us apart in the industry.",
  //   };
  //   setAnswer(responses[question] || "I'm sorry, I don't have specific information about that. Please contact our support team for more details.");
  // };
  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderImageIndex((prevIndex) => (prevIndex + 1) % 6); // Cycle through 3 images
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);
  const headerImages = [
    '/images/bg.png',
    '/images/bg1.png',
    '/images/bg2.png',
    '/images/bg3.png',
    '/images/bg4.png',
    '/images/bg5.png',];
  return (
    <div className="font-sans text-gray-800">
      <header className="relative h-[30rem] flex items-center justify-center bg-green-900 text-yellow-400 text-center">
        <img
          src={headerImages[headerImageIndex]}
          alt="Company value"
          className="absolute inset-0 w-full h-full object-cover   duration-500 ease-in-out"
        />
        <div className="relative z-10 p-6">
          <h1 className="text-5xl font-bold">About BIO ET BIEN ETRE</h1>
          <p className="mt-2 text-xl">Innovating for a better tomorrow</p>
        </div>
      </header>
      <main className="max-w-5xl mx-auto p-6 space-y-8  ">
      <section className="text-center">
  <div className="text-center my-8">
    <h2 className="text-3xl font-serif font-semibold mb-4">
      Bienvenue chez <b className="text-[#55b752]">Bio et Bien Être</b>
    </h2>
  </div>

  <div className="max-w-4xl mx-auto p-6  rounded-lg shadow-md transition-transform transform hover:scale-88 bg-[#e5eac6] hover:text-white">
    <p className="text-justify font-semibold  text-gray-700 hover:text-white">
      Ici, chez <strong>Bio & Bien-être</strong>, nous croyons fermement que la nature détient le secret d'une
      vie saine et équilibrée. C'est pourquoi nous nous sommes engagés à créer des huiles biologiques
      de la plus haute qualité, qui non seulement nourrissent votre corps, mais aussi nourrissent votre esprit.
    </p>
    <p className="text-justify font-semibold text-gray-700 mt-4 hover:text-white">
      Notre histoire a commencé il y a quelques années, lorsque notre fondatrice a découvert les incroyables
      bienfaits des huiles biologiques pour la santé et le bien-être. Après des années de recherche et
      de développement, elle a décidé de lancer <strong>Bio & Bien-être</strong>, une marque dédiée à offrir
      les huiles biologiques les plus pures et les plus efficaces disponibles sur le marché.
    </p>
    <p className="text-justify font-semibold text-gray-700 mt-4 hover:text-white">
      Aujourd'hui, nous sommes fiers de dire que notre équipe est composée de professionnels passionnés
      qui partagent notre vision et notre engagement envers la qualité. Nous travaillons dur pour nous
      assurer que chaque bouteille d'huile que nous produisons est fabriquée à partir d'ingrédients
      biologiques de la plus haute qualité, et que chaque lot est testé pour sa pureté et son efficacité.
    </p>
    <p className="text-justify font-semibold text-gray-700 mt-4 hover:text-white">
      Mais nous ne nous arrêtons pas là. Nous sommes également déterminés à éduquer nos clients sur
      les incroyables bienfaits des huiles biologiques pour la santé et le bien-être.
    </p>
  </div>
</section>

        <section>
          <h2 className="text-3xl font-serif mb-4 text-[#13683d]">Qu'est-ce qui nous distingue?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Innovation", description: "Pousser constamment les limites de ce qui est possible" },
              { title: "Qualité", description: "Engagement sans compromis envers l'execellence dans tout ce que nous faisons " },
              { title: "Orientation Client", description: "Votre succès et notre priorité absolue" }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-serif mb-4 text-[#13683d]">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Nizar", role: "Product Owner", image: "data:image/png;base64,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" },
              { name: "Zineb", role: "Scrum Master", image: "https://thumbs.dreamstime.com/b/beau-visage-blanc-portrait-mod%C3%A8le-d-une-jolie-femme-musulmane-f%C3%A9minin-sans-dans-le-hijab-style-de-dessin-anim%C3%A9-en-couleur-fond-253971940.jpg" },
              { name: "Salma", role: "Développeur", image:" https://cdn-icons-png.flaticon.com/256/6997/6997662.png "},
              { name: "Sana", role: "Développeur", image: "https://i.pinimg.com/564x/95/26/12/95261256b08293c3b2d897a1f5cd9d13.jpg" },
              { name: "Amine", role: "Développeur", image: "https://cdn-icons-png.flaticon.com/256/4042/4042356.png" },
              { name: "Slimani", role: "Développeur", image: "https://cdn-icons-png.flaticon.com/256/4042/4042356.png" },


            ].map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold font-serif text-[#13683d] sm:text-4xl"> L'Art de l'Aromathérapie avec Bio et Bien Être </h2>
            <p   className="relative flex flex-col md:flex-row items-center gap-12 p-12 bg-cover bg-center rounded-lg shadow-md "
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/474x/56/46/0e/56460e4391926b0b119c6594255aa218.jpg')",
          }}>
              Chez Bio et Bien Être, nous croyons en la puissance de la nature. Nos huiles essentielles biologiques sont rigoureusement sélectionnées pour leurs bienfaits thérapeutiques. Que ce soit pour apaiser le stress, améliorer la qualité du sommeil ou renforcer votre immunité, nos huiles essentielles sont là pour vous accompagner dans votre bien-être. 
               Essayez-les dès maintenant et ressentez la différence.
            </p>
          </div>
          <dl class="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col rounded-lg bg-[#e5eac6] px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Ventes totales</dt>
              <dd class="text-4xl font-extrabold text-green-900 md:text-5xl">1.8m</dd>
            </div>
            <div class="flex flex-col rounded-lg bg-[#e5eac6] px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Addons Officiels</dt>
              <dd class="text-4xl font-extrabold text-green-900 md:text-5xl">15</dd>
            </div>
            <div class="flex flex-col rounded-lg bg-[#e5eac6] px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Addons Total</dt>
              <dd class="text-4xl font-extrabold text-green-900 md:text-5xl">30</dd>
            </div>
            <div class="flex flex-col rounded-lg bg-[#e5eac6] px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Produits</dt>
              <dd class="text-4xl font-extrabold text-green-900 md:text-5xl">40k</dd>
            </div>
          </dl>
        </div>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold  font-serif sm:text-4xl text-[#13683d]">
                 Redécouvrez le pouvoir des plantes avec Bio et Bien Être 
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="/images/romarin.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="lg:py-16">
                <article className="space-y-4 text-900">
                  <p>
                    Offre Spéciale Bio et Bien Être.
                  </p>
                  <p className='text-justify'>
                    C'est le moment idéal pour découvrir nos différentes variétés et bénéficier de leurs bienfaits, que ce soit pour la détente, l’énergie, ou l’amélioration de votre bien-être général. Cette offre est valable pour une durée limitée, alors ne manquez pas votre chance de multiplier les bienfaits des huiles essentielles sans frais supplémentaires !
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section >
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src="/images/gerogier.png"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="relative flex items-center bg-gray-100">
                <span
                  className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                ></span>
                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold font-serif sm:text-3xl text-[#13683d]">
                     Découvrez l'Essence du Bien-être 
                  </h2>
                  <p className="text-justify mt-4 text-gray-600">
                    Chez Bio et Bien Être, nous vous proposons une sélection d'huiles essentielles 100% pures et naturelles, soigneusement élaborées pour favoriser votre bien-être au quotidien. De la lavande à l'aromathérapie aux bienfaits apaisants, chaque huile essentielle est choisie pour ses vertus thérapeutiques exceptionnelles. Faites l'expérience de la nature dans son état le plus pur et transformez votre quotidien avec nos produits naturels
                  </p>
                  <button onClick={() => navigate("/aboutsec")} className="mt-1.5 inline-block bg-[#58ad36e8] px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Voir Plus</button>
                    
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
              <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                <div className="mx-auto max-w-md text-center lg:text-left">
                  <header>
                    <h2 className="text-xl font-bold font-serif text-[#13683d] sm:text-3xl"> Promo Spéciale sur toutes nos huiles essentielles ! </h2>
                    <p className="text-justify mt-4 text-gray-500">
                      Profitez de -20% sur l'ensemble de nos produits d'huiles essentielles bio ! Que vous soyez adepte de relaxation, de bien-être ou d'aromathérapie, c'est le moment idéal pour découvrir nos produits de qualité.
                    </p>
                  </header>
                  <a
                    href="#"
                    className="mt-8 inline-block rounded border border-gray-900 bg-[#58ad36e8] px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                  >
                    Shop All
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2 lg:py-8">
                <ul className="grid grid-cols-2 gap-4">
                  <li>
                    <a href="#" className="group block">
                      <img
                        src="/images/amande.png"
                        alt=""
                        className="aspect-square w-full rounded object-cover"
                      />
                      <div className="mt-3">
                        <h3
                          className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                        >
                          AMANDE DOUCE
                        </h3>
                        <p className="mt-1 text-sm text-gray-700">Dh150</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <img
                        src='/images/coco.png'
                        alt=""
                        className="aspect-square w-full rounded object-cover"
                      />
                      <div className="mt-3">
                        <h3
                          className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                        >
                          huile COCO
                        </h3>
                        <p className="mt-1 text-sm text-gray-700">Dh150</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
       
        {/* ::::::::::::::::::::::::::::::::: */}

        {/* ////////////////////////////////// */}
        {/* <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Have a Question?</h2>
          <form onSubmit={handleQuestionSubmit} className="max-w-md mx-auto space-y-4">
            <label htmlFor="question" className="block text-lg">Ask our AI assistant</label>
            <input
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="E.g., What does your company do?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="w-full py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-900 transition">
              Ask
            </button>
          </form>
          {answer && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Response:</h3>
              <p>{answer}</p>
            </div>
          )}
        </section> */}

      </main>
    </div>
  );
}