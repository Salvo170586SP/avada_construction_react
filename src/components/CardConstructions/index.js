import "./style.css";

const Construcition = () => {
  return (
    <>
      <div id="cardC" className="card p-3 my-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 text-center p-4 d-flex justify-content-center ">
              <i
                class="fa-regular fa-building fa-2x d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                }}
              ></i>
            </div>
            <div className="col-12 text-center d-flex flex-column align-items-center">
              <h3>Buildings</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Construcition;
