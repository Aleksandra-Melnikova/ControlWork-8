import React, { useState } from "react";
import { IPostForm } from '../../types';

// const initialForm = {
//   author: "",
//   category: "",
//   quoteText: ""
// };

interface IFormAddNewPost {
  title: string;
  // formToOnePost?: IPostForm;
  // submitForm: (quote: IGetQuote) => void;
}

const FormQuote: React.FC<IFormAddNewPost> = ({
  title,
  // formToOnePost,
  // submitForm,
}) => {
  const [form, setForm] = useState<IPostForm>({
    author:'',
    category: '',
    quoteText:'',
  });
  const category =
  [
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous People', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humour', id: 'humour'},
    {title: 'Motivational', id: 'motivational'},
  ];


  //
  // useEffect(() => {
  //   if (formToOnePost) {
  //     setForm((prevState) => ({
  //       ...prevState,
  //       ...formToOnePost,
  //     }));
  //   }
  // }, [formToOnePost]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.author.trim().length > 0 && form.category.length > 0 && form.quoteText ) {
      // const data = {
      //   quote: { ...form },
      //
      // };
      // submitForm(data);

      // if (!formToOnePost) {
      //   setForm({  author: "",
      //     category: "",
      //     quoteText: "" });
      // }
    } else {
      alert("Fill in all fields");
    }
  };
  const onChangeField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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
    <>

        <h2 className="text-center mt-5">{title + " new quote"}</h2>

      <div className="form-add-new-post p-5 border border-black-200 rounded-3 fs-4 mt-5 text-start">
        <form onSubmit={onSubmit}>

          <div className="form-group mb-3">
            <label htmlFor="category" className="form-label fs-4">
              {' '}
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
                <option className='fs-5' value="" disabled>
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
              {' '}
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
          </button>
          {" "}
        </form>
      </div>
    </>
  );
};

export default FormQuote;
