import { useState } from "react";
import { GigCard } from "../../components";
import { gigs } from "../../data";
import "./Gigs.scss";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setOpen(false);
    setSort(type);
  };

  return (
    <div className="Gigs">
      <div className="container">
        <span className="breadcrumbs">aseDesign {">"} Web Design</span>

        <h1>Web Designers</h1>

        <p>
          Explore the boundaries of UX/UI Design with aseDesign Web Designers
        </p>

        <div className="menu">
          <div className="budget">
            <span>Budget</span>
            <input type="text" placeholder="Min" />
            <input type="text" placeholder="Max" />
            <button>Apply</button>
          </div>

          <div className="sorting">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />

            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
