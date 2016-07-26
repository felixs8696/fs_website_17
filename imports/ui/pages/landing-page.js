import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './landing-page.html';

Template.Landing_page.onCreated(function landingPageOnCreated() {

});

Template.Landing_page.onRendered(function () {
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
      $('.project-header').removeClass('animated fadeInLeft');
      $('.project-header').addClass('animated fadeOutLeft');
    }
    if($(this).scrollTop() >= $('.project_1_back').position().top - 200){
      $('.project-header').removeClass('animated fadeOutLeft');
      $('.project-header').addClass('animated fadeInLeft');
    }
  });
});

Template.Landing_page.helpers({

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
});
