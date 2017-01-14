import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  attributeBindings: ['style'],
  classNames: ['indicator-container indicator-gradient'],
  min: null,
  max: null,
  value: null,

  didInsertElement() {
    this._super(...arguments);
    this.setWidth()
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.setWidth()
  },

  setWidth() {
    var el = this.$('.indicator-bar');

    var list = [];
    for (var i = this.get('min'); i <= this.get('max'); i++) {
      list.push(i);
    }

    var valueIndex = list.indexOf(this.get('value'));
    var percentValue = (valueIndex / list.length);
    var actualWidth = 200 * percentValue
    el.width(actualWidth + 'px')
  }
});
