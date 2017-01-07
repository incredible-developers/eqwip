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
            text: "Continue to dump the waste in the creek, but make an effort to spread it across a larger area.",
          },
        ]
      },

      3: {
        questionText: "Lamisi’s uncle is a bureaucrat based in Accra. He is visiting Tamale, and takes her out to a local restaurant known for its grilled guinea fowl with tuo zaafi. As they dine, she overhears the restaurant manager complaining about an inconsistent supply of poultry. She senses an opportunity.",
        answerOptions: [
          {
            text: "After dinner, approach the manager, and offer to be his poultry supplier. Lamisi is confident in her product, and believes that risk-taking is the key to growth.  She promises to bring him 2 fowls first thing in the morning to try out.",
            resultText: "Though hesitant, the manager offers to give Lamisi a shot — what does he have to lose? After sampling her product, he agrees to do business. He offers to purchase a supply of 12 birds a month at a price of GHC25 each. He praises her confidence and initiative. Before signing the contract, Lamisi agrees to pay for a veterinarian to assess the health of her birds (GHC350), and hires a Motorking driver to make her deliveries once a week (GHC40/month).",
          },
          {
            text: "Don’t approach the manager. It will be embarrassing if she is rejected in front of her uncle. Plus, Lamisi thinks it is unlikely that the restaurant manager will partner with a female poultry farmer.",
            resultText: "No risk, no reward. Lamisi leaves the restaurant with a deflated sense of confidence. At least she didn’t have to face rejection."
          },
        ]
      },
       5: {
        questionText: "The government announces that it is cracking down on ‘illegal businesses’. The newspapers claim that inspection officers will be issuing fines to businesses that are not properly registered. ",
        answerOptions: [
          {
            text: "Get the paperwork together, and register! To operate legally, Lamisi will need to apply for a Tax Identification Number (GHC25) and register her business as a sole proprietorship (GHC35).",
            resultText: "Lamisi spends most of her weekend sorting her way through the convoluted application paperwork. On Monday, she heads to the registration office, but there is a massive queue. She waits for several hours, but the queue barely moves. She’s one of the only women present in the queue, and a couple of men begin to harass and tease her. Frustrated and tired, Lamisi decides to go home. The next day, determined to properly register her business, Lamisi decides to hire a man that will wait in line at the office on her behalf. This costs her an extra (GHC50), but it does the trick. A few weeks later, her application is accepted.",
          },
          {
            text: "The government has been saying this for years! Might as well take the risk.",
            resultText: "Lo and behold, two weeks following the government’s announcement, a inspection officer arrives at Lamisi’s farm, asking for her registration papers and TIN. The fine, he explains, will be very expensive."
          },
        ]
      },
      7: {
        questionText: "Lamisi’s younger sister has just started Junior High School, and her fees are due. As the older sister, Lamisi is expected to cover the school fees (GHC150).",
        answerOptions: [
          {
            text: "Pay the fees, and wish her luck.",
            resultText: "Though she would have rather used the money to invest in her business, Lamisi is obligated to help out her family — not only did they provide her with the land needed to start her business, but they have also been increasingly supportive of her endeavor in recent weeks.",
          },
          {
            text: "Pay the fees, and offer her an extra GHC100 for school supplies and new clothing.",
            resultText: "Lamisi’s sister is very grateful for the generous gift. Nor does the gesture go unnoticed by the rest of the family, who have been slowly warming to the idea of Lamisi’s business endeavors. As time passes, Lamisi’s siblings and even her parents start offering to help Lamisi around the farm — feeding and caring for the flock, and other simple chores. The support, though modest, comes as a great relief."
          },
        ]
      },
       9: {
        questionText: "Lamisi’s younger sister has just started Junior High School, and her fees are due. As the older sister, Lamisi is expected to cover the school fees (GHC150).",
        answerOptions: [
          {
            text: "Pay the fees, and wish her luck.",
            resultText: "Though she would have rather used the money to invest in her business, Lamisi is obligated to help out her family — not only did they provide her with the land needed to start her business, but they have also been increasingly supportive of her endeavor in recent weeks.",
          },
          {
            text: "Pay the fees, and offer her an extra GHC100 for school supplies and new clothing.",
            resultText: "Lamisi’s sister is very grateful for the generous gift. Nor does the gesture go unnoticed by the rest of the family, who have been slowly warming to the idea of Lamisi’s business endeavors. As time passes, Lamisi’s siblings and even her parents start offering to help Lamisi around the farm — feeding and caring for the flock, and other simple chores. The support, though modest, comes as a great relief."
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
