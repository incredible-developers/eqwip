import Ember from 'ember';

export default Ember.Component.extend({
  character: null,
  month: null,
  answers: null,
  monthName: Ember.computed('month', 'character', function() {
    if (this.get('character') == 'Lamisi') {
      return this.get('lamisiMonths')[this.get('month') - 1]
    } else {
      return this.get('normalMonths')[this.get('month') - 1]
    }
  }),
  lamisiMonths: [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March'
  ],
  normalMonths: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
});
