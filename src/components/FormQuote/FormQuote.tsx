import React, { useEffect, useState } from "react";
import { IQuoteForm } from "../../types";

interface IFormAddNewPost {
  title: string;
  formToOneQuote?: IQuoteForm;
  submitForm: (quote: IQuoteForm) => void;
}
const initialForm = {
  author: "",
  category: "",
  quoteText: "",
};
const FormQuote: React.FC<IFormAddNewPost> = ({
  title,
  formToOneQuote,
  submitForm,
}) => {
  const [form, setForm] = useState<IQuoteForm>({
    ...initialForm,
  });

  const category = [
    { title: "Star Wars", id: "star-wars" },
    { title: "Famous People", id: "famous-people" },
    { title: "Saying", id: "saying" },
    { title: "Humour", id: "humour" },
    { title: "Motivational", id: "motivational" },
  ];

  useEffect(() => {
    if (formToOneQuote) {
      setForm((prevState) => ({
        ...prevState,
        ...formToOneQuote,
      }));
    }
  }, [formToOneQuote]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      form.author.trim().length > 0 &&
      form.category.length > 0 &&
      form.quoteText
    ) {
      const data = {
        ...form,
      };
      submitForm(data);

      if (!formToOneQuote) {
        setForm({ ...initialForm });
      }
    } else {
      alert("Fill in all fields");
    }
  };
  const onChangeField = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">{title + " quote"}</h2>

      <div className="form-add-new-post p-5 border border-black-200 rounded-3 fs-4 mt-5 text-start">
        <form onSubmit={onSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="category" className="form-label fs-4">
              {" "}
              Category
            </label>

            {category.length > 0 ? (
              <select
                required
                id="category"
                value={form.category}
                onChange={onChangeField}
                name="category"
                className="form-select"
              >
                <option className="fs-5" value="" disabled>
                  Select a category
                </option>
                {category.map((c) => (
                  <option key={c.title} value={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              {" "}
              Author
            </label>
            <input
              className="mb-3 form-control"
              id="author"
              name="author"
              type="text"
              value={form.author}
              onChange={onChangeField}
              required
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="quoteText" className="form-label d-block">
              Quote text:
            </label>
            <textarea
              className="text-area mt-2 border border-black-200 rounded-3 w-100"
              id="quoteText"
              name="quoteText"
              value={form.quoteText}
              onChange={onChangeField}
              required
            />
          </div>
          <button className="ps-4 pe-4 btn btn-info" type="submit">
            Save
          </button>{" "}
        </form>
      </div>
    </div>
  );
};

export default FormQuote;
