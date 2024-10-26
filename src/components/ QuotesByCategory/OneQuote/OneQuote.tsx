import React from "react";


interface OneQuoteProps {
  quoteText: string;
  author: string;
  onEdit: (e:React.MouseEvent)=>void;
}

const OneQuote: React.FC<OneQuoteProps> = ({ quoteText, author, onEdit }) => {
  return (
    <div className="border border-1 border-secondary rounded-2 p-4 row mb-3 text-start justify-content-between align-items-start fs-4">
      <div className="col-9">
        <p>"{quoteText}"</p>
        <p>- {author}</p>
        <p> </p>
      </div>
      <button className="btn btn-outline-secondary col-1 ms-5" onClick={onEdit}>Edit</button>
      <button className="btn btn-close col-1 mt-2"></button>
    </div>
  );
};

export default OneQuote;
