import React from 'react';

interface OneQuoteProps {
  quoteText: string;
  author: string;
}

const OneQuote:React.FC<OneQuoteProps> = ({quoteText, author }) => {
  return (
    <div className='border border-1 border-secondary rounded-2 p-4 row'>
      <div className='col-9'>
<p>`"${quoteText}"`</p>
        <p>`- ${author}`</p>
        <p> </p>
      </div>
      <button className='btn btn-primary col-1'>Edit</button>
      <button className='btn btn-close col-1'></button>

    </div>
  );
};

export default OneQuote;