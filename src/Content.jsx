import { useState } from 'react';

const blogPost = {
  title: "Huile Lavande",
  date: "November 20, 2024",
  image: "https://lotusbio.ma/wp-content/uploads/2020/11/huile-essentielle-de-lavande-lavender-essential-oil.jpg",
  content: `
        <h1>Les Bienfaits de l'Huile de Lavande pour la Santé et la Beauté</h1>
        <p>L'huile essentielle de lavande est l'une des huiles les plus populaires en aromathérapie et dans les soins de beauté. Connue pour ses propriétés apaisantes, réparatrices et antiseptiques, elle est un véritable allié pour la santé de la peau, du corps et de l'esprit. Découvrez comment cette huile peut améliorer votre quotidien.</p>

        <h2>Propriétés Apaisantes et Relaxantes</h2>
        <p>L'huile de lavande est largement reconnue pour ses effets apaisants sur l'esprit. Elle est utilisée en aromathérapie pour réduire le stress, l'anxiété et favoriser un sommeil réparateur. Quelques gouttes d'huile essentielle de lavande dans un diffuseur ou un bain peuvent aider à calmer les tensions et à créer une atmosphère de détente.</p>

        <h2>Un Soin Naturel pour la Peau</h2>
        <p>Grâce à ses propriétés antiseptiques et anti-inflammatoires, l'huile de lavande est un excellent soin pour les peaux sujettes aux imperfections. Elle aide à apaiser les irritations cutanées, à réduire les rougeurs et à traiter les petites plaies ou coupures. Elle est également efficace contre l'acné en raison de ses vertus purifiantes, tout en favorisant une cicatrisation rapide des lésions.</p>

        <h2>Réduction des Douleurs Musculaires et Articulaires</h2>
        <p>En application topique, l'huile essentielle de lavande peut soulager les douleurs musculaires et articulaires. Grâce à ses propriétés anti-inflammatoires, elle aide à réduire les tensions et les douleurs corporelles. Mélangée à une huile végétale, elle peut être utilisée en massage sur les zones douloureuses pour un effet relaxant et décontractant.</p>

        <h2>Un Soin Capillaire Régénérant</h2>
        <p>L'huile de lavande est également bénéfique pour les cheveux et le cuir chevelu. Elle stimule la circulation sanguine au niveau du cuir chevelu, ce qui peut favoriser la croissance des cheveux. De plus, elle aide à apaiser les démangeaisons et à équilibrer la production de sébum. Utilisée en masque ou en ajoutant quelques gouttes à votre shampooing, elle rend les cheveux plus brillants et plus forts.</p>

        <h2>Propriétés Antibactériennes et Antivirales</h2>
        <p>L'huile de lavande possède des propriétés antibactériennes et antivirales qui en font un excellent allié pour maintenir une peau saine. Elle est idéale pour lutter contre les infections cutanées et prévenir les éruptions. Elle aide également à purifier l'air en cas de maladie, en éliminant les bactéries et virus présents dans l'environnement.</p>

        <h2>Facilité d'Utilisation et Versatilité</h2>
        <p>L'huile de lavande est très facile à intégrer dans votre routine quotidienne. Elle peut être utilisée dans un diffuseur pour un effet relaxant, en massage pour soulager les douleurs corporelles, ou directement appliquée sur la peau pour traiter les imperfections. Elle peut également être ajoutée à des produits de beauté tels que les crèmes, lotions et shampoings pour en améliorer les effets.</p>

        <h2>Un Élixir Naturel pour le Bien-être</h2>
        <p>En résumé, l'huile essentielle de lavande est un remède naturel pour une multitude de problèmes de santé et de beauté. Que ce soit pour apaiser l'esprit, traiter la peau, soulager les douleurs corporelles ou améliorer l'état des cheveux, elle est un incontournable des soins naturels. Sa polyvalence et ses nombreux bienfaits en font un allié précieux pour le bien-être quotidien.</p>`
};
const blogPost1 = {
  title: "Zit Oued ",
  date: "Nouvember  14, 2024",
  image: "https://bpara.ma/wp-content/uploads/2022/03/bio-oil-huile-regenerante-125ml.jpg",
  content: `
        <h1>Découvrez les Bienfaits de l'Huile Bio-Oil pour la Peau et les Cicatrices</h1>
        <p>L'huile Bio-Oil est un soin polyvalent qui a acquis une grande popularité pour ses nombreux bienfaits en matière de soins de la peau. Grâce à sa formule unique à base d'huiles végétales et d'extraits de plantes, Bio-Oil est un allié pour traiter les cicatrices, les vergetures et hydrater en profondeur tous les types de peau. Voici tout ce que vous devez savoir sur ce soin incontournable.</p>

        <h2>Réduction des Cicatrices et Vergetures</h2>
        <p>Bio-Oil est particulièrement connu pour sa capacité à améliorer l'apparence des cicatrices et des vergetures. Grâce à sa formulation spécifique contenant de l'huile de calendula, de lavande, de romarin et de camomille, cette huile aide à régénérer les cellules de la peau et à améliorer l'élasticité. Elle peut être appliquée sur les cicatrices anciennes ou récentes ainsi que sur les vergetures pour atténuer leur apparence avec une utilisation régulière.</p>

        <h2>Hydratation Intense et Soin de la Peau</h2>
        <p>Bio-Oil est également un excellent hydratant, offrant une hydratation profonde grâce à sa combinaison d'huiles naturelles. Elle aide à restaurer l'hydratation de la peau sèche, en la rendant plus souple et douce. Ce soin est idéal pour les peaux sensibles ou déshydratées et peut être utilisé sur tout le corps, y compris le visage.</p>

        <h2>Propriétés Anti-âge et Réparatrices</h2>
        <p>La formulation de Bio-Oil, enrichie en vitamine A et en extraits de plantes, a des propriétés anti-âge. Elle favorise la production de collagène et améliore la texture de la peau, en réduisant l'apparence des rides et des ridules. En utilisant Bio-Oil de manière régulière, vous pouvez retrouver une peau plus ferme et plus lisse, avec une apparence plus jeune.</p>

        <h2>Adapté à Tous les Types de Peau</h2>
        <p>Bio-Oil convient à tous les types de peau, y compris les peaux sensibles. Sa texture légère et non grasse permet une absorption rapide, sans laisser de film huileux sur la peau. Que ce soit pour traiter des cicatrices, des vergetures ou tout simplement pour maintenir l'hydratation de la peau, Bio-Oil offre des résultats visibles pour tous.</p>

        <h2>Une Application Simple et Efficace</h2>
        <p>Bio-Oil est facile à utiliser et peut être appliqué directement sur la peau après la douche ou le bain. Quelques gouttes suffisent pour hydrater et nourrir la peau en profondeur. Pour les cicatrices ou les vergetures, il est conseillé d'appliquer Bio-Oil deux fois par jour pendant plusieurs mois pour obtenir les meilleurs résultats.</p>

        <h2>Une Solution Polyvalente pour la Peau</h2>
        <p>En plus de ses bienfaits pour les cicatrices, les vergetures et l'hydratation, Bio-Oil est également utilisé pour traiter les irrégularités de teint et les taches pigmentaires. Elle unifie la peau et lui donne un éclat naturel, tout en agissant comme un soin réparateur pour les imperfections.</p>

        <p>En résumé, l'huile Bio-Oil est un soin complet qui offre des solutions pour de nombreux problèmes cutanés. Que vous cherchiez à améliorer l'apparence de vos cicatrices, à lutter contre les vergetures ou à simplement nourrir et hydrater votre peau, Bio-Oil est un choix naturel et efficace pour une peau plus belle et en meilleure santé.</p>`
};
const blogPost2 = {
  title: "Huile Sesame",
  date: "November 12, 2024",
  image: "https://lotusbio.ma/wp-content/uploads/2020/11/huile-de-sesame-Sesame-oil-huile-vegetale-de-sesame-3.jpg",
  content: `
        <h1>Découvrez les Bienfaits de l'Huile de Sésame pour la Santé et la Beauté</h1>
        <p>Utilisée depuis des millénaires dans les soins de la peau, de la santé et même dans l'alimentation, l'huile de sésame est un ingrédient naturel aux multiples vertus. Riche en acides gras essentiels, antioxydants et minéraux, cette huile végétale est un trésor pour ceux qui cherchent à améliorer leur bien-être général et leur routine beauté.</p>

        <h2>Un Super-Aliment pour la Santé</h2>
        <p>L'huile de sésame est particulièrement riche en acides gras polyinsaturés, qui sont bénéfiques pour le système cardiovasculaire. Elle est également une excellente source de minéraux comme le calcium, le fer, le magnésium et le zinc, qui contribuent au bon fonctionnement du corps. Consommée régulièrement, elle aide à maintenir des niveaux de cholestérol sains et à favoriser une meilleure santé osseuse et musculaire.</p>

        <h2>Propriétés Antioxydantes et Anti-âge</h2>
        <p>Grâce à sa teneur élevée en sésamolines et en vitamine E, l'huile de sésame est un puissant antioxydant qui protège les cellules contre le vieillissement prématuré. Elle aide à combattre les radicaux libres, ce qui peut réduire l'apparence des rides et améliorer l'élasticité de la peau. Elle est donc idéale pour lutter contre les signes du vieillissement.</p>

        <h2>Hydratation et Nourrissage de la Peau</h2>
        <p>L'huile de sésame est un hydratant naturel et un excellent nourrissant pour la peau. Elle pénètre facilement sans laisser de film gras, tout en apportant une hydratation profonde et durable. Que ce soit pour les peaux sèches ou les peaux sensibles, elle offre une douceur et une souplesse incomparables. Elle est également efficace pour apaiser les irritations et réduire l'inflammation.</p>

        <h2>Propriétés Réparatrices pour les Cheveux</h2>
        <p>L'huile de sésame est également bénéfique pour les cheveux. Elle nourrit le cuir chevelu, stimule la croissance des cheveux et leur apporte brillance et vitalité. Grâce à sa capacité à pénétrer en profondeur dans la fibre capillaire, elle aide à réparer les cheveux abîmés, à lutter contre les pointes fourchues et à réduire les pellicules.</p>

        <h2>Un Élixir de Beauté Naturel</h2>
        <p>Grâce à ses propriétés apaisantes et hydratantes, l'huile de sésame peut être utilisée pour une variété de soins de beauté. Elle est souvent utilisée dans des masques de beauté, des soins anti-âge, et même pour le démaquillage. Quelques gouttes appliquées sur le visage laissent la peau nourrie et éclatante.</p>

        <h2>Utilisation Facile et Adaptable</h2>
        <p>L'huile de sésame est très polyvalente et peut être utilisée de diverses manières. En cuisine, elle sert de base pour des vinaigrettes ou pour la cuisson à haute température. En soin de la peau, elle peut être appliquée directement ou mélangée avec d'autres huiles essentielles pour maximiser ses effets. Elle s'intègre facilement dans une routine de soins quotidienne.</p>

        <h2>Un Choix Naturel pour Tous</h2>
        <p>L'huile de sésame est un choix parfait pour ceux qui souhaitent des produits de soin naturels et efficaces. Que ce soit pour la peau, les cheveux, ou même dans l'alimentation, elle offre de nombreux avantages pour améliorer votre bien-être et votre beauté naturelle.</p>

        <p>En résumé, l'huile de sésame est un produit polyvalent et précieux, qui mérite une place de choix dans votre routine beauté et santé. Avec ses bienfaits nourrissants, antioxydants et réparateurs, elle est un allié incontournable pour ceux qui recherchent des solutions naturelles et efficaces.</p>`
};
const blogPost3 = {
  title: "Huile D'Argane",
  date: "November 19, 2024",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaixP4SKe6Oty_Q8nkwcJga-9LeVyt6scjg&s",
  content: `
        <h1>Découvrez les Bienfaits de l'Huile d'Argan pour la Beauté et la Santé</h1>
        <p>L'huile d'argan, surnommée "l'or liquide du Maroc", est reconnue pour ses nombreuses vertus en cosmétique et en santé. Riche en acides gras essentiels, en vitamine E et en antioxydants, elle est un ingrédient prisé pour ses bienfaits hydratants, réparateurs et protecteurs. Voici comment l'huile d'argan peut enrichir votre routine de soin.</p>

        <h2>Hydratation et Nourriture pour la Peau</h2>
        <p>L'huile d'argan est idéale pour hydrater et nourrir la peau en profondeur. Grâce à sa texture légère et à ses acides gras, elle pénètre facilement et laisse la peau douce et souple. Elle convient à tous les types de peau, y compris les peaux sensibles ou sèches, et peut être appliquée quotidiennement pour un éclat naturel.</p>

        <h2>Anti-âge Naturel et Réducteur de Rides</h2>
        <p>Avec sa teneur élevée en vitamine E et en antioxydants, l'huile d'argan aide à lutter contre les signes de l'âge. Elle protège les cellules de la peau contre les dommages des radicaux libres, réduisant ainsi l'apparence des rides et des ridules. Appliquée régulièrement, elle aide à maintenir la fermeté et l’élasticité de la peau pour un teint plus jeune.</p>

        <h2>Réparatrice et Fortifiante pour les Cheveux</h2>
        <p>L'huile d'argan est également très appréciée pour les soins capillaires. Elle aide à renforcer les cheveux, à réparer les pointes fourchues et à apporter brillance et douceur. Utilisée comme masque ou en application légère sur les pointes, elle protège les cheveux des agressions extérieures et les rend plus résistants et éclatants.</p>

        <h2>Amélioration de la Santé des Ongles</h2>
        <p>Grâce à ses propriétés nourrissantes, l'huile d'argan est également idéale pour renforcer les ongles cassants et les cuticules. En massant quelques gouttes sur les ongles et autour des cuticules, elle les protège et les aide à devenir plus résistants. Elle est donc parfaite pour obtenir des ongles plus forts et plus sains.</p>

        <h2>Application Simple et Adaptable</h2>
        <p>L'huile d'argan peut être utilisée de multiples façons : en soin de nuit, en ajoutant quelques gouttes à votre crème de jour, ou en masque capillaire avant le lavage. Elle est polyvalente et peut facilement être intégrée à votre routine quotidienne pour des résultats visibles.</p>

        <h2>Un Trésor Polyvalent pour Toute la Famille</h2>
        <p>Que ce soit pour la peau, les cheveux ou les ongles, l'huile d'argan est un produit naturel aux multiples bienfaits. Utilisée par toutes les générations, elle offre une solution simple, efficace et naturelle pour répondre aux besoins de beauté et de soin.</p>

        <p>En conclusion, l'huile d'argan est un soin complet, nourrissant et réparateur, qui révèle la beauté naturelle de votre peau, de vos cheveux et de vos ongles. Elle est l'alliée idéale pour ceux qui souhaitent intégrer des soins naturels et efficaces dans leur quotidien.</p>
  `
};
const blogPost4 = {
  title: "Huile Essentielle REVOX",
  date: "November 20, 2024",
  image: "https://globalpara.ma/cdn/shop/files/BioRosehipOilbote_i4_i4_1024x1024_7e43732e-ca0b-49c3-97ac-7cc99fa9e0ea_1024x.webp?v=1719745464",
  content: `
         <h1>Découvrez les Bienfaits de l'Huile Revox pour Votre Peau et Vos Cheveux</h1>
        <p>L'huile Revox est devenue un incontournable pour ceux qui recherchent une solution naturelle et efficace pour le soin de la peau et des cheveux. Riche en ingrédients naturels, cette huile propose une multitude de bienfaits adaptés à divers besoins. Voici tout ce que vous devez savoir sur cette huile multifonctionnelle.</p>

        <h2>Hydratation Intense pour la Peau</h2>
        <p>L'huile Revox est formulée pour offrir une hydratation profonde à la peau, la rendant douce et souple. Enrichie en acides gras essentiels, elle pénètre rapidement pour nourrir les couches de la peau sans laisser de film gras. Elle convient particulièrement aux peaux sèches ou déshydratées et peut être utilisée quotidiennement pour une peau éclatante et en bonne santé.</p>

        <h2>Un Élixir Anti-âge Naturel</h2>
        <p>Grâce à ses antioxydants, l'huile Revox aide à lutter contre les signes du vieillissement. En stimulant la régénération cellulaire, elle contribue à réduire l’apparence des rides et des ridules, tout en offrant un effet de fermeté. Utilisée régulièrement, elle favorise une peau plus lisse et plus jeune.</p>

        <h2>Un Soins Réparateur pour les Cheveux</h2>
        <p>L'huile Revox est également un allié précieux pour les cheveux abîmés et ternes. En appliquant quelques gouttes sur les longueurs, cette huile nourrit la fibre capillaire et aide à réduire les frisottis. Utilisée comme masque avant shampoing, elle permet de renforcer et d'adoucir les cheveux, leur apportant brillance et vitalité.</p>

        <h2>Amélioration de la Texture de la Peau</h2>
        <p>En plus de ses propriétés hydratantes, l'huile Revox contribue à améliorer la texture de la peau en douceur. Elle réduit les rougeurs et calme les irritations, ce qui en fait une option idéale pour les peaux sensibles. En application quotidienne, elle aide à unifier le teint et à offrir un aspect plus lisse.</p>

        <h2>Utilisation Simple et Adaptable</h2>
        <p>L'huile Revox est facile à intégrer à votre routine de soin. Quelques gouttes suffisent : appliquez-les directement sur la peau ou mélangez-les avec votre crème hydratante habituelle. Pour les cheveux, elle peut être appliquée sur les pointes sèches ou en soin profond avant le lavage.</p>

        <h2>Une Huile Polyvalente pour Tous</h2>
        <p>Que ce soit pour le visage, le corps ou les cheveux, l'huile Revox s’adapte à tous les types de peau et de cheveux. Polyvalente, elle répond aux besoins spécifiques de chacun tout en offrant une solution naturelle et efficace.</p>

        <p>En somme, l'huile Revox est un soin de beauté complet, alliant hydratation, protection et régénération. Elle est idéale pour ceux qui cherchent à intégrer des produits naturels dans leur routine quotidienne et à obtenir des résultats visibles sans compromis.</p>
  `
};
const blogPost5 = {
  title: "Huile D'Olive",
  date: "November 13, 2024",
  image: "https://lotusbio.ma/wp-content/uploads/2020/11/huile-essentielle-de-cypres-Cypress-essential-oil-huile-de-cypres.jpg",
  content: `
            <h1>Découvrez les Bienfaits de l'Huile d'Olive pour la Santé et la Beauté</h1>
        <p>Considérée comme un trésor de la Méditerranée, l'huile d'olive est appréciée pour ses multiples bienfaits, aussi bien dans l’alimentation que dans les soins de beauté. Riche en nutriments essentiels et en antioxydants, elle est un choix naturel pour ceux qui recherchent une santé optimale et des soins de peau efficaces.</p>

        <h2>Un Super-Aliment pour la Santé Cardiaque</h2>
        <p>L'huile d'olive est connue pour être riche en acides gras mono-insaturés, en particulier l'acide oléique, qui contribue à réduire le mauvais cholestérol (LDL) et à améliorer le bon cholestérol (HDL). Une consommation régulière d'huile d'olive extra-vierge est associée à une meilleure santé cardiaque et à une réduction du risque de maladies cardiovasculaires.</p>

        <h2>Un Puissant Antioxydant Naturel</h2>
        <p>Grâce à sa forte teneur en polyphénols et en vitamine E, l'huile d'olive possède des propriétés antioxydantes qui aident à protéger les cellules contre les radicaux libres. Cela peut contribuer à ralentir le vieillissement cellulaire et à réduire les risques de maladies chroniques. Incorporer l'huile d'olive dans votre alimentation peut donc être bénéfique pour votre bien-être général.</p>

        <h2>Hydratation et Soin de la Peau</h2>
        <p>Appliquée directement sur la peau, l'huile d'olive est un hydratant naturel qui adoucit et nourrit en profondeur. Elle est particulièrement recommandée pour les peaux sèches et irritées. Riche en vitamines A, D, E et K, elle aide à apaiser la peau, la protège contre les agressions extérieures et lui donne une apparence plus souple et éclatante.</p>

        <h2>Un Remède Naturel pour les Cheveux</h2>
        <p>L'huile d'olive est également utilisée comme soin capillaire pour revitaliser et renforcer les cheveux. Elle peut être appliquée en masque sur le cuir chevelu et les longueurs pour réduire les frisottis, réparer les pointes fourchues et apporter brillance et douceur. Elle est idéale pour les cheveux secs et abîmés, offrant un soin en profondeur.</p>

        <h2>Facile à Intégrer dans la Cuisine</h2>
        <p>L'huile d'olive est polyvalente et s'intègre facilement à de nombreux plats. Que ce soit pour assaisonner des salades, pour cuisiner ou pour mariner des aliments, elle apporte une saveur délicate et rehausse le goût de chaque plat. Choisissez de préférence une huile d'olive extra-vierge pour bénéficier au maximum de ses bienfaits.</p>

        <h2>Un Incontournable de la Beauté et de la Santé</h2>
        <p>L'huile d'olive est un ingrédient naturel aux multiples propriétés. Que ce soit pour améliorer votre santé cardiovasculaire, protéger votre peau ou nourrir vos cheveux, elle est une option simple et efficace. Facile à intégrer au quotidien, elle fait partie des produits de base pour une vie saine et un soin de beauté naturel.</p>

        <p>En somme, l'huile d'olive est bien plus qu'un simple ingrédient de cuisine. Elle est un véritable allié pour une santé optimale et une beauté naturelle, en faisant l'un des meilleurs choix pour ceux qui privilégient les soins et la nutrition à base de produits naturels.</p>`
};

