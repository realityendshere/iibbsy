import Ember from 'ember';
import DS from 'ember-data';
import Model from 'ember-data/model';

export default Model.extend({
  time: DS.attr('string'),
  ampm: DS.attr('string'),
  timeZone: DS.attr('string'),
  venue: DS.attr('string'),
  location: DS.attr('string'),
  gameStatus: DS.attr(),
  isPreGame: Ember.computed('gameStatus', function() {
    return this.get('gameStatus.status') === 'Pre-Game';
  }),
  awayTeamName: DS.attr('string'),
  awayTeamAbbrev: DS.attr('string'),
  awayTeamLogo: Ember.computed('awayTeamAbbrev', function() {
    let awayTeamAbbrev = this.get('awayTeamAbbrev');

    return `assets/images/team-logos/${awayTeamAbbrev.toLowerCase()}.png`;
  }),
  awayTeamWins: DS.attr('number'),
  awayTeamLosses: DS.attr('number'),
  awayProbablePitcher: DS.attr(),
  homeTeamName: DS.attr('string'),
  homeTeamAbbrev: DS.attr('string'),
  homeTeamLogo: Ember.computed('homeTeamAbbrev', function() {
    let homeTeamAbbrev = this.get('homeTeamAbbrev');

    return `assets/images/team-logos/${homeTeamAbbrev.toLowerCase()}.png`;
  }),
  homeTeamWins: DS.attr('number'),
  homeTeamLosses: DS.attr('number'),
  homeProbablePitcher: DS.attr()
});
