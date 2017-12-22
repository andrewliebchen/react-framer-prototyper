import { Meteor } from "meteor/meteor";

export const Data = new Mongo.Collection("data");

Meteor.publish("data", () => Data.find());

Meteor.methods({
  getData() {
    return Data.find().fetch();
  }
});
