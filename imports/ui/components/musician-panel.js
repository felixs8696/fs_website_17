import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./musician-panel.html";

function getSoundCloud(playlistId) {
  return "<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/" + playlistId + "&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false'></iframe>";
}

Template.Musician_panel.onCreated(function musicianPanelOnCreated() {

});

Template.Musician_panel.onRendered(function() {
  setTimeout(() => {
    $('.youtube-gallery').addClass('animated fadeInUp');
    $('.youtube-gallery').css({ opacity : 1 });
  }, 1000);
  $('.youtube-gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'iframe',
        gallery: {
          enabled:true
        },
        iframe: {
        	markup: '<div class="mfp-iframe-scaler">'+
              		'<div class="mfp-close"></div>'+
              		'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              		'</div>',
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: '//www.youtube.com/embed/%id%?autoplay=1'
            }
          },
    	    srcAction: 'iframe_src',
       }
    });
  });
  var SCPlaylistIds = Session.get('SCPlaylistIds');
  setTimeout(() => {
    var i = 0;
    var timer = setInterval(() => {
      var SCPlaylistId = SCPlaylistIds[i];
      Session.set("soundcloud:" + SCPlaylistId, getSoundCloud(SCPlaylistId));
      i++;
      if(i === SCPlaylistIds.length) {
        clearInterval(timer);
        setTimeout(() => {
          $('.soundcloud-gallery').addClass('animated fadeInUp');
          $('.soundcloud-gallery').css({ opacity : 1 });
        }, 1000);
      }
    }, 500);
  }, 1200);

});

Template.Musician_panel.helpers({
  getSCPlaylist: function(id) {
    return Session.get("soundcloud:" + id);
  }
});

Template.Musician_panel.events({

});
