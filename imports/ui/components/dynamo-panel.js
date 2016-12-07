import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./dynamo-panel.html";

const ANIM_OFFSET = 3;

var organizations = [
  {title: 'Launchpad | Founder' ,img: '/organizations/launchpad.png', style: 'rect', url: 'http://callaunchpad.org'},
  {title: 'CalHacks 2.0 | Participant' ,img: '/organizations/calhacks.png', style: 'square', url: 'http://www.calhacks.io'},
  {title: 'Berkeley ABA | Media Technology Chair' ,img: '/organizations/aba.png', style: 'square', url: 'http://www.berkeleyaba.com'},
  {title: 'Cal Alumni Student Association | Web Content Coordinator' ,img: '/organizations/casa.png', style: 'square', url: 'http://alumni.berkeley.edu/community/student-programs/cal-alumni-student-association'},
  {title: 'LinkedIn Pulse | Writer' ,img: '/organizations/pulse.png', style: 'square', url: 'https://www.linkedin.com/pulse/todays-small-players-tomorrows-big-winners-felix-su?trk=prof-post'},
  {title: 'UC Berkeley EECS Department | CS61A/CS61B Lab Assistant' ,img: '/organizations/eecs.png', style: 'rect', url: 'https://eecs.berkeley.edu'},
  {title: 'European Innovation Academy | Hack In Founder' ,img: '/organizations/eia.png', style: 'rect', url: 'http://inacademy.eu/'},
  {title: 'Intramural Basketball | Point Guard' ,img: '/organizations/intramural.png', style: 'square', url: 'http://recsports.berkeley.edu/sports/intramural-sports/sport-specific-rules/basketball-5-on-5/'}
]

Template.Dynamo_panel.onCreated(function dynamoPanelOnCreated() {

});

Template.Dynamo_panel.onRendered(function() {

});

Template.Dynamo_panel.helpers({
  getOrganizations: function() {
    return organizations;
  },
  getAnimInt: function(index) {
    return ANIM_OFFSET + index;
  }
});

Template.Dynamo_panel.events({

});
