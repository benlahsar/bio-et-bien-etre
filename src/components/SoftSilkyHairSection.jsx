import React from 'react';
import img1 from '../assets/img1.jpg';

function SoftSilkyHairArticle() {
    return (
        <article className="relative bg-wite flex items-center justify-center py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                
                {/* Section Texte avec un Fond */}
                <div className="flex flex-col justify-center bg-primary p-8 rounded-lg">
                    <h2 
                        className="text-5xl font-semibold text-fourth mb-4 transition-transform transform hover:scale-105 hover:text-secondary cursor-pointer" 
                        style={{ fontFamily: 'cursive' }}
                    >
                        Soft & Silky Hair
                    </h2>
                    <p className="text-lg text-white">
                        Marnim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                    </p>
                </div>

                {/* Section Image en Arrière-Plan avec Largeur Ajustée */}
                <div 
                    className="relative flex items-center justify-center bg-cover bg-center rounded-lg w-full md:w-2/3"
                    style={{
                        backgroundImage: `url(${img1})`,
                        height: '600px', width: '600px', // Ajustez la hauteur selon vos besoins
                    }}
                    
                >
                    {/* L'icône de lecture a été supprimée */}
                </div>
            </div>
        </article>
    );
}

export default SoftSilkyHairArticle;
