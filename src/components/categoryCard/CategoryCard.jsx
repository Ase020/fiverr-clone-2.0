import { Link } from "react-router-dom";
import "./CategoryCard.scss";

const CategoryCard = ({ item }) => {
  return (
    <Link to={`/gigs?cat=design`} className="link">
      <div className="categoryCard">
        <img src={item.img} alt={item.title} />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;