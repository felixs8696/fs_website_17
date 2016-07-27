import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./hacker-panel.html";

Template.Hacker_panel.onCreated(function hackerPanelOnCreated() {

});

Template.Hacker_panel.onRendered(function() {
  $.when(
    $.getScript( "js/modernizr.custom.js" ),
    $.getScript( "js/classie.js" ),
    $.getScript( "js/main.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
  ).done(function(){

  });
});

Template.Hacker_panel.helpers({


});

Template.Hacker_panel.events({

});
