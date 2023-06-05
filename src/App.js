import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <div className="content-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <div className="footer-wrap">
        <Footer />
      </div>
    </div>
  );
};

export default App;

// width="50"
// height="50"
// viewBox="0, 0, 400,400">
