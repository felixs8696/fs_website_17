import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load templates including layouts and pages
import '../../ui/pages/landing-page.js';
import '../../ui/pages/dear-dad.js';

// Configure routes
FlowRouter.route('/', {
  name: 'App.landing',
  action() {
    BlazeLayout.render('Landing_page');
  }
});

FlowRouter.route('/happy_birthday_dad', {
  name: 'App.dad',
  action() {
    BlazeLayout.render('Dear_Dad');
  }
});

FlowRouter.notFound = {
  action() {
    FlowRouter.go('App.landing');
  },
};
