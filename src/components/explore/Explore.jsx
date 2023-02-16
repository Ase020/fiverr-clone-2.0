/* eslint-disable react/no-unescaped-entities */
import "./Explore.scss";

const Explore = () => {
  return (
    <div className="explore">
      <div className="container">
        <div className="item">
          <h1>aseDesign business</h1>
          <h1>
            A business solutions designed for <i>teams</i>
          </h1>

          <p>
            Upgrade to a curated experience packed with teams tools and
            benefits, dedicated to businesses
          </p>

          <div className="title">
            <img src="./img/check.png" alt="" />
            Connect to freelancers with proven business experience
          </div>

          <div className="title">
            <img src="./img/check.png" alt="" />
            Get matched with the perfect talent by a customer success manager
          </div>

          <div className="title">
            <img src="./img/check.png" alt="" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>

          <button>Explore aseDesign Business</button>
        </div>

        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
