import "./style.css";

const CardC = (props) => {

  return (
    <>
      <div id="cardC" className="card p-3 my-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 text-center p-4 d-flex justify-content-center ">
              <i className={`${props.classIcon} fa-2x d-flex justify-content-center align-items-center`}></i>
            </div>
            <div className="col-12 text-center d-flex flex-column align-items-center">
              <h3>{props.title}</h3>
              <p>{props.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardC;
