import "./style.css";

const JumbotronMenu = () => {
  return (
    <>
      <section id="jumbotron">
        <div className="container">
          <div className="row">
            <div
              className="col-12 text-center text-white"
              style={{ lineHeight: "100px" }}
            >
              <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
                BUILDING INSPIRING SPACES
              </h1>
              <h3 className="text-warning fs-4">
                We Build Inspiring Residential & Commercial Spaces
              </h3>
              <button className="btn btn-dark rounded-0 mx-2 px-5 py-3">
                EXPLORE RECENT WORK
              </button>
              <button className="btn btn-warning rounded-0 mx-2 px-5 py-3">
                GET A QUOTE TODAY
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JumbotronMenu;
