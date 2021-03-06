import { createClass } from "asteroid";
import {
  addStyle,
  removeStyle,
  editStyle
} from "../components/Styles/StylesActions";
import store from "../store";

const Asteroid = createClass();

// Connect to a Meteor backend
const asteroid = new Asteroid({
  endpoint: "ws://localhost:9000/websocket"
});

// if you want realitme updates in all connected clients
// subscribe to the publication
asteroid.subscribe("styles");

asteroid.ddp.on("added", doc => {
  // Switch statement
  if (doc.collection === "style") {
    const docObj = Object.assign({}, doc.fields, { _id: doc.id });
    store.dispatch(addStyle(docObj));
  }
});

asteroid.ddp.on("removed", removedDoc => {
  if (removedDoc.collection === "style") {
    store.dispatch(removeStyle(removedDoc.id));
  }
});

asteroid.ddp.on("changed", updatedDoc => {
  if (updatedDoc.collection === "style") {
    store.dispatch(editStyle(updatedDoc.id, updatedDoc.fields.finished));
  }
});

export default asteroid;
