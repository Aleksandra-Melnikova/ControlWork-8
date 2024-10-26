import { useCallback, useEffect, useState } from 'react';
import { IQuotes } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import OneQuote from './OneQuote/OneQuote.tsx';
import Spinner from '../UI/Spinner/Spinner.tsx';


const QuotesByCategory = () => {
  const [quotes, setQuotes] = useState<IQuotes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response: { data: IQuotes } = await axiosAPI<IQuotes>("quotes.json");
      if (response) {
        const postResponse = response.data;
        const postResponseNew = Object.entries(postResponse);
        const array: IQuotes[] = [];
        for (let i = 0; i < postResponseNew.length; i++) {
          const obj: IQuotes = {
            id: postResponseNew[i][0],
            author: postResponseNew[i][1].quote.author,
            quoteText: postResponseNew[i][1].quote.quoteText,
          };

          array.push(obj);
        }

        setQuotes([...array]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);



return (
  <>
    {loading ? (
      <Spinner />
    ) : (
      <>
        <div className="container">
          {quotes.map((quote) => (
            <OneQuote key={quote.id} quoteText={quote.quoteText} author={quote.author}/>
          ))}
        </div>
      </>
    )}
  </>
);
}
;

export default QuotesByCategory;