import Ember from 'ember';

export default Ember.Component.extend({
  characterSelected: '',
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
