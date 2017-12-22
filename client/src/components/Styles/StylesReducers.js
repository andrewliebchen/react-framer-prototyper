import {
  ADD_STYLE,
  REMOVE_STYLE,
  EDIT_STYLE,
  GET_ALL_STYLES
} from "./StylesActions";
import { remove, edit, add } from "../../utils/helpers";

const styles = (state = [], action) => {
  switch (action.type) {
    case ADD_STYLE:
      return add(state, action);
    case REMOVE_STYLE:
      return remove(state, action);
    case EDIT_STYLE:
      return edit(state, action);
    case GET_ALL_STYLES:
      return action.data;
    default:
      return state;
  }
};

export default styles;
