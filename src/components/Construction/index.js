import "./style.css";
import CardC from "../CardConstructions";
import CardW from "../CardWork";
import CardV from "../CardValues";
import CardN from "../CardNews";
import logoTestimonial from "../../images/home-testimonial-113165296.jpg";
import itemsC from "../../ItemsC.js";
import itemsW from "../../itemsW.js";
import itemsV from "../../itemsV.js";
import itemsN from "../../itemsN.js";

const Construcition = () => {
  return (
    <>
      <section id="construction">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 text-center bg-warning p-5 position-relative">
              <h2 style={{ fontSize: "25px" }}>
                Do You Have A Construction Project We Can Help With?
              </h2>
              <button id="getQuotebtn"
                className="btn btn-dark border-light border-2 rounded-0 mx-2 px-4 py-2 position-absolute"
                style={{ left: "43%", top: "115px" }}
              >
                GET A FREE QUOTE
              </button>
            </div>
            <div
              className="col-12 text-center d-flex flex-column align-items-center"
              style={{ width: "800px", marginTop: "150px" }}
            >
              <h2>Specialists In Modern Construction</h2>
              <div
                style={{
                  border: "2px solid yellow",
                  width: "300px",
                  margin: " 30px 0",
                }}
              ></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.{" "}
              </p>
            </div>

            <div className="col-12 d-flex align-items-center justify-content-around flex-wrap">
              {itemsC.map((itemC) => {
                return <CardC key={itemC.id} {...itemC} />;
              })}
            </div>

            <div className="jumb">
              <div className="circle-t"></div>
              <div className="circle-b"></div>
              <div className="row align-items-center justify-contemt-around h-100">
                <div className="col-12 col-md-2 offset-0 offset-md-2 text-center">
                  <i className="fa-solid fa-bag-shopping fa-5x text-warning"></i>
                  <h2 className="text-warning">3534</h2>
                  <h6 className="text-white">PLANNING APPLICATIONS</h6>
                </div>
                <div className="col-12 col-md-2 text-center">
                  <i className="fa-solid fa-building fa-5x text-warning"></i>
                  <h2 className="text-warning">896</h2>
                  <h6 className="text-white">COMPLETED PROJECTS</h6>
                </div>
                <div className="col-12 col-md-2 text-center">
                  <i className="fa-solid fa-users-line fa-5x text-warning"></i>
                  <h2 className="text-warning">172</h2>
                  <h6 className="text-white">TRAINED PROFESSIONALS</h6>
                </div>
                <div className="col-12 col-md-2 text-center">
                  <i className="fa-solid fa-globe fa-5x text-warning"></i>
                  <h2 className="text-warning">19</h2>
                  <h6 className="text-white">INTERNATIONAL OFFICES</h6>
                </div>
              </div>
            </div>
            <div
              className="col-12 text-center d-flex flex-column align-items-center"
              style={{ width: "800px", marginTop: "150px" }}
            >
              <h2>Explore Recent Work</h2>
              <div
                style={{
                  border: "2px solid yellow",
                  width: "300px",
                  margin: " 30px 0",
                }}
              ></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.{" "}
              </p>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center flex-wrap my-5">
              {itemsW.map((itemW) => {
                return <CardW key={itemW.id} {...itemW} />;
              })}
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-5">
              <button className="btn">VIEW ALL PROJECTS</button>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div
              className="col-12 text-center d-flex flex-column align-items-center"
              style={{ width: "800px", marginTop: "100px" }}
            >
              <h2>Our Core Values</h2>
              <div
                style={{
                  border: "2px solid yellow",
                  width: "300px",
                  margin: " 30px 0",
                }}
              ></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.{" "}
              </p>
            </div>
            <div className="col-12 ">
              <div className="container d-flex align-items-center justify-content-around flex-wrap">
                {itemsV.map((itemV) => {
                  return <CardV key={itemV.id} {...itemV} />;
                })}
              </div>
            </div>

            <div
              className="jumb-parallax"
              style={{ height: "850px", padding: "150px 0" }}
            >
              <div
                className="circle-t"
                style={{ backgroundColor: "#F5F5F5" }}
              ></div>
              <div
                className="circle-b"
                style={{ backgroundColor: "#F5F5F5" }}
              ></div>
              <div className="row align-items-center justify-contemt-around h-100">
                <div className="col-12 text-light d-flex justify-content-center flex-column align-items-center">
                  <div
                    style={{ width: "55%" }}
                    className="d-flex justify-content-center flex-column align-items-center"
                  >
                    <h3 className="fw-normal">Our Home Owners Say</h3>
                    <div
                      className="my-4"
                      style={{ border: "1px solid yellow", width: "200px" }}
                    ></div>
                    <img
                      src={logoTestimonial}
                      className="rounded-circle mb-4"
                      alt="logo"
                    />
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam."
                    </p>
                    <h5 className="fw-bold">
                      HARRY SMITH{" "}
                      <span style={{ verticalAlign: "5px" }}>.</span> NEW HOME
                      OWNER
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 text-center d-flex flex-column align-items-center"
              style={{ width: "800px", marginTop: "150px" }}
            >
              <h2>Latest News</h2>
              <div
                style={{
                  border: "2px solid yellow",
                  width: "300px",
                  margin: " 30px 0",
                }}
              ></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.{" "}
              </p>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center flex-wrap my-5">
              {itemsN.map((itemN) => {
                return <CardN key={itemN.id} {...itemN} />;
              })}
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-5">
              <button className="btn">VIEW ALL ARTICLES</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Construcition;
