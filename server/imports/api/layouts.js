import { Meteor } from "meteor/meteor";

export const Layouts = new Mongo.Collection("layouts");

Meteor.publish("layouts", () => Layouts.find());

Meteor.methods({
  getLayouts() {
    return Layouts.find().fetch();
  }
});
