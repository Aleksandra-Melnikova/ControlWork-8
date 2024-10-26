import React, { useCallback, useEffect, useState } from "react";
import { IQuoteFormModifications, IQuotes } from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import OneQuote from "./OneQuote/OneQuote.tsx";
import Spinner from "../UI/Spinner/Spinner.tsx";

interface QuotesByCategoryProps {
  onEdit: (quote: IQuotes) => void;
  category?: string;
}

const QuotesByCategory: React.FC<QuotesByCategoryProps> = ({
  onEdit,
  category,
}) => {
  const [quotes, setQuotes] = useState<IQuoteFormModifications[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (category: string) => {
    try {
      if (category === undefined) {
        category = "all";
      }
      setLoading(true);
      if (category === "all") {
        const response: { data: IQuoteFormModifications[] } =
          await axiosAPI<IQuoteFormModifications[]>("quotes.json");
        if (response) {
          const postResponseNew = Object.entries(response.data);
          const array: IQuoteFormModifications[] = [];
          for (let i = 0; i < postResponseNew.length; i++) {
            const obj: IQuoteFormModifications = {
              id: postResponseNew[i][0],
              author: postResponseNew[i][1].author,
              quoteText: postResponseNew[i][1].quoteText,
              category: postResponseNew[i][1].category,
            };

            array.push(obj);
          }
          setQuotes([...array]);
        }
      } else {
        const response: { data: IQuoteFormModifications[] } = await axiosAPI<
          IQuoteFormModifications[]
        >(`quotes.json/?orderBy="category"&equalTo="${category}"`);
        if (response) {
          const postResponseNew = Object.entries(response.data);
          const array: IQuoteFormModifications[] = [];
          for (let i = 0; i < postResponseNew.length; i++) {
            const obj: IQuoteFormModifications = {
              id: postResponseNew[i][0],
              author: postResponseNew[i][1].author,
              quoteText: postResponseNew[i][1].quoteText,
              category: postResponseNew[i][1].category,
            };

            array.push(obj);
          }
          setQuotes([...array]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (category) void fetchData(category);
  }, [fetchData, category]);

  const onDelete = async (quote: IQuotes) => {
    if (quote.id) {
      await axiosAPI.delete("quotes/" + quote.id + ".json");
      if (category) void fetchData(category);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {quotes.length > 0 ? (
            <div className="container">
              {quotes.map((quote) => (
                <OneQuote
                  onEdit={() => onEdit(quote)}
                  key={quote.id}
                  quoteText={quote.quoteText}
                  author={quote.author}
                  onDelete={() => onDelete(quote)}
                />
              ))}
            </div>
          ) : (
            <p>In this category no quotes</p>
          )}
        </>
      )}
    </>
  );
};
export default QuotesByCategory;
