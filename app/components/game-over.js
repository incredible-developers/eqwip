import Ember from 'ember';

export default Ember.Component.extend({
  cashLow: function() {
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
  },

  cashMedium: function() {
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
  },

  cashHigh: function() {
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
  }
});
