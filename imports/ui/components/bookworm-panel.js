import { Template } from 'meteor/templating';
// import { FlowRouter } from 'meteor/kadira:flow-router';

import "./bookworm-panel.html";

var resourceContent = [
  {title: '[ABA] Professional Workshop', desc: 'Rethink Your Future - What are your priorities?', url: 'http://felixs8696.github.io/external/abaworkshop.html#/'},
  {title: '[ABA] Startup Workshop', desc: 'Define Your Role and Scale Effectively', url: 'http://felixs8696.github.io/external/startupworkshop.html#/'},
  {title: 'Intro to R (Data Computing)', desc: 'Use Code to Boost your Presentations', url: 'http://felixs8696.github.io/external/abarslides.html#1'},
  {title: 'CaptionTool for Media Tech', desc: 'Paragraphs to Subtitles in Seconds', url: 'https://captiontool.firebaseapp.com/#/'},
  {title: 'Notes on RESTful design', desc: 'Maintain Flexibility and Scalability', url: 'http://felixs8696.github.io/content/files/REST/index.html'},
  {title: 'Notes on Databases', desc: 'Brief Notes on Relational and Document DBs', url: 'http://felixs8696.github.io/content/files/Databases/index.html'}
]

var gitHubContent = [
  {
    title: 'cs70-study-materials',
    desc: 'CS 70 Study Materials',
    lang: "TeX",
    url: "https://github.com/felixs8696/cs70-study-materials"
  },
  {
    title: 'ee16a-study-materials',
    desc: "UC Berkeley's EE16A Notes and Resources",
    lang: "TeX",
    url: "https://github.com/felixs8696/ee16a-study-materials"
  },
  {
    title: 'stat133-studymaterials',
    desc: "UC Berkeley's STAT133 Notes and Resources",
    lang: "HTML",
    url: "https://github.com/felixs8696/stat133-studymaterials"
  },
  {
    title: 'meteor-ngIonic-sidemenu',
    desc: 'Starter Template for Meteor-Angular-Ionic',
    lang: "JavaScript",
    url: "https://github.com/felixs8696/meteor-ngIonic-sidemenu"
  }
]

Template.Bookworm_panel.onCreated(function bookwormPanelOnCreated() {

});

Template.Bookworm_panel.onRendered(function() {

});

Template.Bookworm_panel.helpers({
  getGitHubContent: function() {
    return gitHubContent;
  },

  getResourceContent: function() {
    return resourceContent;
  },

  evenIndex: function(index) {
    return index%2 == 0;
  },

  nextItemExists: function(array, index) {
    return array[index+1] != undefined && array[index+1] != null;
  },

  getNextItemAttr: function(array, index, attr) {
    return array[index+1][attr];
  }
});

Template.Bookworm_panel.events({

});
