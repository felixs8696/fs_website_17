import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../components/hacker-panel.js';
import '../components/photographer-panel.js';
import '../components/musician-panel.js';
import '../components/bookworm-panel.js';
import '../components/worker-panel.js';
import '../components/dynamo-panel.js';

import './landing-page.html';

var facetDetails = {
  hacker: {
    template: "Hacker_panel",
    title: 'Hacker',
    desc: 'I love being innovative and keep myself busy by hacking up new projects. Here are my most recent ventures. Click on them to read about their stories.',
    image: '/facets/coder.png'
  },
  worker: {
    template: "Worker_panel",
    title: 'Worker',
    desc: 'I see companies as a way to contribute to the best solutions for existing problems. Coding is like magic. With it we can make self-driving cars, prosthetics, drones, virtual reality. I would love to be able to add to that magic.',
    image: '/facets/worker.png'
  },
  dynamo: {
    template: "Dynamo_panel",
    title: 'Dynamo',
    desc: 'College is an amazing collection of multi-talents people and organizations. I love getting involved and getting my hands as dirty as possible. If I am always around great people their talents and personalities are sure to rub off on me.',
    image: '/facets/dynamo.png'
  },
  bookworm: {
    template: "Bookworm_panel",
    title: 'Bookworm',
    desc: "What I love more than studying is helping others have a smoother journey than I've had. After I put in the work to achieve a milestone I love to share my knowledge and resources with those aspiring to achieve the same goals.",
    image: '/facets/bookworm.png'
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
  }
};

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

var skillsContent = [
  {title: 'Languages', list: 'JavaScript, Java, Python, C, R, Bash, LaTeX, HTML/CSS, XML'},
  {title: 'Frameworks', list: 'Meteor, Angular, Blaze, Ionic, Bootstrap, Skeleton, NumPy, NodeJS'},
  {title: 'Services', list: 'MongoDB, Firebase, Heroku, SendGrid, Git'},
  {title: 'APIs', list: 'Google (Maps, Search, Autocomplete), Postmates, Stripe, Ace, Filestack'}
]

var facetNames = Object.keys(facetDetails);

function initFacets() {
  Session.set('currentPage', 'hacker');
  Session.set('facetContent', facetDetails['hacker']);
  Session.set('facetTemplate', 'Hacker_panel');
  return;
}

function initDisplay() {
  $('#project-header-content').css({ display : 'none' });
  $('#prev-button').css({ display : 'none' });
  return;
}

function removeAddClass(selector, removeClass, addClass) {
  $(selector).removeClass(removeClass);
  $(selector).addClass(addClass);
  return;
}

function clearLoadedSessions() {
  Object.keys(Session.keys).forEach((key) => {
    if (key.includes("soundcloud:")) {
      Session.set(key, undefined);
    }
  });
  return;
}

function initSessionVars() {
  Session.set('gitHubContent', gitHubContent);
  Session.set('SCPlaylistIds', [245460937, 245470427]);
  return;
}

Template.Landing_page.onCreated(function landingPageOnCreated() {
  initFacets();
  initSessionVars();
});

Template.Landing_page.onRendered(function () {
  initDisplay();
  $(document).on('scroll', function() {
    if($(this).scrollTop() < $('.parallax-about-section').position().top + 100){
      $('.jumbotron').css({ opacity: 1 });
    }
    if($(this).scrollTop() >= $('.parallax-about-section').position().top){
      $('.jumbotron').css({ opacity: 0 });
    }
    if($(this).scrollTop() < $('.parallax-content').position().top + 200){
      removeAddClass('.title-container', 'animated fadeOut', 'animated fadeIn');
      if (screen.width <= 550) removeAddClass('.logo', 'animated fadeOut', 'animated fadeIn');
    }
    if($(this).scrollTop() >= $('.parallax-content').position().top + 200){
      removeAddClass('.title-container', 'animated fadeIn', 'animated fadeOut');
      if (screen.width <= 550) removeAddClass('.logo', 'animated fadeIn', 'animated fadeOut');
    }
    if($(this).scrollTop() < $('.project_1_back').position().top - 500){
      removeAddClass('#project-header-content', 'animated fadeInLeft', 'animated fadeOutLeft');
    }
    if($(this).scrollTop() >= $('.project_1_back').position().top - 500){
      $('#project-header-content').css({ display : 'block' });
      removeAddClass('#project-header-content', 'animated fadeOutLeft', 'animated fadeInLeft');
    }

  });
});

Template.Landing_page.helpers({
  getFacetContentVal: function(val) {
    return Session.get('facetContent')[val];
  },

  getFacetTemplate: function() {
    return Session.get('facetTemplate');
  },

  getSkillsContent: function() {
    return skillsContent;
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
          clearLoadedSessions();
          removeAddClass('#project-header-content', 'animated fadeOutLeft', 'animated fadeInLeft')
          removeAddClass('#panel', 'animated fadeOutRight', 'animated fadeInRight');
        }, 400);
      }, 800);
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
          clearLoadedSessions();
          removeAddClass('#project-header-content', 'animated fadeOutLeft', 'animated fadeInLeft');
          removeAddClass('#panel', 'animated fadeOutRight', 'animated fadeInRight');
        }, 300);
      }, 750);
    }
    if (idx == facetNames.length - 1) $('#next-button').css({ display : 'block' });
    if (idx - 1 <= 0) {
      $('#prev-button').css({ display : 'none' });
    }
  },

  'click .main': function() {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }

});
