import asteroid from "../../utils/asteroid";
import {
  addStyle,
  getAllStyles,
  removeStyle,
  editStyle
} from "./StylesActions";

export function callAddStyle(message) {
  return dispatch => {
    asteroid
      .call("addStyle", message)
      .then(result => dispatch(addStyle({ _id: result, message })));
  };
}

export function callGetAllStyles() {
  console.log("hi");
  return dispatch => {
    console.log("hi");
    asteroid.call("getStyles").then(result => dispatch(getAllStyles(result)));
  };
}

export function callRemoveStyle(_id) {
  return dispatch =>
    asteroid.call("removeStyle", _id).then(() => dispatch(removeStyle(_id)));
}

export function callEditStyle(_id, finished) {
  return dispatch =>
    asteroid
      .call("editStyle", _id, finished)
      .then(() => dispatch(editStyle(_id, finished)));
}
