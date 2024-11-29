import React from "react";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";

const feedbacks = [
  { image: img11, text: "Lorem ipsum dolor sit amet...", name: "SANA - Manager" },
  { image: img12, text: "Repellendus, quia ipsa sunt...", name: "AMIN - Client" },
  { image: img13, text: "Fantastic product!", name: "ZINEB - Developer" },
  { image: img14, text: "Great experience!", name: "ABD ERRAHMAN - Designer" },
  { image: img15, text: "Best purchase!", name: "NIZAR - Entrepreneur" },
  { image: img16, text: "Wonderful service!", name: "SALMA- Teacher" },
  
];

const CustomerFeedback = () => {
  return (
    <div className="bg-primary-300 py-10 overflow-hidden relative">
      <h1 className="text-2xl font-bold text-center mb-6">Customer Feedback</h1>
      <div className="animate-horizontal-scroll">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="bg-primary-400 p-6 rounded-md shadow-lg text-center mx-2 min-w-[250px]"
          >
            <img
              src={feedback.image}
              alt={feedback.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-700 mb-4">{feedback.text}</p>
            <p className="font-semibold text-gray-900">{feedback.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
