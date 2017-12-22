import { Meteor } from "meteor/meteor";

export const Components = new Mongo.Collection("components");

Meteor.publish("components", () => Components.find());

Meteor.methods({
  getComponents() {
    return Components.find().fetch();
  }
});
