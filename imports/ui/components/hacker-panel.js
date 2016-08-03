import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./hacker-panel.html";

var hackerContent = [
  { title:'Hack In', founders: 'Founding Team: Felix Su, Isabella Rich, Peter Lee, Antti Parviainen, Erika Ho', logo: '/projects/hackin-logo.png', desc: 'An online developer recruitment platform.', date: 'Jul 2016', time: '3 min read', url: 'http://hackin.io', urlTitle: 'Hack In Website', linkIcon: 'link',
    content: "" +
    "<p>Hack In is a developer assessment tool turned aspiring company. It was created in the European Innovation Academy in Nice, France during July 2016 and has generated interest from many venture capitalists at the program who strongly recommended that we continue bootstrapping for 6 months and then turn to VCs for additional funding.</p>" +
    "<p>After working for a few Bay Area startups I found out how painful software developer recruitment was for these small teams. The CTO would often be cooped up in an interview room (usually blankly waiting for an interviewee's response) instead of speedily developing the product with the rest of the tech team, the CEO had little time to pay much heed to the process, and we cycled through many applicants that didn't fit our needs.</p>" +
    "<p>As someone with a computer science background I wanted to save these startups time and money at the most essential phase of their growth, the beginning. It is important to develop quickly as a startup with minimal expenses, so our team set out on a mission to <strong>cut down on startups' recruiting costs while adding even more value</strong>. Thus we decided on a <strong>cost-effective technical assessment and automated evaluation process.</strong></p>" +
    "<p>Many services like this already exist, so Antti set out to do some customer validation with small companies and participants at the EIA program. Turns out a huge audience that has been excluded is the freelancer hiring market. Budding entrepreneurs need coders to develop newborn ideas, but have no idea how to vet the freelancers they get, because they do not understand the code they need.</p>" +
    "<p>The key to Hack In's success is its <strong>customizability</strong> and its <strong>practical programming focus</strong>. Customers provide detailed descriptions of their developer needs and we translate those requests into technical tests for skills that we know are necessary to implement your business ideas. Some websites need certain APIs to be implemented and others may require a very strong knowledge of servers and databases. We will make sure the proper skills are tested before your hires demand crazy wages.</p>" +
    "<p>We also know that startups require an extremely fast development process, which means computational knowledge that comes with studying datastructures and algorithms often don't apply at the beginning stages of startups. We pivoted to focus on practical programming knowledge. Who cares if you can implement a Depth First Search if you want a Front-end heavy mobile app. <em>Companies want to know if their hires can build their product, so that's what we will examine.</em></p>" +
    "<p>Each company or freelancer hirer gets their own <strong>custom dashboard with test evaluation results and their own custom test questions to send to applicants</strong>. One premium feature that is a work in progress is a <strong>global matching algorithm</strong> that aggregates all candidates on our platform and shows users possible fits for their companies even if they have not yet applied.</p>"
  },
  { title:'CALERT', founders: 'Project by Felix Su', logo: '/projects/calert-logo.png', desc: 'Suspicious activity tracker and emergency alert app.', date: 'Apr 2016', time: '2 min read', url: 'http://calert-web.herokuapp.com', urlTitle: 'CALERT Website', linkIcon: 'link',
    content: "" +
    "<p>At the start of every semester at Cal, there is always a wave of dangerous activity that causes PSA's to be written all over Facebook and students being scared to walk them home. However, with these scattered accounts, it is hard to know where and what to avoid. CALERT's solution is two fold. First, it consists of a website that crowdsources campus PSAs and police reports and uses the Google Maps API to mark recent dangers. The second consists of a mobile app that uses a single button to turn on GPS tracking and alert the correct officials and friends that you are currently in danger.</p>" +
    "<p>After three days the events will clear to avoid clutter and outdate information, but you can review history to see which areas should historically be avoided. Also you can pan to other universities and areas to check on your friends or see what to look out for when you travel.</p>" +
    "<p>I came up with this idea because I thought it was a shame that there was no UI for danger reports. I do appreciate announcements, but I would want to know whether something is an isolated incident or not and which route to take if I need to walk somewhere. Also if it is late at night and you have no idea who is awake and nearby, a single button press can request any nearby friends to walk you home and whoever is awake will respond.</p>" +
    "<p>Additionally two button presses alerts campus authorities of suspicious activity just as a 'blue light' would and three presses would broadcast emergency alerts to reach the 911 dispatch in emergency situations.</p>" +
    "<p>Hopefully with this technology people on campus will feel much more knowledgable about their campus and feel safer every day."
  },
  { title:'UCode', founders: 'Project by Felix Su (inspired by Canishka De Silva)', logo: '/projects/ucode-logo.png', desc: 'Contact sharing reimagined with QR codes.', date: 'Dec 2015', time: '1 min read', url: 'https://github.com/felixs8696/UCode', urlTitle: 'UCode GitHub Repo', linkIcon: 'github',
    content: "" +
    "<p>As an programmer I have been handed plenty of business cards and sent emails and contact info in a variety of formats. Unfortunately it is quite a pain to sort through all of these and manually add them to my contacts. Inspired by Snapchat's snapcode technology I set out to create a similar QR-code style business card app that could be re-formatted based on which information you would like to share. Thus, UCode was born.</p>" +
    "<p>Plently of business card apps exist out there, but UCode generates different codes depending on which information you select. With my friends I would like to share all my social media information with, but in professional networking settings I might only like to share my email and phone number. UCode will adapt the QR-code to your settings and send only the requisite information to the recipients.</p>" +
    "<p>This way you will only need the snap of a button to share and receive information.</p>"
  },
  { title:'Postmates Dash', founders: 'Created at CalHacks 2.0 by Felix Su, Omid Rhezaii, Luis Valle', logo: '/projects/postmatesdash-logo.png', desc: 'Schedule repeated deliveries of common store items.', date: 'Oct 2015', time: '2 min read', url: 'http://devpost.com/software/postmates-dash', urlTitle: 'PostmatesDash Devpost Submission', linkIcon: 'file-code-o',
    content: "" +
    "<p>Essentials like toilet paper, soap, trashbags, etc. need to be replenished regularly. Unfortunately as a busy student, worker, or parent, your shopping schedule doesn't always align with your life schedule. Postmates Dash is a on-demand, scheduled, delivery app that solves this problem by combining the services of Postmates and Amazon Dash. You can schedule regular deliveries to receive essentials before you even realize you're running low, or you can restock within minutes on-demand.</p>" +
    "<p>CalHacks 2.0 was my first official Hackathon. I had three goals. One: to build a working product, two: build something useful, three: use the newest and coolest APIs and technology offered. With the arrival of Postmates as the new kid of the block with a combination of a sharing economy and goods devliery as their business model, we hopped on board when they announced the launch of their public API.</p>" +
    "<p>Luis came up with the idea of using another cool invention, Amazon Dash as a launchpad for our idea. The idea of having a button to place around the house that orders items on demand was a cool service that we believed we could improve with software. We blended the Postmates and Amazon Dash together to create Postmates Dash."
  }
]

Template.Hacker_panel.onCreated(function hackerPanelOnCreated() {

});

Template.Hacker_panel.onRendered(function() {

});

Template.Hacker_panel.helpers({
  getHackerContent: function() {
    return hackerContent;
  }
});

Template.Hacker_panel.events({

});
