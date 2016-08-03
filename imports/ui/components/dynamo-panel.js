import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./dynamo-panel.html";

var organizations = [
  {title: 'Berkeley ABA | Media Technology Chair' ,img: '/organizations/aba.png', style: 'square', url: 'http://www.berkeleyaba.com', animInt: 3},
  {title: 'CalHacks 2.0 | Participant' ,img: '/organizations/calhacks.png', style: 'square', url: 'http://www.calhacks.io', animInt: 4},
  {title: 'UC Berkeley EECS Department | CS61A/CS61B Lab Assistant' ,img: '/organizations/eecs.png', style: 'rect', url: 'https://eecs.berkeley.edu', animInt: 5},
  {title: 'LinkedIn Pulse | Writer' ,img: '/organizations/pulse.png', style: 'square', url: 'https://www.linkedin.com/pulse/todays-small-players-tomorrows-big-winners-felix-su?trk=prof-post', animInt: 6},
  {title: 'Cal Alumni Student Association | Web Content Coordinator' ,img: '/organizations/casa.png', style: 'square', url: 'http://alumni.berkeley.edu/community/student-programs/cal-alumni-student-association', animInt: 7},
  {title: 'European Innovation Academy | Hack In CEO' ,img: '/organizations/eia.png', style: 'rect', url: 'http://inacademy.eu/', animInt: 8},
  {title: 'Intramural Basketball | Point Guard' ,img: '/organizations/intramural.png', style: 'square', url: 'http://recsports.berkeley.edu/sports/intramural-sports/sport-specific-rules/basketball-5-on-5/', animInt: 9}
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
