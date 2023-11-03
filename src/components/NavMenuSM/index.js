import "./style.css";
import { Link } from "react-router-dom";

const NavMenuSM = () => {
  return (
    <>
      <div id="NavMenuSM">
        <div className="container">
          <div className="row">
            <nav className="col-12 d-flex flex-column">
              <ul className="d-flex flex-column justify-content-end align-items-center ">
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
              <button
                className="btn rounded-0 btn-warning"
                style={{ fontSize: "14px" }}
              >
                GET QUOTE
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenuSM;
