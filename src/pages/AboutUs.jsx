import React, { useState, useEffect } from 'react';
// import { Configuration, OpenAIApi } from "openai";
// import { OpenAI } from "openai";

export default function AboutUs() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [headerImageIndex, setHeaderImageIndex] = useState(0);
  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
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
        <section className="text-center ">
          <h2 className="text-3xl font-semibold mb-4"> Bienvenue chez <b className='text-green-700'> Bio et Bien Être</b></h2>
          <p className='text-justify'>
            Chez Bio et Bien Être, nous nous engageons à vous offrir les meilleures huiles essentielles, 100 % pures, naturelles, et de qualité thérapeutique. Notre passion pour le bien-être et la santé naturelle nous pousse à sélectionner soigneusement des huiles d'origine biologique et à promouvoir un mode de vie sain et équilibré. Découvrez notre large gamme d'huiles essentielles, chacune choisie pour ses bienfaits uniques et ses vertus aromathérapeutiques. Faites confiance à Bio et Bien Être pour enrichir votre quotidien de produits naturels et bienfaisants.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Innovation", description: "Constantly pushing the boundaries of what's possible" },
              { title: "Quality", description: "Uncompromising commitment to excellence in everything we do" },
              { title: "Customer Focus", description: "Your success is our top priority" }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AMINE", role: "OPS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHv2koDwrhXGJ-8E3E9kjjI7iGGsAzXZ9Ejg&s" },
              { name: "SLIMANI", role: "Lead Designer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wRyZEknLAkjLA5cU96NwRG3MehyKfP14_g&s" }
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
            <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">💧 L'Art de l'Aromathérapie avec Bio et Bien Être 💧</h2>
            <p className="text-justify mb-3 text-gray-500 sm:text-xl">
              Chez Bio et Bien Être, nous croyons en la puissance de la nature. Nos huiles essentielles biologiques sont rigoureusement sélectionnées pour leurs bienfaits thérapeutiques. Que ce soit pour apaiser le stress, améliorer la qualité du sommeil ou renforcer votre immunité, nos huiles essentielles sont là pour vous accompagner dans votre bien-être. 🌸
              💡 Essayez-les dès maintenant et ressentez la différence.
            </p>
          </div>

          <dl class="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col rounded-lg bg-yellow-400 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Total Sales</dt>

              <dd class="text-4xl font-extrabold text-green-900 md:text-5xl">$4.8m</dd>
            </div>

            <div class="flex flex-col rounded-lg bg-yellow-400 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Official Addons</dt>

              <dd class="text-4xl font-extrabold text-green-900 md:text-5xl">24</dd>
            </div>

            <div class="flex flex-col rounded-lg bg-yellow-400 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Total Addons</dt>

              <dd class="text-4xl font-extrabold text-green-900 md:text-5xl">86</dd>
            </div>

            <div class="flex flex-col rounded-lg bg-yellow-400 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Product</dt>

              <dd class="text-4xl font-extrabold text-green-900 md:text-5xl">86k</dd>
            </div>
          </dl>
        </div>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                🌱 Redécouvrez le pouvoir des plantes avec Bio et Bien Être 🌱
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
                <article className="space-y-4 text-gray-600">
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
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    🌿 Découvrez l'Essence du Bien-être 🌿
                  </h2>

                  <p className="text-justify mt-4 text-gray-600">

                    Chez Bio et Bien Être, nous vous proposons une sélection d'huiles essentielles 100% pures et naturelles, soigneusement élaborées pour favoriser votre bien-être au quotidien. De la lavande à l'aromathérapie aux bienfaits apaisants, chaque huile essentielle est choisie pour ses vertus thérapeutiques exceptionnelles. Faites l'expérience de la nature dans son état le plus pur et transformez votre quotidien avec nos produits naturels
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded border border-yellow-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-900 focus:outline-none focus:ring active:text-yellow-500"
                  >
                    Get in Touch
                  </a>
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
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">🌿 Promo Spéciale sur toutes nos huiles essentielles ! 🌿</h2>

                    <p className="text-justify mt-4 text-gray-500">
                      Profitez de -20% sur l'ensemble de nos produits d'huiles essentielles bio ! Que vous soyez adepte de relaxation, de bien-être ou d'aromathérapie, c'est le moment idéal pour découvrir nos produits de qualité.

                    </p>
                  </header>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
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

                        <p className="mt-1 text-sm text-gray-700">$150</p>
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

                        <p className="mt-1 text-sm text-gray-700">$150</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header className="text-center">

              <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Offre Exceptionnelle : Achetez 2 huiles essentielles, la 3ème à moitié prix ! 🌱</p>
              <p class="text-gray-500 dark:text-gray-400 text-justify ">Pour une période limitée, nous vous offrons une réduction sur votre panier ! Achetez 2 huiles essentielles et obtenez la 3ème à -50% !.</p>

            </header>

            <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <li>
                <a href="#" className="group relative block">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyUhU0BjENFytYoOTGBRzzp4MIRC4CNMr82P1xEsHNrzTpKhe9YmOsqbA1EDyXY-TyH0&usqp=CAU"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">Huile essentielle Lavande</h3>

                    <span
                      className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    >
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group relative block">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sLsQtC1C98sB_VQbT3rSxaGpoFkurlrB8EJRBVU_Ipl0wWuGhMUDG7QBfbkM-vHDrHk&usqp=CAU"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">Huile essentielle de Ravintsara.</h3>

                    <span
                      className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    >
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>

              <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <a href="#" className="group relative block">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3-gQfWSH77pWvg-WVzN5vkiCkIZoTtcguRTxZbbRk32ZC7YUJ9BODHAy9R1d6jd0Ky8&usqp=CAU"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">Huile essentielle de Gaulthérie</h3>

                    <span
                      className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    >
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>
            </ul>
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

        <section className="text-center bg-yellow-50 py-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
          <p className="mb-6 text-justify p-10">We're always looking for talented individuals to join our team. If you're passionate about innovation and want to make a difference, we'd love to hear from you.</p>
          <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-900 transition">
            View Career Opportunities
          </button>
        </section>
      </main>
    </div>
  );
}
