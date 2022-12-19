import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Produits from "./pages/Produits";
import Soutien from "./pages/Soutien";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "Les Pâtissières",
    href: "lespatissieres.re",
    description:
      "Nous avons décliné pour vous les saveurs péi en version salée et sucrée. Pâtisserie française créolisée, restauration du midi végétarienne aux épices et aromates locaux. Les fruits et légumes sont locaux et de saison, les pâtisseries sucrées et salées sont des créations.",
  };
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Header helmet={helmet} />
        <Routes>
          <Route path="/" element={<Home helmet={helmet} />} />
          <Route path="/Produits" element={<Produits helmet={helmet} />} />
          <Route path="/Soutien" element={<Soutien helmet={helmet} />} />
          <Route path="/Contact" element={<Contact helmet={helmet} />} />
          <Route path="/Mentions" element={<Mentions />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
