import { Meteor } from "meteor/meteor";

const initialCode = {
  backgroundColor: "blue"
};

export const Styles = new Mongo.Collection("styles");

Meteor.publish("styles", () => Styles.find());

Meteor.methods({
  getStyles() {
    return Styles.find().fetch();
  },

  addStyles(args) {
    return Styles.insert({
      ...args,
      code: initialCode
    });
  },

  updateStylesCode(args) {
    return Styles.update(args.id, {
      $set: { code: args.code }
    });
  }
});
