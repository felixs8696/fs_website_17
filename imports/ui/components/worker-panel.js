import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./worker-panel.html";

import "./job.js";

const ANIM_OFFSET = 3;

var workContents = [
  // {
  //   name: "Amazon",
  //   logo: "/companies/amazon.png",
  //   position: "Software Development Engineer Intern",
  //   date: "May 2017 - Aug 2017",
  //   desc: [
  //     {content: "Worked on the _____ team"}
  //   ]
  // },
  {
    name: "Hack In",
    logo: "/companies/hackin.png",
    position: "Founder",
    date: "Jul 2016 - Present",
    desc: [
      {content: "Created a customized technical assessment platform to vet software engineer recruits and freelancers"},
      {content: "Separated collections stored in MongoDB to leverage relational and document style advantages"},
      {content: "Wrote 5000 lines of code in 3 weeks with the CTO to ensure all features were operational in our BETA release"},
      {content: "Implemented ACE editor API to receive code and Filestack API to store documents as urls in the database"},
      {content: "Temporarily using email to store redundant data of applicant submissions in the company account"},
    ]
  },{
    name: "AKALA",
    logo: "/companies/akala.png",
    position: "Full Stack Software Engineer Intern",
    date: "Sep 2015 - Jul 2016",
    desc: [
      {content: "Developed a mobile app for virtual college counseling using Meteor as a full stack framework"},
      {content: "Minimized effects of server calls on client views by caching data in localStorage"},
      {content: "Implemented front-end and stored data in MongoDB in proper JSON format to be available for REST calls"}
    ]
  },
  {
    name: "Beeyond Inc.",
    logo: "/companies/beeyond.png",
    position: "Software Engineer Intern - Mobile Applications",
    date: "Jun 2015 - Sep 2015",
    desc: [
      {content: "Developed an API and Angular MVC structure for a mobile app linked to a Firebase database"},
      {content: "Created a Mocha-Chai framework with Protractor.js for E2E testing and Karma for unit testing"},
      {content: "Designed the front-end infrastructure using Ionic and Cordova for cross-platform integration"},
      {content: "Implemented the authentication flow with database checks and front-end alerts for faulty inputs"},
      {content: "Lazy loaded tinder-style cards and optimized the database schema for UI/UX performance."}
    ]
  },
  {
    name: "The Princeton Education Network",
    logo: "/companies/princetoned.png",
    position: "Web Designer",
    date: "Jun 2015 - Sep 2015",
    desc: [
      {content: "Designed a new website for SAT, ACT, and college application guidance and increased marketing with SEO"},
      {content: "Increased customers from ~200 to over 3000, collecting more than 4000 visits and 13,000 page views"}
    ]
  }
]

Template.Worker_panel.onCreated(function workerPanelOnCreated() {

});

Template.Worker_panel.onRendered(function() {

});

Template.Worker_panel.helpers({
  getWorkContents: function() {
    return workContents;
  },
  getAnimInt: function(index) {
    return ANIM_OFFSET + index;
  }
});

Template.Worker_panel.events({

});
