import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

const URL = "http://localhost:3333";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });

  axios
    .get(`${URL}/smurfs`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.message });
    });
};

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });

  return axios
    .post(`${URL}/smurfs`, smurf)
    .then(res => {
      return dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      return dispatch({ type: ADD_SMURF_FAILURE, payload: err.message });
    });
};
