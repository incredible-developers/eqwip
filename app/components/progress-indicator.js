import Ember from 'ember';

export default Ember.Component.extend({
  gage: null,

  didInsertElement() {
    this._super(...arguments);
    this.gage = new JustGage({
      id: this.get('gauge-id'),
      min: 0,
      max: 8000,
      value: this.get('value'),
      hideMinMax: true,
      hideValue: true,
      title: "Title"
    });
    this.$('#' + this.get('gauge-id')).tooltip();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.gage.refresh(this.get('value'));
  }
});
