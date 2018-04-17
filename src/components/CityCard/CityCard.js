import React from "react";
import "./CityCard.css";

const CityCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.id} src={props.image}
       onClick={() => props.clickImage(props.id)} />
    </div>
 
  
  </div>
);

export default CityCard;

