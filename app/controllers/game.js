import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['character', 'month'],
  character: null,
  month: 1,
  answers: {},
  actions: {
    answerQuestion(answer, impact) {
      this.setAnswer(answer)

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
