import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['character', 'month', 'income', 'cash'],
  character: null,
  month: 1,
  answers: {},

  // indicators
  cash: null,
  income: null,
  debt: 0,
  assets: 0,
  resilience: 0,
  environment: 0,

  actions: {
    answerQuestion(impact) {
      console.log(impact)
      this.setAnswer(impact)

      this.setImpact(impact)
      this.applyIncome()

      var nextMonth = this.get('month') + 1
      this.set('month', nextMonth)
    }
  },

  applyIncome: function() {
    var income = parseInt(this.get('income'))
    var currentCash = parseInt(this.get('cash'))
    this.set('cash', currentCash + income)
  },

  setImpact: function(impact) {
    if (impact.cash != undefined) {
      this.set('cash', parseInt(this.get('cash')) + impact.cash)
    }
    if (impact.resilience != undefined) {
      this.set('resilience', this.get('resilience') + impact.resilience)
    }
    if (impact.income != undefined) {
      this.set('income', parseInt(this.get('income')) + impact.income)
    }
    if (impact.environment != undefined) {
      this.set('environment', this.get('environment') + impact.environment)
    }
  },

  setAnswer: function(answer) {
    var answers = this.get('answers')

    answers[this.get('month')] = answer
    this.set('answers', answers)
  }
});
