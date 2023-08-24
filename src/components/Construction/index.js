import "./style.css";
import Card from "../CardConstructions";
import CardW from "../CardWork";
import logoTestimonial from "../../images/home-testimonial-113165296.jpg";
import cardImg1 from "../../images/blog-post-134132600-600x362.jpg";
import cardImg2 from "../../images/blog-post-92486644-600x362.jpg";
import cardImg3 from "../../images/blog-post-332773904-600x362.jpg";
import img1 from '../../images/card.jpg';
import img2 from '../../images/project2-featured-15013609-400x400.jpg';
import img3 from '../../images/project3-featured-189023420-400x400.jpg';

const Construcition = () => {
  return (
    <>
      <section id="construction">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 text-center bg-warning p-5 position-relative">
              <h2 style={{ fontSize: "2rem" }}>
                Do You Have A Construction Project We Can Help With?
              </h2>
              <button
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
              <div id="cardC" className="card p-3 my-5">
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-12 text-center p-4 d-flex justify-content-center ">
                      <i
                        class="fa-regular fa-building fa-2x d-flex justify-content-center align-items-center"
                        style={{
                          border: "1px solid #747474",
                          borderRadius: "50%",
                          width: "80px",
                          height: "80px",
                          color: "#747474",
                        }}
                      ></i>
                    </div>
                    <div className="col-12 text-center d-flex flex-column align-items-center">
                      <h3>Buildings</h3>
                      <p style={{ color: "#747474" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="cardC" className="card p-3 my-5">
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-12 text-center p-4 d-flex justify-content-center ">
                      <i
                        class="fa-solid fa-rotate fa-2x d-flex justify-content-center align-items-center"
                        style={{
                          border: "1px solid #747474",
                          borderRadius: "50%",
                          width: "80px",
                          height: "80px",
                          color: "#747474",
                        }}
                      ></i>
                    </div>
                    <div className="col-12 text-center d-flex flex-column align-items-center">
                      <h3>Renovate</h3>
                      <p style={{ color: "#747474" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="cardC" className="card p-3 my-5">
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-12 text-center p-4 d-flex justify-content-center ">
                      <i
                        class="fa-solid fa-home fa-2x d-flex justify-content-center align-items-center"
                        style={{
                          border: "1px solid #747474",
                          borderRadius: "50%",
                          width: "80px",
                          height: "80px",
                          color: "#747474",
                        }}
                      ></i>
                    </div>
                    <div className="col-12 text-center d-flex flex-column align-items-center">
                      <h3>Construct</h3>
                      <p style={{ color: "#747474" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="cardC" className="card p-3 my-5">
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-12 text-center p-4 d-flex justify-content-center ">
                      <i
                        class="fa-solid fa-truck fa-2x d-flex justify-content-center align-items-center"
                        style={{
                          border: "1px solid #747474",
                          borderRadius: "50%",
                          width: "80px",
                          height: "80px",
                          color: "#747474",
                        }}
                      ></i>
                    </div>
                    <div className="col-12 text-center d-flex flex-column align-items-center">
                      <h3>Exclusive</h3>
                      <p style={{ color: "#747474" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="jumb">
              <div className="circle-t"></div>
              <div className="circle-b"></div>
              <div className="row align-items-center justify-contemt-around h-100">
                <div className="col-12 col-md-2 offset-0 offset-md-2 text-center">
                  <i class="fa-solid fa-bag-shopping fa-5x text-warning"></i>
                  <h2 className="text-warning">3534</h2>
                  <h6 className="text-white">PLANNING APPLICATIONS</h6>
                </div>
                <div className="col-12 col-md-2 text-center">
                  <i class="fa-solid fa-building fa-5x text-warning"></i>
                  <h2 className="text-warning">896</h2>
                  <h6 className="text-white">COMPLETED PROJECTS</h6>
                </div>
                <div className="col-12 col-md-2 text-center">
                  <i class="fa-solid fa-users-line fa-5x text-warning"></i>
                  <h2 className="text-warning">172</h2>
                  <h6 className="text-white">TRAINED PROFESSIONALS</h6>
                </div>
                <div className="col-12 col-md-2 text-center">
                  <i class="fa-solid fa-globe fa-5x text-warning"></i>
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
              <div id="cardW" className="card">
                <figure>
                  <img className="img-fluid" src={img1} alt="img" />
                </figure>
              </div>
              <div id="cardW" className="card">
                <figure>
                  <img className="img-fluid" src={img2} alt="img" />
                </figure>
              </div>
              <div id="cardW" className="card">
                <figure>
                  <img className="img-fluid" src={img3} alt="img" />
                </figure>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-5">
              {/*  <div style={{ borderTop: "2px solid grey", width: "300px" }}></div> */}
              <button className="btn">VIEW ALL PROJECTS</button>
              {/*  <div style={{ borderTop: "2px solid grey", width: "300px" }}></div> */}
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
                <div
                  className="card bg-transparent border-0 p-3 my-5"
                  style={{ width: "280px" }}
                >
                  <div className="container-fluid">
                    <div className="row justify-content-center">
                      <div className="col-12 text-center p-4 d-flex justify-content-center ">
                        <i
                          class="fa-solid text-light p-5 fa-house fa-2x d-flex justify-content-center align-items-center"
                          style={{
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            backgroundColor: "#4EA4A4",
                          }}
                        ></i>
                      </div>
                      <div className="col-12 text-center d-flex flex-column align-items-center">
                        <h5 className="fw-normal">Great Services</h5>
                        <div
                          style={{
                            border: "1px solid gray",
                            width: "25px",
                            margin: "20px 0",
                          }}
                        ></div>
                        <p>
                          neque porro quisquam est qui dolorem ipsum quia dolor
                          sit amet consectetur adipisci velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card bg-transparent border-0 p-3 my-5"
                  style={{ width: "280px" }}
                >
                  <div className="container-fluid">
                    <div className="row justify-content-center">
                      <div className="col-12 text-center p-4 d-flex justify-content-center ">
                        <i
                          class="fa-solid text-light p-5 fa-gear fa-3x d-flex justify-content-center align-items-center"
                          style={{
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            backgroundColor: "#4E6DA5",
                          }}
                        ></i>
                      </div>
                      <div className="col-12 text-center d-flex flex-column align-items-center">
                        <h5 className="fw-normal">Highest Standars</h5>
                        <div
                          style={{
                            border: "1px solid gray",
                            width: "25px",
                            margin: "20px 0",
                          }}
                        ></div>
                        <p>
                          neque porro quisquam est qui dolorem ipsum quia dolor
                          sit amet consectetur adipisci velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card bg-transparent border-0 p-3 my-3"
                  style={{ width: "280px" }}
                >
                  <div className="container-fluid">
                    <div className="row justify-content-center">
                      <div className="col-12 text-center p-4 d-flex justify-content-center ">
                        <i
                          class="fa-solid text-light p-5 fa-users fa-3x d-flex justify-content-center align-items-center"
                          style={{
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            backgroundColor: "#F6722A",
                          }}
                        ></i>
                      </div>
                      <div className="col-12 text-center d-flex flex-column align-items-center">
                        <h5 className="fw-normal">Professional Team</h5>
                        <div
                          style={{
                            border: "1px solid gray",
                            width: "25px",
                            margin: "20px 0",
                          }}
                        ></div>
                        <p>
                          neque porro quisquam est qui dolorem ipsum quia dolor
                          sit amet consectetur adipisci velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card bg-transparent border-0 p-3 my-3"
                  style={{ width: "280px" }}
                >
                  <div className="container-fluid">
                    <div className="row justify-content-center">
                      <div className="col-12 text-center p-4 d-flex justify-content-center ">
                        <i
                          class="fa-regular text-light p-5 fa-lightbulb fa-3x d-flex justify-content-center align-items-center"
                          style={{
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            backgroundColor: "#A7CF47",
                          }}
                        ></i>
                      </div>
                      <div className="col-12 text-center d-flex flex-column align-items-center">
                        <h5 className="fw-normal">Creative Solutions</h5>
                        <div
                          style={{
                            border: "1px solid gray",
                            width: "25px",
                            margin: "20px 0",
                          }}
                        ></div>
                        <p>
                          neque porro quisquam est qui dolorem ipsum quia dolor
                          sit amet consectetur adipisci velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
              <div
                class="card rounded-0 border-0 mb-3"
                style={{ width: "400px" }}
              >
                <img src={cardImg1} class="card-img-top rounded-0" alt="img" />
                <div class="card-body p-4">
                  <h3 class="card-title fw-normal mb-2">
                    Redeveloping Florida's Remote Southern Coast
                  </h3>
                  <small className="text-body-secondary">
                    December 7ht, 2015
                  </small>
                  <div
                    className="my-3"
                    style={{ border: "1px solid #EAE8E8" }}
                  ></div>
                  <p class="card-text mt-2">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>

              <div
                class="card rounded-0 border-0 mx-4 mb-3"
                style={{ width: "400px" }}
              >
                <img src={cardImg2} class="card-img-top rounded-0" alt="img" />
                <div class="card-body p-4">
                  <h3 class="card-title fw-normal mb-2">
                    How We Manage Large Construction Projects
                  </h3>
                  <small className="text-body-secondary">
                    December 7ht, 2015
                  </small>
                  <div
                    className="my-3"
                    style={{ border: "1px solid #EAE8E8" }}
                  ></div>
                  <p class="card-text mt-2">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>

              <div
                class="card rounded-0 border-0 mb-3"
                style={{ width: "400px" }}
              >
                <img src={cardImg3} class="card-img-top rounded-0" alt="img" />
                <div class="card-body p-4">
                  <h3 class="card-title fw-normal mb-2">
                    Future proofing a modern home
                  </h3>
                  <small className="text-body-secondary">
                    December 6ht, 2015
                  </small>
                  <div
                    className="my-3"
                    style={{ border: "1px solid #EAE8E8" }}
                  ></div>
                  <p class="card-text mt-2">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
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
