import Ember from 'ember';

export default Ember.Component.extend({
  gage: null,

  didInsertElement() {
    this._super(...arguments);
    this.gage = new JustGage({
      id: "test",
      min: 0,
      max: 10000,
      value: this.get('value'),
    });
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.gage.refresh(this.get('value'));
  }
});
