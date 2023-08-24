import './style.css'

const BuildingSpaces = () => {
  return (
    <>
      <section id="BuildingSpaces">
        <div className="container h-100">
          <div className="row align-items-center justify-content-around h-100">
                <div className="col-12 col-md-6 offset-1 offset-md-0 text-light d-flex justify-content-center flex-column align-items-center">
                  <div className="d-flex justify-content-center flex-column align-items-start"
                  >
                    <h3 className="fw-normal">Building Inspring Spaces</h3>
                    <div
                      className="my-4"
                      style={{ border: "1px solid yellow", width: "200px" }}
                    ></div>
                  
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column  align-items-center justify-content-center">
                  <button className="btn btn-warning rounded-0 px-5 py-2 mb-2">GET A FREE QUOTE</button>
                  <span className="text-light">Only takes a few seconds!</span>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildingSpaces;
