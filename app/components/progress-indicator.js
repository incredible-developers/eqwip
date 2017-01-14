import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [],
  gauge: null,
  min: null,
  max: null,

  didInsertElement() {
    this._super(...arguments);
    this.gauge = new JustGage({
      id: this.get('gauge-id'),
      min: this.get('min'),
      max: this.get('max'),
      value: this.get('value'),
      hideMinMax: true,
      hideValue: true,
      needleTail: true,
      pointer: true,
      levelColors: ['#DC3912', "#f9c802", '#00FF00'],
      gaugeColor: 'white',
    });
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.gauge.refresh(this.get('value'));
  }
});
