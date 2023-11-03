import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../images/construction_logo.png";

const NavMenuSM = () => {
  return (
    <>
      <header className="shadow container-fluid position-fixed d-flex align-items-center justify-content-between w-100">
        <div className="row w-100">
          <figure className="col-2">
            <img width={220} src={logo} alt="logo" />
          </figure>

          <nav  className="d-flex justify-content-end align-items-center col-10">
          <button id="hamburgherBtn" className="btn">
          <i className="fa-solid fa-bars fa-2x"></i>
          </button>
            <ul id="navmenu">
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
              <button className="btn rounded-0 btn-warning" style={{ fontSize: '14px' }}>GET QUOTE</button>
            </ul>
            
          </nav>
        </div>
        <div className="arrow"></div>
      </header>
    </>
  );
};

export default NavMenuSM;
