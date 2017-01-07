import Ember from 'ember';

export default Ember.Component.extend({
  character: null,
  answerQuestion: null,
  month: null,

  currentQuestion: Ember.computed('character', 'month', function() {
      return this.get('questions')[this.get('character')][this.get('month')]
    }
  ),

  questionText: Ember.computed('currentQuestion', function() {
      return this.get('currentQuestion')['questionText']
    }
  ),

  answerOptions: Ember.computed('currentQuestion', function() {
    var options = this.get('currentQuestion')['answerOptions']
    return this.get('currentQuestion')['answerOptions']
  }),

  //like half of our games text is going to be in here, which feels hacky
  questions: {
    'Musa': {
      1: {
        'questionText': "This is the text from the first question",
        'answerOptions': {
          1: "First Option",
          2: "Second Option",
          3: "Third Option",
        }
      },

      2: {
        questionText: "More Text from a second question",
        answerOptions: {
          1: "Option for question 2",
          2: "Second Option",
          3: "Third Option",
        }
      },
    },
    'Lamisi': {
      1: {
        questionText: "Though less prone to sickness than chickens, Guinea fowl are susceptible to a number of diseases, including Fowl Pox, Newcastle disease, and Coccidiosis. A disease outbreak will not only decrease Lamisi’s profits, but can potentially decimate her flock.",
        answerOptions: [
          {
            text: "Purchase vaccinations for the flock. Better safe than sorry",
            resultText: "Wise choice. It’s much easier to run a successful poultry farm when you have a healthy flock of birds!"
          },
          {
            text: "Vaccinations are expensive. Take the risk for now, and reconsider once the flock has grown.",
            resultText: "Might as well hold off until the rainy season, when birds are more likely to get sick."
          },
        ]
      },

      2: {
        questionText: "As Lamisi’s flock grows, so too does the volume of waste that she must deal with. She’s been dumping the waste in a small creek away from her yard, but her neighbors have started to complain — not only do her actions risk contaminating local water resources, but the stench is unbearable!",
        answerOptions: [
          {
            text: "Build an isolated area to dispose the waste material until a specialized compost organization can collect it (GHC250)"
          },
          {
            text: "Continue to dump the waste in the creek, but make an effort to spread it across a larger area."
          },
        ]
      },

    }
  },

  actions: {
    answerClicked(a, b) {
      this.get('answerQuestion')(a, b)
    }
  }
});
