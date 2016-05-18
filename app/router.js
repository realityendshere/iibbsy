import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('scoreboard', function() {
    this.route('game', { path: '*wildcard' });
  });
});

export default Router;
