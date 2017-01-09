import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['u-marginBottom'],
  gauge: null,

  didInsertElement() {
    this._super(...arguments);
    this.gauge = new JustGage({
      id: this.get('gauge-id'),
      min: 0,
      max: 8000,
      value: this.get('value'),
      hideMinMax: true,
      hideValue: true,
      title: "Title"
    });
    this.$('#' + this.get('gauge-id')).tooltip({
      show: false,
      hide: false,
    });
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.gauge.refresh(this.get('value'));
  }
});
