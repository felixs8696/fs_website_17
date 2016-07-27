import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./photographer-panel.html";

Template.Photographer_panel.onCreated(function photographerPanelOnCreated() {

});

Template.Photographer_panel.onRendered(function() {
  $('.zoom-gallery').css({ opacity : 0 });
  $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
  setTimeout(() => {
    $('.zoom-gallery').addClass('animated fadeInUp');
    $('.zoom-gallery').css({ opacity : 1 });
  }, 1000);
});

Template.Photographer_panel.helpers({


});

Template.Photographer_panel.events({

});
