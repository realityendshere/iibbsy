import Ember from 'ember';
import DS from 'ember-data';
import Model from 'ember-data/model';
import { ordinalSuffix } from '../helpers/ordinal-suffix';
import { localizeTime } from '../helpers/localize-time';

export default Model.extend({
  time: DS.attr('string'),
  ampm: DS.attr('string'),
  timeZone: DS.attr('string'),
  gameDate: DS.attr('string'),
  gameTime: Ember.computed('gameDate', 'time', 'ampm', 'timeZone', function() {
    let date = this.get('gameDate'),
      time = this.get('time'),
      ampm = this.get('ampm'),
      gameTimeZone = this.get('timeZone');

    return localizeTime(date, time, ampm, gameTimeZone);
  }),
  venue: DS.attr('string'),
  location: DS.attr('string'),
  gameStatus: DS.attr(),
  isPreGame: Ember.computed('gameStatus', function() {
    return this.get('gameStatus.status') === 'Pre-Game';
  }),
  isPreview: Ember.computed('gameStatus', function() {
    return this.get('gameStatus.status') === 'Preview';
  }),
  isWarmup: Ember.computed('gameStatus', function() {
    return this.get('gameStatus.status') === 'Warmup';
  }),
  isInProgress: Ember.computed('gameStatus', function() {
    return this.get('gameStatus.status') === 'In Progress';
  }),
  isFinal: Ember.computed('gameStatus', function() {
    return this.get('gameStatus.status') === 'Final' || this.get('gameStatus.status') === 'Game Over';
  }),
  isExtraInnings: Ember.computed('gameStatus', function() {
    let innings = parseFloat(this.get('gameStatus.innings'));

    return innings > 9;
  }),
  finalInning: Ember.computed('gameStatus', function() {
    return parseFloat(this.get('gameStatus.innings'));
  }),
  currentInning: Ember.computed('gameStatus', function() {
    let currentInning = ordinalSuffix(this.get('gameStatus.inning')),
      inningState = this.get('gameStatus.inning_state');

      return `${inningState} ${currentInning}`;
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
  homeProbablePitcher: DS.attr(),
  linescore: DS.attr(),
  awayTeamRuns: Ember.computed('linescore', function() {
    return this.get('linescore.r.away');
  }),
  awayTeamHits: Ember.computed('linescore', function() {
    return this.get('linescore.h.away');
  }),
  awayTeamErrors: Ember.computed('linescore', function() {
    return this.get('linescore.e.away');
  }),
  homeTeamRuns: Ember.computed('linescore', function() {
    return this.get('linescore.r.home');
  }),
  homeTeamHits: Ember.computed('linescore', function() {
    return this.get('linescore.h.home');
  }),
  homeTeamErrors: Ember.computed('linescore', function() {
    return this.get('linescore.e.home');
  }),
  winningPitcher: DS.attr(),
  winningPitcherWins: Ember.computed('winningPitcher', function() {
    return this.get('winningPitcher.wins');
  }),
  winningPitcherLosses: Ember.computed('winningPitcher', function() {
    return this.get('winningPitcher.losses');
  }),
  winningPitcherERA: Ember.computed('winningPitcher', function() {
    return this.get('winningPitcher.era');
  }),
  losingPitcher: DS.attr(),
  losingPitcherWins: Ember.computed('losingPitcher', function() {
    return this.get('losingPitcher.wins');
  }),
  losingPitcherLosses: Ember.computed('losingPitcher', function() {
    return this.get('losingPitcher.losses');
  }),
  losingPitcherERA: Ember.computed('losingPitcher', function() {
    return this.get('losingPitcher.era');
  }),
  savePitcher: DS.attr(),
  hasSavePitcher: Ember.computed('savePitcher', function() {
    return this.get('savePitcher.id') !== '';
  }),
  savePitcherSaves: Ember.computed('savePitcher', function() {
    return this.get('savePitcher.saves');
  })
});
