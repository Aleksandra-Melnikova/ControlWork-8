import React, { useCallback, useEffect, useState } from "react";
import { IQuoteFormModifications, IQuotes } from '../../types';
import axiosAPI from "../../axiosAPI.ts";
import OneQuote from "./OneQuote/OneQuote.tsx";
import Spinner from "../UI/Spinner/Spinner.tsx";


interface QuotesByCategoryProps {
  onEdit: (quote: IQuotes)=> void;
}


const QuotesByCategory:React.FC<QuotesByCategoryProps> = ({onEdit}) => {
  const [quotes, setQuotes] = useState<IQuoteFormModifications[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response: { data: IQuoteFormModifications []} =
        await axiosAPI<IQuoteFormModifications []>("quotes.json");
      if (response) {
        const postResponseNew = Object.entries(response.data);
        console.log(postResponseNew);
        const array: IQuoteFormModifications[] = [];
        for (let i = 0; i < postResponseNew.length; i++) {
          const obj:IQuoteFormModifications = {
            id: postResponseNew[i][0],
            author: postResponseNew[i][1].author,
            quoteText: postResponseNew[i][1].quoteText,
            category: postResponseNew[i][1].category,
          };

          array.push(obj);
        }

        setQuotes([...array]);
        console.log(quotes);
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

  const onDelete = async (quote: IQuotes) => {
    if (quote.id) {
      console.log(quote.id);
      await axiosAPI.delete("quotes/" + quote.id + ".json");
      void fetchData();
    }
  };



  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            {quotes.map((quote) => (
              <OneQuote
                onEdit={()=>onEdit(quote)}
                key={quote.id}
                quoteText={quote.quoteText}
                author={quote.author}
                onDelete={()=>onDelete(quote)}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default QuotesByCategory;
