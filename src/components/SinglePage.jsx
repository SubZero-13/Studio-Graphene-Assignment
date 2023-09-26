import React from "react";
import "../Styles/singlepage.css";

const SinglePage = (el) => {
  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      const truncatedText = words.slice(0, maxWords).join(" ");
      return truncatedText;
    }
    return text;
  };
  return (
    <div key={el.id} className="product-container">
      <img className="api-image" src={el.image} alt="product" />
      <p className="pd-name">{truncateText(el.title, 2)}</p>
      <p className="pd-des">{truncateText(el.description, 13)}</p>
      <p className="pd-price">${el.price}</p>
    </div>
  );
};
export default SinglePage;