const initialComments = [
  { id: 1, author: "Alice Johnson", date: "May 16, 2023", content: "This article was so informative! I never knew about the connection between scent and memory. It explains why certain perfumes remind me of specific moments in my life." },
  { id: 2, author: "David Lee", date: "May 17, 2023", content: "I'm fascinated by the science behind perfumery. It's amazing how perfumers can create such complex scents. Do you have any recommendations for books on this topic?" }
];

function BlogContent() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.author && newComment.content) {
      const comment = {
        id: comments.length + 1,
        ...newComment,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      };
      setComments(prev => [...prev, comment]);
      setNewComment({ author: '', content: '' });
    }
  };

  return (
    <div style={styles.container}>
      <article style={styles.article}>
        <h1 style={styles.title}>{blogPost.title}</h1>
        <p style={styles.date}>{blogPost.date}</p>
        <img src={blogPost.image} alt="Perfume bottles" style={styles.image} />
        <div dangerouslySetInnerHTML={{ __html: blogPost.content }} style={styles.content} />
      </article>

      <section style={styles.commentsSection}>
        <h2 style={styles.commentsTitle}>Comments</h2>
        {comments  .sort((a, b) => new Date(b.date) - new Date(a.date)) // Trie les commentaires par date descendante
  .map(comment => (
          <div key={comment.id} style={styles.comment}>
            <h3 style={styles.commentAuthor}>{comment.author}</h3>
            <p style={styles.commentDate}>{comment.date}</p>
            <p style={styles.commentContent}>{comment.content}</p>
          </div>
        ))}
      </section>

      <form onSubmit={handleSubmitComment} style={styles.form}>
        <h2 style={styles.formTitle}>Add a Comment</h2>
        <div style={styles.formGroup}>
          <label htmlFor="author" style={styles.label}>Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newComment.author}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>Comment:</label>
          <textarea
            id="content"
            name="content"
            value={newComment.content}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit Comment</button>
      </form>
    </div>
  );
}
function BlogContent1() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.author && newComment.content) {
      const comment = {
        id: comments.length + 1,
        ...newComment,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      };
      setComments(prev => [...prev, comment]);
      setNewComment({ author: '', content: '' });
    }
  };

  return (
    <div style={styles.container}>
      <article style={styles.article}>
        <h1 style={styles.title}>{blogPost1.title}</h1>
        <p style={styles.date}>{blogPost1.date}</p>
        <img src={blogPost1.image} alt="Perfume bottles" style={styles.image} />
        <div dangerouslySetInnerHTML={{ __html: blogPost1.content }} style={styles.content} />
      </article>

      <section style={styles.commentsSection}>
        <h2 style={styles.commentsTitle}>Comments</h2>
        {comments.sort((a, b) => new Date(b.date) - new Date(a.date)) // Trie les commentaires par date descendante
  .map(comment => (
          <div key={comment.id} style={styles.comment}>
            <h3 style={styles.commentAuthor}>{comment.author}</h3>
            <p style={styles.commentDate}>{comment.date}</p>
            <p style={styles.commentContent}>{comment.content}</p>
          </div>
        ))}
      </section>

      <form onSubmit={handleSubmitComment} style={styles.form}>
        <h2 style={styles.formTitle}>Add a Comment</h2>
        <div style={styles.formGroup}>
          <label htmlFor="author" style={styles.label}>Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newComment.author}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>Comment:</label>
          <textarea
            id="content"
            name="content"
            value={newComment.content}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit Comment</button>
      </form>
    </div>
  );
}
function BlogContent2() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.author && newComment.content) {
      const comment = {
        id: comments.length + 1,
        ...newComment,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      };
      setComments(prev => [...prev, comment]);
      setNewComment({ author: '', content: '' });
    }
  };

  return (
    <div style={styles.container}>
      <article style={styles.article}>
        <h1 style={styles.title}>{blogPost2.title}</h1>
        <p style={styles.date}>{blogPost2.date}</p>
        <img src={blogPost2.image} alt="Perfume bottles" style={styles.image} />
        <div dangerouslySetInnerHTML={{ __html: blogPost2.content }} style={styles.content} />
      </article>

      <section style={styles.commentsSection}>
        <h2 style={styles.commentsTitle}>Comments</h2>
        {comments.sort((a, b) => new Date(b.date) - new Date(a.date)) // Trie les commentaires par date descendante
  .map(comment => (
          <div key={comment.id} style={styles.comment}>
            <h3 style={styles.commentAuthor}>{comment.author}</h3>
            <p style={styles.commentDate}>{comment.date}</p>
            <p style={styles.commentContent}>{comment.content}</p>
          </div>
        ))}
      </section>

      <form onSubmit={handleSubmitComment} style={styles.form}>
        <h2 style={styles.formTitle}>Add a Comment</h2>
        <div style={styles.formGroup}>
          <label htmlFor="author" style={styles.label}>Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newComment.author}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>Comment:</label>
          <textarea
            id="content"
            name="content"
            value={newComment.content}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit Comment</button>
      </form>
    </div>
  );
}
function BlogContent3() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.author && newComment.content) {
      const comment = {
        id: comments.length + 1,
        ...newComment,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      };
      setComments(prev => [...prev, comment]);
      setNewComment({ author: '', content: '' });
    }
  };

  return (
    <div style={styles.container}>
      <article style={styles.article}>
        <h1 style={styles.title}>{blogPost3.title}</h1>
        <p style={styles.date}>{blogPost3.date}</p>
        <img src={blogPost3.image} alt="Perfume bottles" style={styles.image} />
        <div dangerouslySetInnerHTML={{ __html: blogPost3.content }} style={styles.content} />
      </article>

      <section style={styles.commentsSection}>
        <h2 style={styles.commentsTitle}>Comments</h2>
        {comments.sort((a, b) => new Date(b.date) - new Date(a.date)) // Trie les commentaires par date descendante
  .map(comment => (
          <div key={comment.id} style={styles.comment}>
            <h3 style={styles.commentAuthor}>{comment.author}</h3>
            <p style={styles.commentDate}>{comment.date}</p>
            <p style={styles.commentContent}>{comment.content}</p>
          </div>
        ))}
      </section>

      <form onSubmit={handleSubmitComment} style={styles.form}>
        <h2 style={styles.formTitle}>Add a Comment</h2>
        <div style={styles.formGroup}>
          <label htmlFor="author" style={styles.label}>Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newComment.author}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>Comment:</label>
          <textarea
            id="content"
            name="content"
            value={newComment.content}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit Comment</button>
      </form>
    </div>
  );
}
function BlogContent4() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.author && newComment.content) {
      const comment = {
        id: comments.length + 1,
        ...newComment,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      };
      setComments(prev => [...prev, comment]);
      setNewComment({ author: '', content: '' });
    }
  };

  return (
    <div style={styles.container}>
      <article style={styles.article}>
        <h1 style={styles.title}>{blogPost4.title}</h1>
        <p style={styles.date}>{blogPost4.date}</p>
        <img src={blogPost4.image} alt="Perfume bottles" style={styles.image} />
        <div dangerouslySetInnerHTML={{ __html: blogPost4.content }} style={styles.content} />
      </article>

      <section style={styles.commentsSection}>
        <h2 style={styles.commentsTitle}>Comments</h2>
        {comments.sort((a, b) => new Date(b.date) - new Date(a.date)) // Trie les commentaires par date descendante
          .map(comment => (
          <div key={comment.id} style={styles.comment}>
            <h3 style={styles.commentAuthor}>{comment.author}</h3>
            <p style={styles.commentDate}>{comment.date}</p>
            <p style={styles.commentContent}>{comment.content}</p>
          </div>
        ))}
      </section>

      <form onSubmit={handleSubmitComment} style={styles.form}>
        <h2 style={styles.formTitle}>Add a Comment</h2>
        <div style={styles.formGroup}>
          <label htmlFor="author" style={styles.label}>Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newComment.author}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>Comment:</label>
          <textarea
            id="content"
            name="content"
            value={newComment.content}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit Comment</button>
      </form>
    </div>
  );
}
function BlogContent5() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.author && newComment.content) {
      const comment = {
        id: comments.length + 1,
        ...newComment,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      };
      setComments(prev => [...prev, comment]);
      setNewComment({ author: '', content: '' });
    }
  };

  return (
    <div style={styles.container}>
      <article style={styles.article}>
        <h1 style={styles.title}>{blogPost5.title}</h1>
        <p style={styles.date}>{blogPost5.date}</p>
        <img src={blogPost5.image} alt="Perfume bottles" style={styles.image} />
        <div dangerouslySetInnerHTML={{ __html: blogPost5.content }} style={styles.content} />
      </article>

      <section style={styles.commentsSection}>
        <h2 style={styles.commentsTitle}>Comments</h2>
        {comments.sort((a, b) => new Date(b.date) - new Date(a.date)) // Trie les commentaires par date descendante
  .map(comment => (
          <div key={comment.id} style={styles.comment}>
            <h3 style={styles.commentAuthor}>{comment.author}</h3>
            <p style={styles.commentDate}>{comment.date}</p>
            <p style={styles.commentContent}>{comment.content}</p>
          </div>
        ))}
      </section>

      <form onSubmit={handleSubmitComment} style={styles.form}>
        <h2 style={styles.formTitle}>Add a Comment</h2>
        <div style={styles.formGroup}>
          <label htmlFor="author" style={styles.label}>Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newComment.author}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>Comment:</label>
          <textarea
            id="content"
            name="content"
            value={newComment.content}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit Comment</button>
      </form>
    </div>
  );
}
const Contents = {BlogContent, BlogContent1 , BlogContent2 , BlogContent3 ,BlogContent4 ,BlogContent5};
export default Contents;


const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  article: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5em',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  date: {
    color: '#7f8c8d',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  content: {
    lineHeight: '1.6',
    '& h2': {
      fontSize: '1.8em',
      color: '#2c3e50',
      marginTop: '30px',
      marginBottom: '15px',
    },
    '& p': {
      marginBottom: '15px',
    },
  },
  commentsSection: {
    marginTop: '40px',
    borderTop: '1px solid #ecf0f1',
    paddingTop: '20px',
  },
  commentsTitle: {
    fontSize: '1.8em',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  comment: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
  },
  commentAuthor: {
    fontSize: '1.2em',
    color: '#2c3e50',
    marginBottom: '5px',
  },
  commentDate: {
    color: '#7f8c8d',
    fontSize: '0.9em',
    marginBottom: '10px',
  },
  commentContent: {
    lineHeight: '1.4',
  },
  form: {
    marginTop: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '20px',
  },
  formTitle: {
    fontSize: '1.8em',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#2c3e50',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #bdc3c7',
    fontSize: '1em',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #bdc3c7',
    fontSize: '1em',
    minHeight: '100px',
  },
  submitButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#2980b9',
    },
  },
};