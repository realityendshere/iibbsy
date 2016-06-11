import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['score'],
  attributeBindings: ['data-component'],
  'data-component': 'score'
});
