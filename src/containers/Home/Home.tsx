import QuotesByCategory from "../../components/ QuotesByCategory/QuotesByCategory.tsx";
import React, { useState } from 'react';
import { IQuotes } from "../../types";

interface HomeProps {
  onEdit: (quote: IQuotes) => void;
}
const Home: React.FC<HomeProps> = ({ onEdit }) => {
  const [currentCategory,setCurrentCategory] = useState<string>('');
  const category = [
    { title: "Star Wars", id: "star-wars" },
    { title: "Famous People", id: "famous-people" },
    { title: "Saying", id: "saying" },
    { title: "Humour", id: "humour" },
    { title: "Motivational", id: "motivational" },
  ];



  return (
    <div className="container row justify-content-between mt-5 px-0">
      <div className="col-3">
        <div className="fs-4">
          <ul className="nav flex-column text-start ">
            <li className="nav-item">
              <a className="nav-link active">
                All
              </a>
            </li>
            {category.map((item) => (
              <li key={item.id} className="nav-item">
                <a className="nav-link" onClick={()=>setCurrentCategory(item.title)}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-9">
        {" "}
        <QuotesByCategory category = {currentCategory} onEdit={onEdit}/>
      </div>
    </div>
  );
};

export default Home;
