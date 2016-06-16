import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let interval = 5000;

    Ember.run.later(this, function() {
      this.model().then((data) => {
        this.controller.set('model', data);
      });
    }, interval);

    return this.store.findAll('scoreboard');
  }
});
