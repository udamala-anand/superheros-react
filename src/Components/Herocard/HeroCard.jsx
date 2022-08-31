import React from "react";
import { Link } from "react-router-dom";
import "./HeroCard.css";
export default function HeroCard({
  obj: {
    name,
    images,
    id,
    biography: { firstAppearance },
  },
}) {
  return (
    <>
      <Link to={`/collection/${id}`}>
        <div className="card">
          <img width="100" height="100" src={images["lg"]} />
          <div>
            <span className="typography__lable">name:</span>
            {name}
          </div>
          <div>
            <span className="typography__lable">firstAppearance:</span>
            {firstAppearance.substring(1, 30) + "..."}
          </div>
        </div>
      </Link>
    </>
  );
}
