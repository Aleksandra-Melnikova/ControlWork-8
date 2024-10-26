import "./App.css";
import ToolBar from './components/ToolBar/ToolBar.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import SubmitNewQuote from './containers/SubmitNewQuote/SubmitNewQuote.tsx';

const App = () => {
  return <>
    <header>
      <ToolBar/>
    </header>
    <main className="container mt-4 main-container">
      <Routes>
        {" "}
        <Route
          path={"/quotes"}
          element={
            <Home />
          }
        />
        <Route
          path={"/"}
          element={
            <Home />
          }
        />
        <Route path="/add-quote" element={<SubmitNewQuote/>}/>
        {/*<Route path="/posts/:id/edit" element={<EditPost/>}/>*/}
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </main>
    {/*<footer className="bg-light footer">*/}
    {/*  <div className="container p-4 text-start fs-5 ps-5">*/}
    {/*    © A.Melnikova, 2024*/}
    {/*  </div>*/}
    {/*</footer>*/}
  </>;
};

export default App;
