import "./style.css";


const CardW = (props) => {
  return (
    <>
      <div id="cardW" className="card">
        <figure className="m-0">
          <img className="img-fluid" src={props.src} alt="img" />
        </figure>
      </div>
    </>
  );
};

export default CardW;
