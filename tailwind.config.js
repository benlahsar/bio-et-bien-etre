const { DiBlackberry } = require("react-icons/di");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
        colors: {
          primary: "#EFF5F2;",
          secondary: "#1F23", 
          third: "black",
          fourth:" #a2c3b0",  
        },  
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],  
      },
    },
 
  plugins: [],
};
