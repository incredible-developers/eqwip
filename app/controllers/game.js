import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['character', 'month', 'income', 'cash'],
  isShowingModal: false,
  character: null,
  month: 1,
  gameOverManGameOver: null,
  answers: {},

  introShown: false,

  // indicators
  cash: 0,
  income: 0,
  debt: 0,
  debtPayments: 0,
  assets: 0,
  resilience: 0,
  environment: 0,
  assetsArray: [],

  actions: {
    answerQuestion(impact) {
      this.setImpact(impact);
      //Fix for Lamisi first month
      if(this.get('month') === 1 && this.get('character') === 'Lamisi'){
        var nextMonth = this.get('month') + 1
        this.set('month', nextMonth)
      }
    },

    startGameClicked: function() {
      this.set('introShown', true)
    },

    setImpact: function(impact) {
      this.setImpact(impact)
    },

    endGame() {
      this.set('gameOverManGameOver', true)
    },

    applyIncome(impact) {
      var income = parseInt(this.get('income'))
      var currentCash = parseInt(this.get('cash'))
      this.set('cash', currentCash + income)

      var debtPayments = parseInt(this.get('debtPayments'))
      var debt = this.get('debt')

      if (!!debtPayments && !!debt) {
        this.set('debt', (debt - debtPayments))
        this.set('cash', (this.get('cash') - debtPayments))
      }

      if (impact.debtPayments != undefined) {
        this.set('debtPayments', parseInt(this.get('debtPayments')) + impact.debtPayments)
      }
    },
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
    if (impact.assets != undefined) {
      this.set('assets', parseInt(this.get('assets')) + impact.assets)
    }
    if (impact.environment != undefined) {
      this.set('environment', this.get('environment') + impact.environment)
    }
    if (impact.assetText != undefined) {
      var assArray = this.get('assetsArray')
      assArray.push(impact.assetText)
      this.set('assetsArray', assArray)
    }
  },
});
