import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./dynamo-panel.html";

var organizations = [
  {title: 'Berkeley ABA' ,img: '/organizations/aba.png', style: 'square', url: 'http://www.berkeleyaba.com', animInt: 3},
  {title: 'CalHacks 2.0' ,img: '/organizations/calhacks.png', style: 'square', url: 'http://www.calhacks.io', animInt: 4},
  {title: 'UC Berkeley EECS Department' ,img: '/organizations/eecs.png', style: 'rect', url: 'https://eecs.berkeley.edu', animInt: 5},
  {title: 'Cal Alumni Student Association' ,img: '/organizations/casa.png', style: 'square', url: 'http://alumni.berkeley.edu/community/student-programs/cal-alumni-student-association', animInt: 6},
  {title: 'European Innocation Academy' ,img: '/organizations/eia.png', style: 'rect', url: 'http://inacademy.eu/', animInt: 7},
  {title: 'Intramural Basketball' ,img: '/organizations/intramural.jpg', style: 'square', url: 'http://recsports.berkeley.edu/sports/intramural-sports/sport-specific-rules/basketball-5-on-5/', animInt: 8}
]

Template.Dynamo_panel.onCreated(function dynamoPanelOnCreated() {

});

Template.Dynamo_panel.onRendered(function() {

});

Template.Dynamo_panel.helpers({
  getOrganizations: function() {
    return organizations;
  }
});

Template.Dynamo_panel.events({

});
