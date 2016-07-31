import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./worker-panel.html";

import "./job.js";

var workContents = {
  akala: {
    name: "AKALA",
    logo: "/companies/akala.png",
    position: "Software Engineer Intern - Mobile Applications",
    date: "Jun 2015 - Sep 2015",
    desc: [
      {content: "Developing an AngularJS/Ionic mobile web app for virtual college counseling using Meteor, MongoDB, and IBM Watson software."},
      {content: "Using IBM Watson’s Personality Insights™ REST API to analyze students’ personalities and determine their fits with different colleges."},
      {content: "Minimized effects of client to server calls on Angular views by using localStorage as a cache and writing to database away from views."}
    ]
  }
}

Template.Worker_panel.onCreated(function workerPanelOnCreated() {

});

Template.Worker_panel.onRendered(function() {

});

Template.Worker_panel.helpers({
  getWorkContent: function(company, attr) {
    return workContents[company][attr];
  }
});

Template.Worker_panel.events({

});
