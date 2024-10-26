import FormQuote from "../../components/FormQuote/FormQuote.tsx";
import { IGetQuote } from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const SubmitNewQuote = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const submitForm = async (quote: IGetQuote) => {
    try {
      setLoading(true);
      await axiosAPI.post("quotes.json", { ...quote });
      navigate("/");
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
        <FormQuote submitForm={submitForm} title="Submit" />
      )}
    </>
  );
};

export default SubmitNewQuote;
