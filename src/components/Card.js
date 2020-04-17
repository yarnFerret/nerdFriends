import React, {Fragment} from "react";
import './Card.css';    

const Card = ({ id, name, ksywa }) => {
  return (
    <div className="card">
      {
        //puste tagi html to tak na prawde tag Fragment wprowadzony w react 16.2 zamiast nadmiarowych Divow
      }
      <img src={`https://api.adorable.io/avatars/168/${id}.png`} alt="" />
      <Fragment>
        <h4>{name}</h4>
        <p>{ksywa}</p>
      </Fragment>
    </div>
  );
};

export default Card;