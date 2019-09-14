import React from "react";
import "./Smurf.css";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

const Smurf = ({ deleteSmurf, smurf }) => {
  const callDeleteSmurf = (e, id) => {
    e.preventDefault();
    deleteSmurf(id);
  };

  return (
    <div className="Smurf">
      <header>
        <h2>{smurf.name}</h2>
        <button onClick={e => callDeleteSmurf(e, smurf.id)}>X</button>
      </header>

      <div className="height">
        <h3>height:</h3>
        <p>{smurf.height} tall</p>
      </div>

      <div className="age">
        <h3>Age:</h3>
        <p>{smurf.age} smurf years old</p>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
