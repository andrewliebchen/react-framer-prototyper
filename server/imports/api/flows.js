import { Meteor } from "meteor/meteor";

export const Flows = new Mongo.Collection("flows");

Meteor.publish("flows", () => Flows.find());

Meteor.methods({
  getFlows() {
    return Flows.find().fetch();
  }
});
