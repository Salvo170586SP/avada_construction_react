import RealEstate from "../../images/home-logo11-219096700-320x202.png";
import SecureHome from "../../images/home-logo10-219096700-320x202.png";
import ForestHouse from "../../images/home-logo2-219096700-320x202.png";
import RealEstateM from "../../images/home-logo1-219096700-320x202.png";
import FoodHouse from "../../images/home-logo9-219096700-320x202.png";


const TrustedPartnes = () => {
  return (
    <>
      <section id="trustedPartners">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div
              className="col-12 text-center d-flex flex-column align-items-center"
              style={{ width: "800px", marginTop: "100px" }}
            >
              <h2>Trusted Partners</h2>
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
            <div className="col-12 d-flex justify-content-around my-5 flex-wrap">
            <img width={180} src={RealEstate} alt="real estate" /> 
            <img width={180} src={SecureHome} alt="secure home" /> 
            <img width={180} src={ForestHouse} alt="forest house" /> 
            <img width={180} src={RealEstateM} alt="real estate market" />
            <img width={180} src={FoodHouse} alt="food house" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedPartnes;
