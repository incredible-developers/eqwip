import Ember from 'ember';

export default Ember.Component.extend({
  characterSelected: '',
  classNames: ["flexBlock flexVertical"],
  startingCash: Ember.computed('characterSelected',function() {
    var character = this.get("characterSelected")
    if (character == "Lamisi") {
      return 500
    } else {
      return 1100
    }
  }),
  startingIncome: Ember.computed('characterSelected',function() {
    var character = this.get("characterSelected")
    if (character == 'Zara') {
      return 800
    } else if (character == "Lamisi") {
      return 0
    } else if (character == "Kojo") {
      return 0
    }
  }),
  zaraSelected: Ember.computed('characterSelected', function() {
    return this.get('characterSelected') === 'Zara';
  }),
  kojoSelected: Ember.computed('characterSelected', function() {
    return this.get('characterSelected') === 'Kojo';
  }),
  lamisiSelected: Ember.computed('characterSelected', function() {
    return this.get('characterSelected') === 'Lamisi';
  }),
  actions: {
    selectCharacter(character) {
      this.set('characterSelected', character);
    }
  }
});
