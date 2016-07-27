import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./bookworm-panel.html";

function getGitHub(repo) {
  return "<div class='animated fadeInUp'><div class='github-card' data-github='felixs8696/" + repo + "' data-width='100%' data-theme='default'></div></div>";
}

Template.Bookworm_panel.onCreated(function bookwormPanelOnCreated() {

});

Template.Bookworm_panel.onRendered(function() {
  var gitHubRepos = Session.get('gitHubRepos');
  setTimeout(() => {
    $('.bookworm-content').addClass('animated fadeInUp');
    $('.bookworm-content').css({ opacity : 1 });
  }, 1000);
  setTimeout(() => {
    var i = 0;
    var timer = setInterval(() => {
      var repo = gitHubRepos[i];
      Session.set('github:' + repo, getGitHub(repo));
      $.getScript('http://cdn.jsdelivr.net/github-cards/latest/widget.js');
      i++;
      if(i === gitHubRepos.length) clearInterval(timer);
    }, 500);
  }, 1000);
});

Template.Bookworm_panel.helpers({
  getGitHubHTML: function(repo) {
    console.log(Session.get('github:' + repo));
    return Session.get('github:' + repo);
  }
});

Template.Bookworm_panel.events({

});
