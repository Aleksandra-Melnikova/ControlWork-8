import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import SubmitNewQuote from "./containers/SubmitNewQuote/SubmitNewQuote.tsx";
import EditQuote from "./containers/EditQuote/EditQuote.tsx";
import { IQuotes } from "./types";

const App = () => {
  const navigateEdit = useNavigate();
  const onEdit = (quote: IQuotes) => {
    navigateEdit(`quotes/${quote.id}/edit`);
  };

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4 main-container">
        <Routes>
          {" "}
          <Route path={"/quotes"} element={<Home onEdit={onEdit} />} />
          <Route path={"/"} element={<Home onEdit={onEdit} />} />
          <Route path="/add-quote" element={<SubmitNewQuote />} />
          <Route path="/quotes/:id/edit" element={<EditQuote />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
