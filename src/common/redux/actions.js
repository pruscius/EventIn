import event from "../../../api/firebase/models/event";
import { where } from "firebase/firestore"

export const GET_EVENTS = "GET_EVENTS";
export const GET_DETAILS = "GET_DETAILS";
export const GET_EVENTS_BY_TITLE = "GET_EVENTS_BY_TITLE";
export const GET_EVENTS_CATEGORY = "GET_EVENTS_CATEGORY"
export const IS_LOGGED = "IS_LOGGED";

export const getEvents = () => {
  return async function (dispatch) {
    let result = await event.findAll();

    return dispatch({
      type: GET_EVENTS,
      payload: result,
    });
  };
};

export const getEventsByCategory = (category) => {
  return async function (dispatch) {
    let result = await event.find(where("category", "==", category));
    return dispatch({
      type: GET_EVENTS_CATEGORY,
      payload: result,
    });
  };
};

export const getEventsByName = (title) => {
  return async function (dispatch) {
    let result = await event.find(where("title", "==", title));
    console.log('soy el result', result);
    if(result.length === 0){
      return
    }else{
    return dispatch({
      type: GET_EVENTS_BY_TITLE,
      payload: result,
    })};
  };
}

export const getDetails = (id) => {
  return {
    type: GET_DETAILS,
    payload: id,
  };
};

export const changeIsLogged = (id) => {
  return {
    type: IS_LOGGED,
    payload: id
  }
}