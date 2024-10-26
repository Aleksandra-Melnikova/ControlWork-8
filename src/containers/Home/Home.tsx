import SideNavigation from "../../components/SideNavigation/SideNavigation.tsx";
import QuotesByCategory from "../../components/ QuotesByCategory/QuotesByCategory.tsx";
import React from "react";
import { IQuotes } from "../../types";

interface HomeProps {
  onEdit: (quote: IQuotes) => void;
}
const Home: React.FC<HomeProps> = ({ onEdit }) => {
  return (
    <div className="container row justify-content-between mt-5 px-0">
      <div className="col-3">
        <SideNavigation />
      </div>
      <div className="col-9">
        {" "}
        <QuotesByCategory onEdit={onEdit} />
      </div>
    </div>
  );
};

export default Home;
