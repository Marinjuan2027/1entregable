import React from "react";

const Quotebox = ({ quotes, index }) => {
  return (
    <div>
      <p>
        <i className="fa-solid fa-quote-left"></i>
        {quotes[index].quote}
      </p>
      <p className="author">{quotes[index].author}</p>
    </div>
  );
};

export default Quotebox;
