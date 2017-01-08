import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['character', 'month', 'income', 'cash'],
  character: null,
  month: 1,
  gameOverManGameOver: Ember.computed('month', function() {
    if (this.get('month') >= 11) {
      return true
    } else {
      return false
    }
  }),
  answers: {},

  introShown: false,

  // indicators
  cash: null,
  income: null,
  debt: 0,
  assets: 0,
  resilience: 0,
  environment: 0,

  actions: {
    answerQuestion(impact) {
      this.setImpact(impact)

      this.applyIncome()
      var nextMonth = this.get('month') + 1
      this.set('month', nextMonth)
    },

    startGameClicked: function() {
      this.set('introShown', true)
    },

    setImpact: function(impact) {
      this.setImpact(impact)
    }
  },

  applyIncome: function() {
    var income = parseInt(this.get('income'))
    var currentCash = parseInt(this.get('cash'))
    this.set('cash', currentCash + income)

    var debtPayments = parseInt(this.get('debtPayments'))
    var debt = this.get('debt')

    if (!!debtPayments && !!debt) {
      this.set('debt', (debt - debtPayments))
      this.set('cash', (this.get('cash') - debtPayments))
    }
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
    if (impact.debt != undefined) {
      this.set('debt', parseInt(this.get('debt')) + impact.debt)
    }
    if (impact.debtPayments != undefined) {
      this.set('debtPayments', parseInt(this.get('debtPayments')) + impact.debtPayments)
    }
    if (impact.environment != undefined) {
      this.set('environment', this.get('environment') + impact.environment)
    }
  },
});
