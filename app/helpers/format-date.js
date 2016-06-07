import Ember from 'ember';

export function formatDate(params, { format = 'MMMM Do, YYYY' }) {
  let currentDate = params[0];

  return moment(currentDate).format(format);
}

export default Ember.Helper.helper(formatDate);
