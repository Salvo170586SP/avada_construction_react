import "./style.css";

const CardN = (props) => {
  return (
    <>
      <div id="cardN" className="card rounded-0 border-0 mb-3">
        <img src={props.src} className="card-img-top rounded-0" alt="img" />
        <div className="card-body p-4">
          <h3 className="card-title fw-normal mb-2">{props.title}</h3>
          <small className="text-body-secondary">{props.date}</small>
          <div className="my-3 border-cardN"></div>
          <p className="card-text mt-2">{props.detail}</p>
        </div>
      </div>
    </>
  );
};

export default CardN;
