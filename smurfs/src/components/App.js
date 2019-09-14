import React, { Component, useEffect } from "react";
import SmurfForm from "./SmurfForm";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
      </div>
    );
  }
}

// const App = props => {
//   const { smurfs, getSmurfs } = props;

//   useEffect(() => {
//     getSmurfs();
//   }, []);

//   return (
//     <div className="App">
//       <h1>SMURFS! 2.0 W/ Redux</h1>
//       <div>Welcome to your state management version of Smurfs!</div>
//       <div>Start inside of your `src/index.js` file!</div>
//       <div>Have fun!</div>
//     </div>
//   );
// };

export default connect(
  null,
  { getSmurfs }
)(App);
