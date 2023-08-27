import "./style.css";

const CardV = (props) => {
  return (
    <>
      <div
      id="cardV"
        className="card bg-transparent border-0 p-3 my-3">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 text-center p-4 d-flex justify-content-center ">
              <i class={`${props.classIcon} text-light p-5 fa-3x d-flex justify-content-center align-items-center`}></i>
            </div>
            <div className="col-12 text-center d-flex flex-column align-items-center">
              <h5 className="fw-normal">{props.title}</h5>
              <div className="border-cardV"></div>
              <p>{props.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardV;
