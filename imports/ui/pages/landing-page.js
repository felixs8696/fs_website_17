import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../components/hacker-panel.js';
import '../components/photographer-panel.js';
import '../components/musician-panel.js';
import '../components/bookworm-panel.js';

import './landing-page.html';

var facetDetails = {
  hacker: {
    template: "Hacker_panel",
    title: 'Hacker',
    desc: 'I love being innovative and keep myself busy by hacking up new projects. Here are my most recent ventures. Click on them to read about their stories.',
    image: '/facets/coder.png'
  },
  photographer: {
    template: "Photographer_panel",
    title: 'Photographer',
    desc: "Photography gives me a chance to express the world from my point of view. You can learn a lot about each photographer's emotion and personality from the shots they take and the angles they choose.",
    image: '/facets/photo_video.png'
  },
  musician: {
    template: "Musician_panel",
    title: 'Musician',
    desc: "Although I'm not the world's best singer or guitarist, I use music to express emotions that I don't like to bottle up. I believe music is a language all people can understand and the unity it brings is something the world could always use a little more of.",
    image: '/facets/musician.png'
  },
  bookworm: {
    template: "Bookworm_panel",
    title: 'Bookworm',
    desc: "What I love more than studying is helping others have a smoother journey than I've had. After I put in the work to achieve a milestone I love to share my knowledge and resources with those aspiring to achieve the same goals.",
    image: '/facets/bookworm.png'
  }
};
var facetNames = Object.keys(facetDetails);

function initFacets() {
  Session.set('currentPage', 'hacker');
  Session.set('facetContent', facetDetails['hacker']);
  Session.set('facetTemplate', 'Hacker_panel');
}

function initDisplay() {
  $('#project-header-content').css({ display : 'none' });
  $('#prev-button').css({ display : 'none' });
}

function removeAddClass(selector, removeClass, addClass) {
  $(selector).removeClass(removeClass);
  $(selector).addClass(addClass);
}

function clearSCSessions() {
  Object.keys(Session.keys).forEach((key) => {
    if (key.includes("soundcloud:")) {
      Session.set(key, undefined);
    }
  })
}

Template.Landing_page.onCreated(function landingPageOnCreated() {
  initFacets();
  Session.set('soundCloudIds', [203035281, 174901963, 125970630, 257069781]);
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
    if($(this).scrollTop() < $('.parallax-about-section').position().top + 100){
      $('.jumbotron').css({ display: 'block' });
    }
    if($(this).scrollTop() >= $('.parallax-about-section').position().top){
      $('.jumbotron').css({ display: 'none' });
    }
    if($(this).scrollTop() < $('.parallax-content').position().top + 200){
      $('.title-container').removeClass('animated fadeOutRight');
      $('.title-container').addClass('animated fadeInRight');
    }
    if($(this).scrollTop() >= $('.parallax-content').position().top + 200){
      $('.title-container').removeClass('animated fadeInRight');
      $('.title-container').addClass('animated fadeOutRight');
    }
    if($(this).scrollTop() < $('.project_1_back').position().top - 500){
      $('#project-header-content').removeClass('animated fadeInLeft');
      $('#project-header-content').addClass('animated fadeOutLeft');
    }
    if($(this).scrollTop() >= $('.project_1_back').position().top - 500){
      $('#project-header-content').css({ display : 'block' });
      $('#project-header-content').removeClass('animated fadeOutLeft');
      $('#project-header-content').addClass('animated fadeInLeft');
    }

  });
});

Template.Landing_page.helpers({
  getFacetContentVal: function(val) {
    return Session.get('facetContent')[val];
  },

  getFacetTemplate: function() {
    return Session.get('facetTemplate');
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
      var nextPage = facetNames[idx + 1];
      var nextPageContents = facetDetails[nextPage];
      removeAddClass('#project-header-content', 'animated fadeInLeft', 'animated fadeOutLeft')
      removeAddClass('#panel', 'animated fadeInRight', 'animated fadeOutRight');
      setTimeout(function() {
        Session.set('currentPage', nextPage);
        Session.set('facetContent', nextPageContents);
        Session.set('facetTemplate', nextPageContents.template);
        setTimeout(() => {
          clearSCSessions();
          removeAddClass('#project-header-content', 'animated fadeOutLeft', 'animated fadeInLeft')
          removeAddClass('#panel', 'animated fadeOutRight', 'animated fadeInRight');
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
      var prevPage = facetNames[idx - 1];
      var prevPageContents = facetDetails[prevPage];
      removeAddClass('#project-header-content', 'animated fadeInLeft', 'animated fadeOutLeft');
      removeAddClass('#panel', 'animated fadeInRight', 'animated fadeOutRight');
      setTimeout(function() {
        Session.set('currentPage', prevPage);
        Session.set('facetContent', prevPageContents);
        Session.set('facetTemplate', prevPageContents.template);
        setTimeout(() => {
          clearSCSessions();
          removeAddClass('#project-header-content', 'animated fadeOutLeft', 'animated fadeInLeft');
          removeAddClass('#panel', 'animated fadeOutRight', 'animated fadeInRight');
        }, 300);
      }, 750);
    }
    if (idx == facetNames.length - 1) $('#next-button').css({ display : 'block' });
    if (idx - 1 <= 0) {
      $('#prev-button').css({ display : 'none' });
    }
  }
});
