import {
  CategoryCard,
  Explore,
  Featured,
  Features,
  ProjectCard,
  TrustedBy,
} from "../../components";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={3} wheel>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
      <Features />
      <Explore />
      <Slide slidesToShow={4} arrowsScroll={4} wheel>
        {projects.map((card) => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
