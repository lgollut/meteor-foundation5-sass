Handlebars.registerHelper('init-foundation', function() {
  Meteor.defer(function() {
     $(document).foundation();
   });
});
