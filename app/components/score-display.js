import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['score'],
  classNameBindings: ['isPreGame:pre-game', 'isInProgress:in-progress', 'isFinal:final'],
  isPreGame: true,
  isInProgress: false,
  isFinal: false,
  attributeBindings: ['data-component'],
  'data-component': 'score'
});
