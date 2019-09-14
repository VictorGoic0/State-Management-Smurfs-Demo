import React from "react";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm />
      <Smurfs />
    </div>
  );
};

// Moved get request to the Smurfs component
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

export default App;
