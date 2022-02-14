import ReactDOM from "react-dom";
import './index.scss';
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Content from "./pages/Content";
import Footer from "./pages/Footer";
import { generatePath } from "react-router";

var logementData = require('./json/logements.json');

export default function App() {
  return (
    <BrowserRouter>
    <div className="page">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />

          <Route path={'/logements/:id'} element={<Content />} />

          <Route path="*" element={<NoPage />} />

        </Route>

      </Routes>
    </div>
  <Footer/>

    </BrowserRouter>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
