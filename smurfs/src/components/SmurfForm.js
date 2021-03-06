import React, { useState } from "react";
import "./SmurfForm.css";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const SmurfForm = props => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  const addNewSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name,
      height,
      age
    };
    props
      .addSmurf(newSmurf)
      .then(() => {
        // Clear the state on a successful POST
        setHeight("");
        setAge("");
        setName("");
      })
      .catch(err => {
        console.error(err);
        alert("POST request failed.");
      });
  };

  return (
    <div className="SmurfForm">
      <form onSubmit={addNewSmurf}>
        <input
          onChange={e => setName(e.target.value)}
          placeholder="name"
          value={name}
          name="name"
          required
        />
        <input
          onChange={e => setHeight(e.target.value)}
          placeholder="height"
          value={height}
          name="height"
          required
        />
        <input
          type="number"
          onChange={e => setAge(e.target.value)}
          value={age}
          placeholder="age"
          name="age"
          required
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
