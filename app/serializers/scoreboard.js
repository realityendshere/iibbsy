import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    time: 'home_time',
    timeZone: 'home_time_zone',
    gameDate: 'original_date',
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
    let games = payload.data.games.game,
      reorderedGamesList = [],
      inProgress = 0;

    payload = {
      scoreboard: games
    };

    if (games.length === 0) {
      return this._super(store, primaryModelClass, payload, id, requestType);
    }

    games.forEach(function(game) {
      if ((game.status.status === 'Final') || (game.status.status === 'Game Over')) {
        reorderedGamesList.push(game);
      } else {
        reorderedGamesList.splice(inProgress, 0, game);
        inProgress = inProgress + 1;
      }
    });

    if (reorderedGamesList.length === 0) {
      return this._super(store, primaryModelClass, payload, id, requestType);
    } else {
      payload.scoreboard = reorderedGamesList;
    }

    console.log(payload);

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
