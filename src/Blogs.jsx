import styled from "styled-components";
import BlogPost from "./AffBlogs";

const BlogPosts = [
    {
        id: 1,
        title: "Huile Bio-Oil",
        date: "2024-10-31",
        summary: "BIO OIL HUILE REGENERANTE 125.",
        image: "https://bpara.ma/wp-content/uploads/2022/03/bio-oil-huile-regenerante-125ml.jpg",
        link: "/Zit",
    },
    {
        id: 2,
        title: "Huile Sesame",
        date: "2024-10-31",
        summary: "Huile de Sesame.",
        image: "https://lotusbio.ma/wp-content/uploads/2020/11/huile-de-sesame-Sesame-oil-huile-vegetale-de-sesame-3.jpg",
        link: "/Pikalat",
    },
    {
        id: 3,
        title: "Argania Bio Oil",
        date: "2024-10-30",
        summary: "Pour arriver à temps à la classe.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaixP4SKe6Oty_Q8nkwcJga-9LeVyt6scjg&s",
        link: "/Argania",
    },
    {
        id: 4,
        title: "Huile Lavande",
        date: "2024-11-01",
        summary: "100 ML Huile d'argane.",
        image: "https://lotusbio.ma/wp-content/uploads/2020/11/huile-essentielle-de-lavande-lavender-essential-oil.jpg",
        link: "/OuedSousse", // Ajoutez l'URL ici
    },
    {
        id: 5,
        title: "REVOX",
        date: "2024-10-30",
        summary: "Pour arriver à temps à la classe.",
        image: "https://globalpara.ma/cdn/shop/files/BioRosehipOilbote_i4_i4_1024x1024_7e43732e-ca0b-49c3-97ac-7cc99fa9e0ea_1024x.webp?v=1719745464",
        link: "/Revox",
    },
    {
        id: 6,
        title: "Huile dolive",
        date: "2024-11-01",
        summary: "Zit WAD SOUSSE MN TA9ALIDNA L3ARI9A.",
        image: "https://lotusbio.ma/wp-content/uploads/2020/11/huile-essentielle-de-cypres-Cypress-essential-oil-huile-de-cypres.jpg",
        link: "/HuileOlive",
    },
];

const Categories = [
    {
        id: 1,
        title: "Huile Zineb",
        link: '<a href="https://ZinebAitBenAli/" target="_blank" style="text-decoration:none;">Huile Zineb Huile</a>',
    },
    {
        id: 2,
        title: "Huile Salma",
        link: '<a href="https://SalmaBenSaoud/" target="_blank" style="text-decoration:none;">Huile Salma</a>',
    },
    {
        id: 3,
        title: "Huile Amine",
        link: '<a href="https://AmineAkhfaMani/" target="_blank" style="text-decoration:none;">Huile Amine</a>',
    },
    {
        id: 4,
        title: "Huile Nizar",
        link: '<a href="https://NizarBenLahsar/" target="_blank" style="text-decoration:none;">Huile Nizar</a>',
    },
    {
        id: 5,
        title: "Slimani's Oil",
        link: '<a href="https://www.facebook.com/AbderrahmaneSlimani123" target="_blank" style="text-decoration:none;">Slimani</a>',
    },
];

function BlogPage() {
    const sortedPosts = BlogPosts.slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    // const navigate = useNavigate();

    const BlogsTrier = BlogPosts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

    const ContainerL = styled.div`
        padding: 10px;
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: sticky;
        top: 10px;
        max-height: 100vh;
        overflow-y: auto;
    `;

    const ContainerR = styled.div`
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        width: 65%;
    `;

    const BigContainer = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 10px;
        width: 95%;
    `;

    const SectionNew = styled.div`
        width: 90%;
        padding: 10px;
        text-align: center;
    `;

    const SectionCat = styled.div`
        width: 90%;
        padding: 10px;
        text-decoration: none;
    `;

    const ListItem = styled.li`
        display: flex;
        align-items: flex-start;
        margin: 10px 0;
    `;

    const Image = styled.img`
        width: 60px;
        height: 60px;
        border: 1px solid blue;
        margin-right: 10px;
        border-radius: 8px;
        object-fit: cover;
        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            border-color: #0073e6;
        }
    `;

    const TextContainer = styled.div`
        display: flex;
        flex-direction: column;
        text-align: left;
    `;

    const Title = styled.h2`
        margin: 0;
        font-size: 1rem;
    `;

    const Summary = styled.p`
        margin: 0;
        font-size: 0.9rem;
        color: #666;
    `;

    return (
        <>
            <BigContainer>
                <ContainerL>
                    <h1>Recent articles</h1>
                    <hr style={{ width: "90%", border: "1px solid #ccc" }} />
                    <SectionNew>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {sortedPosts.map(post => (
                                <ListItem key={post.id}>
                                    <Image src={post.image} alt={post.title} />
                                    <TextContainer>
                                        <Title>
                                            <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                                                {post.title}
                                            </a>
                                        </Title>
                                        <Summary>{post.summary}</Summary>
                                    </TextContainer>
                                </ListItem>
                            ))}
                        </ul>
                    </SectionNew>

                    <hr style={{ width: "90%", border: "1px solid #ccc" }} />
                    <h1>Categories</h1>
                    <SectionCat>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {Categories.map(categorie => (
                                <li key={categorie.id}>
                                    <h3>
                                        <div dangerouslySetInnerHTML={{ __html: categorie.link }} />
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </SectionCat>
                </ContainerL>
                <ContainerR>
                    {BlogsTrier.map(post => (
                        <BlogPost key={post.id} post={post} />
                    ))}
                </ContainerR>
            </BigContainer>
        </>
    );
}

export default BlogPage;
