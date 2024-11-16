import React from 'react';
import img2 from '../assets/img2.jpg';

const CustomerFeedback = () => {
  return (

    <section className="text-center py-12 bg-white text-[#6C8E6D]-800">
    < div className="bg-primary py-20 px-8 flex flex-col items-center max-w-lg mx-auto">
        <h2 className="text-4xl font-cursive text-secondary -800 mb-6">Customer Feedback</h2>
        
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
          <img 
            src={img2} 
            alt="Customer" 
            className="w-80 h-50 border-2 border-gray-300 mb-4 md:mb-0"
          />
          
          <div className="text-center md:text-left">
            <p className="text-gray-600 mb-4">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quia ipsa sunt et iusto recusandae ut accusamus, voluptate possimus dolores eum eveniet sed explicabo tempora numquam reprehenderit distinctio. Quo alias animi esse ea corporis modi impedit maxime dolore fugiat dignissimos totam incidunt, iste, reiciendis molestiae natus fuga illo. Dolorem, iusto.
            </p>
            <p className="text-gray-800 font-semibold">Andros - Manager</p>
          </div>
        </div>
      </div>
  </section>
 
  );
};

export default CustomerFeedback;
