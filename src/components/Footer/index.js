import "./style.css";
import logo from "../../images/construction_logo.png";
import logoTweet from "../../images/3a74ce3d0532b7773b174c45ca3bd05a_normal.png";
import map from "../../images/science_thumbnail-600x450.jpg";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="FooterTop">
          <div className="container-fluid px-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-3 mb-4">
                <img src={logo} className="logo mb-4" alt="logo" />
                <p>
                  We are specialist the construction of unique and exlusive
                  properties. Our work insires, We pride ourselves on delivering
                  outstading quality and design for leading clients across the
                  world.
                </p>
                <button className="btn btn-warning rounded-0 px-3">
                  LEARN MORE
                </button>
              </div>
              <div className="col-12 col-md-3 mb-4">
                <h6 className="text-warning fw-bold mb-5">LATEST TWEETS</h6>
                <div className="row">
                  <div className="col-2">
                    <img
                      src={logoTweet}
                      className="rounded-circle"
                      alt="logo"
                    />
                  </div>
                  <div className="col-10 text-light">
                    <div className="d-flex justify-content-between">
                      <h6>ThemeFusion</h6>
                      <i className="logoT fa-brands fa-twitter"></i>
                    </div>
                    <small>@Theme_Fusion</small>
                    <p
                      className="text-light"
                      style={{ textAlign: "justify", fontSize: "13px" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <img src={map} className="img-fluid" alt="logo" />
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <i className="logoT fa-solid fa-heart me-3"></i>
                        <i className="fa-solid logoT fa-up-right-from-square"></i>
                      </div>
                      <span
                        className="fw-bold"
                        style={{ fontSize: "13px", color: "#525252" }}
                      >
                        22h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 mb-4 px-5 text-light">
                <h6 className="text-warning fw-bold mb-5">CONTACT US TODAY</h6>
                <ul className="d-flex m-0 p-0 flex-column align-items-end justify-content-center">
                  <li>
                    Corporate Location <br />
                    1600 Amphiteatre Parkaway
                    <br />
                    London WC1 1BA
                  </li>
                  <li>
                    Residential Location <br />
                    9521 Broadsberry Avenue <br />
                    Paddington RC7 9ZA
                  </li>
                  <li>1.800.458.556 / 1.800.532.2112</li>
                  <li>info@your-dommain.com</li>
                  <li>Monday - Friday: 9:00 AM -6:00 PM</li>
                  <li>Saturday - Sunday: 9:00 AM -12:00 PM</li>
                </ul>
              </div>
              <div className="col-12 col-md-3 mb-4">
                <h6 className="text-warning fw-bold mb-5">FIND US</h6>
                <img src={map} className="img-fluid" alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div id="footerBottom">
          <div className="container-fluid h-100">
            <div className="row align-items-center justify-content-center h-100">
              <div className="col-12 col-md-6">
                <p>
                  COPYRIGHT 2012 -2015 AVADA THEME BY{" "}
                  <span className="text-light">THEME FUSION</span> | ALL RIGHTS
                  RESERVED | POWERBY{" "}
                  <span className="text-light">WORDPRESS</span>
                </p>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-end">
                <i className="fa-brands logoT fa-facebook mx-2"></i>
                <i className="fa-brands logoT fa-twitter mx-2"></i>
                <i className="fa-brands logoT fa-youtube mx-2"></i>
                <i className="fa-brands logoT fa-instagram mx-2"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
