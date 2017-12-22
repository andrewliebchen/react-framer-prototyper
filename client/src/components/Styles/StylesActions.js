/*
 * action types
 */

export const ADD_STYLE = "ADD_STYLE";
export const REMOVE_STYLE = "REMOVE_STYLE";
export const EDIT_STYLE = "EDIT_STYLE";
export const GET_ALL_STYLES = "GET_ALL_STYLES";

/*
 * action creators
 */

export function addStyle(data) {
  return {
    type: ADD_STYLE,
    data
  };
}

export function removeStyle(_id) {
  return {
    type: REMOVE_STYLE,
    _id
  };
}

export function editStyle(_id, finished) {
  return {
    type: EDIT_STYLE,
    _id,
    finished
  };
}

export function getAllStyles(data) {
  return {
    type: GET_ALL_STYLES,
    data
  };
}
