import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../components/hacker-panel.js';
import '../components/photographer-panel.js';
import '../components/musician-panel.js';
import '../components/bookworm-panel.js';
import '../components/worker-panel.js';
import '../components/dynamo-panel.js';
import '../components/ticker.js';

import './landing-page.html';

var facetWheel = [
  {color: '#FFFFFF', icon: 'code', font: 'black', title: 'Hacker', template: 'hacker', selected: 'ticker-selected'},
  {color: '#DDDDDD', icon: 'building-o', font: 'black', title: 'Worker', template: 'worker', selected: ''},
  {color: '#3CA55C', icon: 'bolt', font: 'white', title: 'Dynamo', template: 'dynamo', selected: ''},
  {color: '#416289', icon: 'book', font: 'white', title: 'Bookworm', template: 'bookworm', selected: ''},
  {color: '#103849', icon: 'picture-o', font: 'white', title: 'Photographer', template: 'photographer', selected: ''},
  {color: '#EBDAC0', icon: 'music', font: 'black', title: 'Musician', template: 'musician', selected: ''}
]

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

var skillsContent = [
  {title: 'Languages', list: 'JavaScript, HTML/CSS, Java, Python, C, R, Bash, LaTeX, XML'},
  {title: 'Frameworks', list: 'Meteor, Angular, Blaze, Ionic, Bootstrap, Skeleton, NumPy, NodeJS'},
  {title: 'Services', list: 'MongoDB, Firebase, Heroku, SendGrid, Git'},
  {title: 'APIs', list: 'Google (Maps, Search, Autocomplete), Postmates, Stripe, Ace, Filestack'}
]

var socialContent = [
  {type: 'facebook', url: 'https://facebook.com/felix.su.37'},
  {type: 'linkedin', url: 'https://www.linkedin.com/in/felixsu'},
  {type: 'github', url: 'https://github.com/felixs8696'},
  {type: '500px', url: 'https://500px.com/felixsu'},
  {type: 'youtube', url: 'https://www.youtube.com/user/felixs8696'},
  {type: 'soundcloud', url: 'https://soundcloud.com/felix-su'}
]

var chartXAxis = [
  {index: 'l--0', title: 'Baby Steps', style: "color: #B4E8C0;"},
  {index: 'l--25', title: "Rookie", style: "color: #B5CFD8;"},
  {index: 'l--50', title: 'Medium', style: "color: #516C8D;"},
  {index: 'l--75', title: 'Pro', style: "color: #303841;"},
  {index: 'l--100', title: 'Badass', style: "color: #FC5050;"}
]

var chartContent = [
  { title: 'Software Development',
    content: [
      {type: 'Frontend', skill: 90},
      {type: 'Web Design', skill: 90},
      {type: 'Mobile Apps', skill: 80},
      {type: 'Backend', skill: 70},
      {type: 'UI/UX Design', skill: 70},
      {type: 'Database Management', skill: 60}
    ]
  },
  { title: 'Design',
    content: [
      {type: 'Sketch3', skill: 90},
      {type: 'Lightroom 5', skill: 80},
      {type: 'After Effects / Premier Pro', skill: 70},
      {type: 'Illustrator / Photoshop', skill: 50}
    ]
  },
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
  Session.set('SCPlaylistIds', [245460937, 245470427]);
  return;
}

function changeTicker(target) {
  $('.ticker-icon').removeClass('ticker-selected');
  target.classList.add('ticker-selected');
}

function switchPages(newPage) {
  var newPageContents = facetDetails[newPage];
  removeAddClass('#project-header-content', 'animated fadeInLeft', 'animated fadeOutLeft');
  removeAddClass('#panel', 'animated fadeInRight', 'animated fadeOutRight');
  setTimeout(function() {
    Session.set('currentPage', newPage);
    Session.set('facetContent', newPageContents);
    Session.set('facetTemplate', newPageContents.template);
    setTimeout(() => {
      clearLoadedSessions();
      removeAddClass('#project-header-content', 'animated fadeOutLeft', 'animated fadeInLeft');
      removeAddClass('#panel', 'animated fadeOutRight', 'animated fadeInRight');
    }, 300);
  }, 750);
  var newPageIndex = facetNames.indexOf(newPage);
  changeTicker($('.ticker-icon')[newPageIndex]);
  if (newPageIndex >= facetNames.length - 1) {
    $('#next-button').css({ display : 'none' });
  } else {
    $('#next-button').css({ display : 'block' });
  }
  if (newPageIndex <= 0) {
    $('#prev-button').css({ display : 'none' });
  } else {
    $('#prev-button').css({ display : 'block' });
  }
}

Template.Landing_page.onCreated(function landingPageOnCreated() {
  initFacets();
  initSessionVars();
});

Template.Landing_page.onRendered(function () {
  initDisplay();
  $(document).on('scroll', function() {
    if($(this).scrollTop() < $('.main-page').position().top + 100){
      $('.jumbotron').css({ opacity: 1 });
    }
    if($(this).scrollTop() >= $('.main-page').position().top){
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
    if($(this).scrollTop() < $('.project_1_back').position().top + 300){
      removeAddClass('#project-header-content', 'animated fadeInLeft', 'animated fadeOutLeft');
    }
    if($(this).scrollTop() >= $('.project_1_back').position().top + 300){
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
  },

  getSocialContent: function() {
    return socialContent;
  },

  getChartXAxis: function() {
    return chartXAxis;
  },

  getChartContent: function() {
    return chartContent;
  },

  getFacetWheel: function() {
    return facetWheel;
  }
});

Template.Landing_page.events({
  'click #next-button': function() {
    var currPage = Session.get('currentPage');
    var idx = facetNames.indexOf(currPage);
    if (idx < facetNames.length - 1) {
      var nextPage = facetNames[idx + 1];
      switchPages(nextPage);
    }
    if (idx == 0) $('#prev-button').css({ display : 'block' });
  },

  'click #prev-button': function() {
    var currPage = Session.get('currentPage');
    var idx = facetNames.indexOf(currPage);
    if (idx > 0) {
      var prevPage = facetNames[idx - 1];
      switchPages(prevPage);
    }
    if (idx == facetNames.length - 1) $('#next-button').css({ display : 'block' });
  },

  'click .main': function() {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  },

  'click .card.effect__click': function (event, template) {
    var c = event.currentTarget.classList;
    c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
  },

  'click .card__front': function() {
    $(".chart--horiz").children().addClass('animated fadeInLeft');
  },

  'click .card__back': function() {
    $(".chart--horiz").children().removeClass('animated fadeInLeft');
  },

  'click .ticker-icon': function(event, template) {
    changeTicker(event.currentTarget);
    switchPages(this.template);
  }

});
