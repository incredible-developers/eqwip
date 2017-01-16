import Ember from 'ember';

export default Ember.Component.extend({
  character: '',
  tagName: 'div',
  classNames: ['avatar'],
  classNameBindings: ['isZara:avatar--zara', 'isLamisi:avatar--lamisi', 'isKojo:avatar--kojo', 'isSmall:avatar--small'],
  isSmall: false,

  isZara: Ember.computed('character', function() {
    var reg = /Zara/i
    return reg.test(this.get('character'))
  }),
  isLamisi: Ember.computed('character', function() {
    var reg = /Lamisi/i
    return reg.test(this.get('character'))
  }),
  isKojo: Ember.computed('character', function() {
    var reg = /Kojo/i
    return reg.test(this.get('character'))
  })
});
