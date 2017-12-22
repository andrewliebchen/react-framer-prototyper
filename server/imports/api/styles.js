import { Meteor } from "meteor/meteor";

export const Styles = new Mongo.Collection("styles");

Meteor.publish("styles", () => Styles.find());

Meteor.methods({
  getStyles() {
    return Styles.find().fetch();
  }
});
