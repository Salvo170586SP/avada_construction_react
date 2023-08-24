import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/construction_logo.png";

function App() {
  return (
    <div className="App">
      <header className="shadow container-fluid position-fixed d-flex align-items-center justify-content-between w-100">
        <div className="row w-100">
          <figure className="col-2">
            <img width={220} src={logo} alt="logo" />
          </figure>

          <nav className="d-flex justify-content-end align-items-center col-10">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/chi-sono">About</Link>
              </li>
              <li>
                <Link to="/contattami">Services</Link>
              </li>
              <li>
                <Link to="/contattami">Work</Link>
              </li>
              <li>
                <Link to="/contattami">Article</Link>
              </li>
            </ul>
            <button className="btn rounded-0 btn-warning" style={{ fontSize: '14px' }}>GET QUOTE</button>
          </nav>
        </div>
        <div className="arrow"></div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-sono" element={<About />} />
        <Route path="/contattami" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
