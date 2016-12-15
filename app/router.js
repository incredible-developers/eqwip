import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('character-select', function() {
    this.route('index');
  });
  this.route('dashboard');
  this.route('game');
});

export default Router;
