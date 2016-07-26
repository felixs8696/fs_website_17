import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './landing-page.html';

var facetNames = ['hacker', 'photographer'];
var facetDetails = {
  hacker: {
    title: 'Hacker',
    desc: 'I love being innovative and keep myself busy by hacking up new projects. Here are my most recent ventures.\n\nClick on them to read about their stories.',
    image: '/facets/coder.png'
  },
  photographer: {
    title: 'Photographer',
    desc: "Photography gives me a chance to express the world from my point of view. You can learn a lot about each photographer's emotion and personality from the shots they take and the angles they choose.",
    image: '/facets/photo_video.png'
  }
};

function initFacets() {
  Session.set('currentPage', 'hacker');
  Session.set('facetContent', facetDetails['hacker']);
}

function initDisplay() {
  $('#project-header-content').css({ display : 'none' });
  $('#prev-button').css({ display : 'none' });
}

Template.Landing_page.onCreated(function landingPageOnCreated() {
  initFacets();
});

Template.Landing_page.onRendered(function () {
  initDisplay();
  $.when(
    $.getScript( "js/modernizr.custom.js" ),
    $.getScript( "js/classie.js" ),
    $.getScript( "js/main.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
  ).done(function(){

  });

  $(document).on('scroll', function() {
    if($(this).scrollTop() < $('.parallax-content').position().top + 200){
      $('.title-container').removeClass('animated fadeOutRight');
      $('.title-container').addClass('animated fadeInRight');
    }
    if($(this).scrollTop() >= $('.parallax-content').position().top + 200){
      $('.title-container').removeClass('animated fadeInRight');
      $('.title-container').addClass('animated fadeOutRight');
    }
    if($(this).scrollTop() < $('.project_1_back').position().top - 200){
      $('#project-header-content').removeClass('animated fadeInLeft');
      $('#project-header-content').addClass('animated fadeOutLeft');
    }
    if($(this).scrollTop() >= $('.project_1_back').position().top - 200){
      $('#project-header-content').css({ display : 'block' });
      $('#project-header-content').removeClass('animated fadeOutLeft');
      $('#project-header-content').addClass('animated fadeInLeft');
    }
    // if($(this).scrollTop() >= $('.project_1_back').position().top){
      // $('#theGrid').removeClass('animated fadeOutLeft');
      // $('#theGrid').addClass('animated fadeOutRight');
    // }

  });
});

Template.Landing_page.helpers({
  getFacetContentVal: function(val) {
    return Session.get('facetContent')[val];
  }
});

Template.Landing_page.events({
  'click #facebook-link': function() {
    window.open("https://facebook.com/felix.su.37");
  },

  'click #linkedin-link': function() {
    window.open("https://www.linkedin.com/in/felixsu");
  },

  'click #github-link': function() {
    window.open("https://github.com/felixs8696");
  },

  'click #500px-link': function() {
    window.open("https://500px.com/felixsu");
  },

  'click #youtube-link': function() {
    window.open("https://www.youtube.com/user/felixs8696/");
  },

  'click #soundcloud-link': function() {
    window.open("https://soundcloud.com/felix-su");
  },

  'click #instagram-link': function() {
    window.open("https://www.instagram.com/felixs8696/");
  },

  'click #next-button': function() {
    var currPage = Session.get('currentPage');
    var idx = facetNames.indexOf(currPage);
    if (idx < facetNames.length - 1) {
      $('#project-header-content').removeClass('animated fadeInLeft');
      $('#project-header-content').addClass('animated fadeOutLeft');
      setTimeout(function() {
        Session.set('currentPage', facetNames[idx + 1]);
        Session.set('facetContent', facetDetails[Session.get('currentPage')]);
        setTimeout(() => {
          $('#project-header-content').removeClass('animated fadeOutLeft');
          $('#project-header-content').addClass('animated fadeInLeft');
        }, 300);
      }, 750);
    }
    if (idx == 0) $('#prev-button').css({ display : 'block' });
    if (idx + 1 >= facetNames.length - 1) {
      $('#next-button').css({ display : 'none' });
    }
  },

  'click #prev-button': function() {
    var currPage = Session.get('currentPage');
    var idx = facetNames.indexOf(currPage);
    if (idx > 0) {
      $('#project-header-content').removeClass('animated fadeInLeft');
      $('#project-header-content').addClass('animated fadeOutLeft');
      setTimeout(function() {
        Session.set('currentPage', facetNames[idx - 1]);
        Session.set('facetContent', facetDetails[Session.get('currentPage')]);
        setTimeout(() => {
          $('#project-header-content').removeClass('animated fadeOutLeft');
          $('#project-header-content').addClass('animated fadeInLeft');
        }, 300);
      }, 750);
    }
    if (idx == facetNames.length - 1) $('#next-button').css({ display : 'block' });
    if (idx - 1 <= 0) {
      $('#prev-button').css({ display : 'none' });
    }
  }
});
