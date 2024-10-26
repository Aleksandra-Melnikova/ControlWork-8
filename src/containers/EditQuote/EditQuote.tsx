
import FormQuote from '../../components/FormQuote/FormQuote.tsx';
import { IGetQuote, IQuoteForm, IQuotesModifications } from '../../types';
import { useNavigate, useParams } from 'react-router-dom';
import  { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI.ts';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';

const EditQuote = () => {
  const [quote, setQuote] = useState<IQuoteForm>();
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchOnePost = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const response: { data: IQuotesModifications } = await axiosAPI<IQuotesModifications>(
        "quotes/" + id + ".json",
      );

const result = response.data
      if (result) {
        const obj: IQuoteForm = {
            author: result.quote.author,
          quoteText: result.quote.quoteText,
          category: result.quote.category,
          id: result.quote.id,
        };
        setQuote(obj);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);
  console.log(quote)

  useEffect(() => {
    if (params.id) {
      void fetchOnePost(params.id);
    }
  }, [params.id, fetchOnePost]);
  console.log(params.id)

  const submitForm = async (quote: IGetQuote) => {
    try {
      if (params.id) {
        setLoading(true);
        await axiosAPI.put("quotes/" + params.id + ".json", { ...quote });
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };


return (
  <>
    {loading ? (
      <Spinner />
    ) : (
      <>
        {quote? (
          <>
            <FormQuote title="Edit" submitForm={submitForm} formToOneQuote={quote}/>
          </>
        ) : null}
      </>
    )}
  </>
);
};

export default EditQuote;