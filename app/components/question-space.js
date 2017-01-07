import Ember from 'ember';

export default Ember.Component.extend({
  character: null,
  answerQuestion: null,
  month: null,
  renderingResult: null,
  resultText: null,

  chosenAnswer: null,

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
    'Kojo': {
      1: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      2: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      3: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      4: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      5: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      6: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      7: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      8: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      9: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      10: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      11: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
      },
      12: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: ""
          },
          {
            text: "",
            resultText: ""
          },
        ]
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
            text: "Build an isolated area to dispose the waste material until a specialized compost organization can collect it (GHC250)",
            resultText: "It’s not cheap, but Lamisi feels good about being a responsible steward of the environment. After a few weeks of collecting waste, she decides to reach out to her neighbor and family friend, who rears cattle, so she can learn how to process the waste into manure. He is happy to help. Though it’s a lot of extra work, Lamisi can now sell her manure, or use it to fertilize her family’s vegetable garden. (Cash up)"
          },
          {
            text: "Continue to dump the waste in the creek, but make an effort to spread it across a larger area.",
            resultText: "Lamisi saved a buck, but at the expense of the natural environment, on which she and her neighbors depend. On hot days, the stench of from her farm is enough to turn away customers. Nor are her neighbors impressed. Lamisi may come to regret this choice yet."
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
       questionText: "One of the traders in Lamisi’s Susu circle tells her about Esoko — a mobile agribusiness tool that connects smallholder farmers with businesses, governments, and NGOs. Farmers can sign up using their cell phone to access key information about market prices, weather forecasts, agronomic tips, crop calendars, market trends, and more. Esoko just opened a branch in Tamale, the trader explains. Esoko’s Managing Director claims that the branch was established to bridge the gap in information flow between smallholder farmers and key players in the agricultural value chain. This sounds like a great opportunity! Unfortunately, Esoko is designed to work most efficiently with smartphones — Lamisi only has a ‘yam’.",
       answerOptions: [
         {
           text: "Buy a cell phone and data package, and sign up for Esoko!  (GHC500 for a new phone, plus GHC20/month for data). ",
           resultText: "What a difference! Corresponding with the Esoko experts provides Lamisi with the confidence to make changes to her business model and the way that she manages her farm. She develops a better system for tracking changes in the market and setting your prices, and a new feed mix that makes use of low-cost substitutes. Esoko also offers tips on how to better clean and maintain the feeding and watering troughs for your birds. Investing in a smartphone has also made it much easier to connect with her current clients and advertise her business using the digital communications tool WhatsApp.",
         },
         {
           text: "Save the cash. Lamisi has contacts in the marketplace that provide information about prices and market trends. Plus, she grew up on a farm! She can take care of her birds without the help of experts in an office far away.",
           resultText: "Maybe down the road, when Lamisi has more cash saved, she will consider buying a cell phone. Back to work."
         },
       ]
      },
      10: {
      questionText: "The rainy season is ending, and the Harmattan — a dry and dusty northeasterly trade wind that blows from the Sahara over West Africa from December to March — is on its way. The hot, dry weather will make it difficult for Lamisi’s birds to thrive, and the farm’s production will likely suffer.  Lamisi begins to worry about the sustainability of her business. The market has become saturated — services like Esoko have made it easier for new entrepreneurs to enter the market, further eating into her demand.  Lamisi must find a new way to innovate — to bring something new or different to the table. She reaches out to customers, restaurant owners, and wholesalers, in order to find out how to better improve her business.  (Click next) Lamisi’s research produces some interesting findings. First, she learns that most restaurants, hotels, and households in urban areas in Northern Ghana rely on frozen poultry products imported from the South or from overseas — these products are typically cheaper, pre-cut, processed, and ready to use.  However, customers and restaurants also reported a preference for local, fresh poultry, even if it is a bit more expensive. Many customers believe that fresh poultry is healthier than the frozen kind. However, frozen poultry is considered more convenient and more reliable. Plus, customers do not want to kill or prepare their own birds.  (Click next) Lamisi comes up with two ways to make use of these findings:",
      answerOptions: [
        {
          text: "Rebrand the business: “Lamisi’s Free-Range Farm: the fresh and healthy choice for poultry in Tamale.” Improve the quality of the product, and increase the price.",
          resultText: "For this scheme to work, Lamisi will need to produce goods that are as healthy and high quality as advertised! After consulting with some more experienced farmers and doing some research online, she replaces many of the low-cost ingredients in her feed mix with higher-quality, organic products, and also begins to add herbal supplements to her birds’ water supply. (GHC150 per month). She also further expands her pen to create more space for her birds to roam (GHC150) Lamisi will eventually have to raise her prices, but not just yet.",
        },
        {
          text: "Reach out to local restaurants or hotels, and offer to supply, prepare, and deliver a regular shipment of fresh eggs and guinea fowl.  Focus on reliability and customer convenience, in order to better compete with the suppliers of frozen chicken.",
          resultText: "Lamisi reaches out to three local restaurants, and offers to supply them with a regular shipment of fresh eggs and guinea fowl.  The first restaurateur she speaks to turns her down. He subtly hints that he does not want to rely on a young woman to supply his poultry. However, Lamisi does not give up. She brings a free sample of her products to the next two restaurateurs she visits, both of which agree to a two-week trial! In order to supply these restaurants, Lamisi will need to purchase new equipment and build an isolated area (GHC200) in order to properly kill and dress the birds."
        },
      ]
      },
      13: {
        questionText: "Six months have passed, and it’s Lamisi’s turn once again to access the cash from her Susu circle (GHC400). Now that she has enough cash, she purchases a round of vaccinations for her a flock, which should last her through the coming season (GHC200).  (Click Next) Lamisi’s cousin, who is getting married next week, drops by the farm and asks her to provide a half dozen birds for the occasion.  She is happy to oblige, and offers the half-dozen birds for a price of GHC150. Her cousin gets upset, and claims that he is offended that she would try to charge a family member, as if he was just another customer. He re-asserts that she should give the birds to him for free.",
        answerOptions: [
          {
            text: "Let him take the birds for free. It’s best to avoid any more family tension.",
            resultText: "That stings, but Lamisi didn’t think she had a choice. Her family already disapproves of her business, and she doesn’t want to create any more bad blood.",
          },
          {
            text: "Call his bluff, and offer to provide the half-dozen birds for a discounted price of GHC100.",
            resultText: "Lamisi’s cousin shakes off her counter-offer. He takes two of the live birds, and leaves. He claims that he will give her money for them next time he see her, but this seems unlikely. Lamisi’s pride and self-esteem are hurt by this unpleasant and costly encounter."
          },
        ]
      },
    }
  },

  actions: {
    renderResult(answer) {
      this.set('chosenAnswer', answer)
      this.set('resultText', answer.resultText)
    },
    submitAnswer(answer) {
      this.set('resultText', null)
      this.set('chosenAnswer', null)
      this.get('answerQuestion')(answer)
    }
  }
});
