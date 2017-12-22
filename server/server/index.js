import { Meteor } from "meteor/meteor";

const initialCode = {
  backgroundColor: "blue"
};

const Styles = new Meteor.Collection("styles");

Meteor.publish("styles", () => {
  return Styles.find({});
});

Meteor.methods({
  getStyles() {
    console.log("get styles");
    return Styles.find({}).fetch();
  },

  getStyle(id) {
    return Styles.findOne(id);
  },

  addStyle(args) {
    return Styles.insert({
      ...args,
      code: initialCode
    });
  },

  removeStyle(id) {
    return Styles.remove({ _id: id });
  },

  editStyle(id, finished) {
    return false;
  }
});
