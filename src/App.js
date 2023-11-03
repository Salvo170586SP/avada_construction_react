import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavMenuSM from "./components/NavMenuSM";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavMenuSM />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-sono" element={<About />} />
        <Route path="/contattami" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
