import React, { useState } from "react";
import "./SmurfForm.css";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const SmurfForm = props => {
  const addNewSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: name,
      height,
      age
    };
    props
      .addSmurf(newSmurf)
      .then(() => {
        setHeight("");
        setAge("");
        setName("");
      })
      .catch(err => {
        console.error(err);
        alert("POST request failed.");
      });
  };

  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="SmurfForm">
      <form onSubmit={addNewSmurf}>
        <input
          onChange={e => setName(e.target.value)}
          placeholder="name"
          value={name}
          name="name"
          // required
        />
        <input
          onChange={e => setHeight(e.target.value)}
          placeholder="height"
          value={height}
          name="height"
          // required
        />
        <input
          type="number"
          onChange={e => setAge(e.target.value)}
          value={age}
          placeholder="age"
          name="age"
          // required
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
