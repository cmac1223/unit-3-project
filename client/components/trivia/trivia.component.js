
const controller = require('./trivia.controller.js');
const template = require('./trivia.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('trivia-trainer')
  .component('trivia', component);