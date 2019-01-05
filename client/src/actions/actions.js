import * as actionTypes from "./actionTypes";
import axios from "axios";

export function addPresentation(presentation) {
  const data = axios({
    method: "post",
    url: "/allpresentations",
    data: presentation
  });
  return dispatch => {
    data.then(data => {
      dispatch({
        type: actionTypes.ADD_PRESENTATION,
        payload: data
      });
    });
  };
}

export function editPresentation(_id, presentation) {
  const data = axios({
    method: "put",
    url: "/allpresentations/" + _id,
    data: presentation
  });
  return dispatch => {
    data.then(data => {
      dispatch({
        type: actionTypes.EDIT_PRESENTATION,
        payload: data
      });
    });
  };
}

export function deletePresentation(_id) {
  const data = axios({
    method: "delete",
    url: "/allpresentations/" + _id,
    data: _id
  });
  return dispatch => {
    data.then(data => {
      dispatch({
        type: actionTypes.DELETE_PRESENTATION,
        payload: data
      });
    });
  };
}

export function getAllPresentations() {
  const data = axios.get("/allpresentations");
  return dispatch => {
    data.then(data => {
      dispatch({
        type: actionTypes.GET_ALL_PRESENTATIONS,
        payload: data
      });
    });
  };
}

// export function getOnePresentation(_id) {
//   const data = axios({
//     method: "get",
//     url: "/allpresentations/" + _id
//   });
//   return dispatch => {
//     dispatch({
//       type: actionTypes.GET_ONE_PRESENTATION,
//       payload: data
//     });
//   };
