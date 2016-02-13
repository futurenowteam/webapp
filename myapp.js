if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click .js-add-one': function () {
      // increment the counter when button is clicked

      Session.set('counter', Session.get('counter') + 10);
    },
    'click .js-reset': function () {

      Session.set('counter', 0);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
