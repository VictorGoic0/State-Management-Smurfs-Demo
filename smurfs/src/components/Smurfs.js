import React, { Component, useEffect } from "react";
import Loader from "react-loader-spinner";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const Smurfs = props => {
  const { fetchingSmurfs, error, smurfs, getSmurfs } = props;

  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  if (fetchingSmurfs) {
    return (
      <div className="loading">
        <Loader type="Oval" color="#00bfff" height={150} width={100} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <h3>{error}</h3>
      </div>
    );
  }
  return (
    <div>
      <h1>Smurf Village</h1>
      <ul>
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </ul>
    </div>
  );
};

// Class version of this component
// class Smurfs extends Component {
//     componentDidMount() {
//       this.props.getSmurfs();
//     }

//     render() {
//       const { fetchingSmurfs, error, smurfs } = this.props;
//       if (fetchingSmurfs) {
//         return (
//           <div className="loading">
//             <Loader type="Oval" color="#00bfff" height={150} width={100} />
//           </div>
//         );
//       }
//       if (error) {
//         return (
//           <div className="error">
//             <h3>{error}</h3>
//           </div>
//         );
//       }
//       return (
//         <div>
//           <h1>Smurf Village</h1>
//           <ul>
//             {smurfs.map(smurf => (
//               <Smurf key={smurf.id} smurf={smurf} />
//             ))}
//           </ul>
//         </div>
//       );
//     }
//   }

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(Smurfs);
