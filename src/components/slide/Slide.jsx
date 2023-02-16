import { Slider } from "infinite-react-carousel/lib";

import "./Slide.scss";

const Slide = ({ slidesToShow, arrowsScroll, children, wheel }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider
          wheel={wheel}
          slidesToShow={slidesToShow}
          arrowsScroll={arrowsScroll}
        >
          {children}
          {/* {cards.map((card) => (
            <CategoryCard item={card} key={card.id} />
          ))} */}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
