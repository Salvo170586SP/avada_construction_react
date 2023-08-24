import "./style.css";
import img from '../../images/card.jpg';

const CardW = () => {
  return (
    <>
      <div id="cardW" className="card">
        <figure>
          <img className="img-fluid" src={img} alt="img" />
        </figure>
      </div>
    </>
  );
};

export default CardW;
