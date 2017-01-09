import Ember from 'ember';

export default Ember.Component.extend({
  character: null,
  cashLow: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('cash') <= 8000
    };

    if (character == 'Lamisi') {
      return this.get('cash') <= 7000
    };

    if (character == 'Kojo') {
      return this.get('cash') <= 4000
    };
  }),

  cashMedium: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return ((this.get('cash') < 13000) && (this.get('cash') > 8000))
    };

    if (character == 'Lamisi') {
      return ((this.get('cash') > 7000 ) && ((this.get('cash') < 10000 )))
    };

    if (character == 'Kojo') {
      return ((this.get('cash') > 4000 ) && ((this.get('cash') < 7000 )))
    };
  }),

  cashHigh: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('cash') >= 13000
    };

    if (character == 'Lamisi') {
      return this.get('cash') >= 10000
    };

    if (character == 'Kojo') {
      return this.get('cash') >= 7000
    };
  }),

  resilienceHigh: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('resilience') >= 18
    };

    if (character == 'Lamisi') {
      return this.get('resilience') >= 15
    };

    if (character == 'Kojo') {
      return this.get('resilience') >= 18
    };
  })

  resilienceMedium: Ember.computed('resilienceHigh', 'resilienceLow', function() {
    !(this.get('resilienceHigh') || this.get('resilienceLow'))
  })

  resilienceLow: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('resilience') <= 7
    };

    if (character == 'Lamisi') {
      return this.get('resilience') <= 6
    };

    if (character == 'Kojo') {
      return this.get('resilience') <= 10
    };
  })

  environmentHigh: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('environment') >= 2
    };

    if (character == 'Lamisi') {
      return this.get('environment') >= 2
    };

    if (character == 'Kojo') {
      return this.get('environment') >= 4
    };
  })

  environmentMedium: Ember.computed('character', function() {
    var character = this.get('character')
    !(this.get('environmentHigh') || this.get('environmentLow'))
  })

  environmentLow: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('environment') <= 0
    };

    if (character == 'Lamisi') {
      return this.get('environment') <= -2
    };

    if (character == 'Kojo') {
      return this.get('environment') <= 1
    };
  })
});
