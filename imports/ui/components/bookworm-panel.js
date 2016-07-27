import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./bookworm-panel.html";

Template.Bookworm_panel.onCreated(function bookwormPanelOnCreated() {

});

Template.Bookworm_panel.onRendered(function() {
  $.getScript('//cdn.jsdelivr.net/github-cards/latest/widget.js');
});

Template.Bookworm_panel.helpers({


});

Template.Bookworm_panel.events({

});
