import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    time: 'home_time',
    timeZone: 'home_time_zone',
    gameStatus: 'status',
    awayTeamName: 'away_team_name',
    awayTeamAbbrev: 'away_name_abbrev',
    awayTeamWins: 'away_win',
    awayTeamLosses: 'away_loss',
    awayProbablePitcher: 'away_probable_pitcher',
    homeTeamName: 'home_team_name',
    homeTeamAbbrev: 'home_name_abbrev',
    homeTeamWins: 'home_win',
    homeTeamLosses: 'home_loss',
    homeProbablePitcher: 'home_probable_pitcher'
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let data = payload.data.games.game;

    payload = {
      scoreboard: data
    };

    console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
