import Ember from 'ember';

export default Ember.Component.extend({
  character: null,
  isLamisi: Ember.computed('character', function() {
    return this.get('character') == 'Lamisi'
  }),
  isZara: Ember.computed('character', function() {
    return this.get('character') == 'Zara'
  }),
  isKojo: Ember.computed('character', function() {
    return this.get('character') == 'Kojo'
  }),
});
