import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./bookworm-panel.html";

var gitHubContent = {
  cs70: {
    title: 'cs70-study-materials',
    desc: 'CS 70 Study Materials',
    lang: "TeX",
    url: "https://github.com/felixs8696/cs70-study-materials"
  },
  ee16a: {
    title: 'ee16a-study-materials',
    desc: "UC Berkeley's EE16A Notes and Resources",
    lang: "TeX",
    url: "https://github.com/felixs8696/ee16a-study-materials"
  },
  stat133: {
    title: 'stat133-studymaterials',
    desc: "UC Berkeley's STAT133 Notes and Resources",
    lang: "HTML",
    url: "https://github.com/felixs8696/stat133-studymaterials"
  },
  meteor: {
    title: 'meteor-ngIonic-sidemenu',
    desc: 'Starter Template for Meteor-Angular-Ionic',
    lang: "JavaScript",
    url: "https://github.com/felixs8696/meteor-ngIonic-sidemenu"
  }
}

Template.Bookworm_panel.onCreated(function bookwormPanelOnCreated() {

});

Template.Bookworm_panel.onRendered(function() {
  var gitHubRepos = Session.get('gitHubRepos');
  setTimeout(() => {
    $('.bookworm-content').addClass('animated fadeInUp');
    $('.bookworm-content').css({ opacity : 1 });
  }, 1000);
});

Template.Bookworm_panel.helpers({
  getGitHubContent: function(repo, attr) {
    return gitHubContent[repo][attr];
  }
});

Template.Bookworm_panel.events({

});
