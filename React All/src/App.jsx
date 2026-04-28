import Nav from "./components/Nav";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ProjDtl from "./pages/ProjDtl";

const App = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProjDtl />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
