import Ember from 'ember';

export default Ember.Component.extend({
  character: null,
  isLamisi: Ember.computed('character', function() {
    return this.get('character') === 'Lamisi';
  }),
  isZara: Ember.computed('character', function() {
    return this.get('character') === 'Zara';
  }),
  isKojo: Ember.computed('character', function() {
    return this.get('character') === 'Kojo';
  }),
  intro : {
    'Lamisi':[
      'Lamisi is a 26-year-old entrepreneur living in Tamale. She has a Higher National Diploma in Business Administration, but has been unemployed for several months. She recently completed a training program on entrepreneurship with EQWIP  HUBs.',
      'Lamisi comes from a family of farmers and has lots of experience in animal husbandry. Now, she wants to start a small poultry farm in her family’s yard. However, farming is a male-dominated industry in Ghana, and Lamisi’s family is not very supportive of her ambitions. Though she does not have children, her family thinks that she should choose a more traditional vocation — one that will not interfere with the obligations of motherhood.',
      'Despite her family’s objections, Lamisi decides to launch her business.'
    ],
    'Zara':[
      'Zara is a 31-year-old entrepreneur and a mother of two young children — a 5-year-old daughter and a 3-year-old son. She lives in Tamale with her husband, Musa, who is a bank teller. She has a background in Marketing and Finance, but currently works from home as a professional makeup artist.',
      'Zara wants to open a new beauty bar that offers makeup services and provides vocational training for young girls in her community. However, this will require significant capital to pay for supplies and to rent a space for her classes.',
      'She has just started an entrepreneurship training program with EQWIP  HUBs, to better prepare herself to launch her business.'
    ],
    'Kojo':[
      'Kojo is a 22-year-old entrepreneur, born and raised in   Accra. He has a Higher National Diploma in Accounting, but is currently unemployed.',
      'Inspired by his passion for the environment, and by the increasing popularity of smartphones around   Accra, Kojo has come up with a new idea: he will to build a mobile application that allows small business owners to schedule a pickup of their plastic waste, which will then be transported to a recycling and processing plant outside of the city. Upon delivery, the small business will receive a mobile money transfer, depending on the weight of each load. The app will be called <i>Recycle Accra!</i>.',
      'However, developing this business won\'t be easy. Though Kojo is tech-savvy and has lots of experience with computers, he has never built a fully functioning mobile application before.'
    ]
  },
  introImages:{
    'Lamisi' : 'Lamisi_Lundy.png',
    'Zara' : 'Zara_Lundy.png',
    'Kojo' : 'Kojo_Lundy.png',
  },

  actions: {
    renderDialog: function(whichModal) {
      this.setDialogContent(whichModal);
      this.toggleProperty('isShowingModal');
    },
  },

  setDialogContent(whichModal) {
    if(whichModal === 'tamale'){
      this.set('currentModalText',
        "Tamale is the third largest city in Ghana, and the capital of the country’s Northern Region. Historically formed around an important trade crossroad, Tamale has in recent years experienced a high degree development, which has produced a new stadium and an international airport. <br/><br/>In Tamale, the informal business sector is by far the largest employer. Indeed, self-employment and small business entrepreneurship is very popular, and on the rise, especially among young women. Other important sources of employment in Tamale include agriculture, services and sales, crafts, the nonprofit sector, and the government.");
    } else if(whichModal === 'eqwipHub'){
      this.set('currentModalText',
        "EQWIP HUBs offers local youth participants free entrepreneurship and employment training, in addition to blended learning and peer-to-peer activities provided by EQWIP HUBs Canadian volunteers and local staff. The training courses are based on a locally adapted, experiential, and participatory curriculum that focuses on market-relevant job skills.");
    } else if(whichModal === 'accra'){
      this.set('currentModalText',
        "A sprawling metropolis of approximately 2,291,352 residents, Accra is the capital of Ghana, and its administrative, economic, and educational center. Accra’s primary economic activities are financial and government services, communications, construction, transport, and agriculture. The city is also home to over 70% of the country’s manufacturing capacity.<br/><br/>Though Accra is one of the wealthiest and most modern cities on the African continent, it is also beset by problems that include congestion, pollution, and poverty. Youth unemployment is a major problem in the capital, with an estimated 30% unemployment rate for people between the ages of 15 and 24.");
    } else if (whichModal === 'eqwip') {
      this.set('currentModalText',
        "EQWIP HUBs offers free entrepreneurship training courses to local youth.<br/><br/> These courses are focused on providing youth with opportunities to develop an innovative mindset to approach business idea generation, and on building practical skills with which they can develop, evaluate, and test these ideas. The courses will also enable participants to develop market-relevant skills, build networks, and access technology.");
    } else {
      this.set('currentModalText', '');
    }
  },
});
