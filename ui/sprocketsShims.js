// This is a temporary file, used for when we need to run our code outside of Rails,
// while we migrate the rest of those over.  Examples: testing, PDF, Storybook.
// Including this code in setupTests doesn't work directly, I'm not sure why.
import $ from 'jquery';
window.$ = window.jQuery = $;
window.$.fn.datepicker = function() {};
window.$.fn.autocomplete = function() {};


import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
window.React = React;
window.ReactDOM = ReactDOM;
window.ReactTestUtils = ReactTestUtils;


import ReactModal from 'react-modal';
window.ReactModal = ReactModal;


import moment from 'moment';
window.moment = moment;


window.Cookies = {
  getJSON() { return {}; }
};


import d3 from 'd3';
window.d3 = d3;