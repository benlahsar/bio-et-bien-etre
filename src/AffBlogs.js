import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    flex: 1 1 45%;
    margin-left: 5px;
    max-height: 470px;
    height: 470px;
`;

const PostImage = styled.img`
    width: 100%;
    height:300px;
    max-width: 300px;
    max-height: 300px;
     object-fit: cover;
    border-radius: 8px;
    &:hover {
        transform: scale(1.05); 
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
        border-color: #0073e6; 
    }
`;

const PostTitle = styled.h3`
    font-size: 1.2rem;
    margin: 10px 0;
    text-align: center;
`;

const PostDate = styled.p`
    color: #888;
    font-size: 0.9rem;
`;

const PostSummary = styled.p`
    font-size: 1rem;
    color: #333;
`;

const LirePlus = styled.a`
    text-decoration: underline;
    color: #0073e6; // Couleur du lien
    font-size: 1.1rem; // Taille du texte
    margin-top: 10px; // Espace au-dessus
    &:hover {
        color: #0056b3; // Couleur au survol
    }
`;

const BlogPost = ({ post }) => {
    return (
        <PostContainer>
            <PostImage src={post.image} alt={post.title} />
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
            <PostSummary>{post.summary}</PostSummary>
            <LirePlus href={post.link} target="_blank" rel="noopener noreferrer">
                Lire Plus
            </LirePlus>
        </PostContainer>
    );
};

export default BlogPost;
