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
  ],

  environmentMax: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return 3
    };

    if (character == 'Lamisi') {
      return 3
    };

    if (character == 'Kojo') {
      return 4
    };
  }),

  environmentMin: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return -3
    };

    if (character == 'Lamisi') {
      return -3
    };

    if (character == 'Kojo') {
      return -4
    };
  }),


  resilienceMin: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return 0
    };

    if (character == 'Lamisi') {
      return -5
    };

    if (character == 'Kojo') {
      return 0
    };
  }),

  resilienceMax: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return 19
    };

    if (character == 'Lamisi') {
      return 16
    };

    if (character == 'Kojo') {
      return 19
    };
  }),

  assetsMin: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return 0
    };

    if (character == 'Lamisi') {
      return 0
    };

    if (character == 'Kojo') {
      return 0
    };
  }),

  assetsMax: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return 9
    };

    if (character == 'Lamisi') {
      return 4
    };

    if (character == 'Kojo') {
      return 4
    };
  }),

});
