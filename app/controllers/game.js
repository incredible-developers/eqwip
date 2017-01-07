import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['character', 'month', 'income', 'cash'],
  character: null,
  month: 1,
  answers: {},

  // indicators
  cash: null,
  income: null,
  debt: null,
  assets: null,
  resilience: null,
  environmental: null,

  actions: {
    answerQuestion(answer) {
      this.setAnswer(answer)
      this.setImpact

      var nextMonth = this.get('month') + 1
      this.set('month', nextMonth)
    }
  },
  setAnswer: function(answer) {
    var answers = this.get('answers')

    answers[this.get('month')] = answer
    this.set('answers', answers)
  }
});
