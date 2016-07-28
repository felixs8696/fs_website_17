import { Template } from 'meteor/templating';
// import { FlowRouter } from 'meteor/kadira:flow-router';

import "./bookworm-panel.html";

Template.Bookworm_panel.onCreated(function bookwormPanelOnCreated() {

});

Template.Bookworm_panel.onRendered(function() {
  setTimeout(() => {
    $('.bookworm-content').addClass('animated fadeInUp');
    $('.bookworm-content').css({ opacity : 1 });
  }, 1500);
});

Template.Bookworm_panel.helpers({
  getGitHubContent: (repo, attr) => {
    var gitHubContent = Session.get('gitHubContent');
    return gitHubContent[repo][attr];
  }
});

Template.Bookworm_panel.events({

});
