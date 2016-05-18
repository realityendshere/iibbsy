import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['date'],
  attributeBindings: ['data-component'],
  'data-component': 'date'
});
