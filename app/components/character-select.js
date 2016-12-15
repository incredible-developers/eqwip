import Ember from 'ember';

export default Ember.Component.extend({
  characterSelected: '',
  zaraSelected: Ember.computed('characterSelected', function() {
    return this.get('characterSelected') === 'Zara';
  }),
  musaSelected: Ember.computed('characterSelected', function() {
    return this.get('characterSelected') === 'Musa';
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
