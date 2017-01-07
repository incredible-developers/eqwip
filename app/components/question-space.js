import Ember from 'ember';

export default Ember.Component.extend({
  character: null,
  answerQuestion: null,
  month: null,
  renderingResult: null,
  resultText: '',

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
        questionText: "First thing’s first — Kojo will need cash to fund his business endeavor! Currently, he has GHC1100 in savings, which he accumulated during his time with the national service. He figures he will need a lot more than that to successfully build a viable mobile application. Unfortunately, high interest rates, mandatory collateral requirements, and other bureaucratic obstacles make it all but impossible for young entrepreneurs to access credit through formal financial institutions in Ghana. Therefore, most young entrepreneurs must rely on the help of relatives and friends, or access credit through informal alternatives.",
        answerOptions: [
          {
            text: "Reach out to family for a loan.",
            resultText: "Though they do not have a lot of money, Kojo asks his family for a loan of GHC3000. Kojo’s two older siblings and uncle are happy to help him out. His father, however, is very reluctant — he worked hard to pay for his son’s tertiary education, and does not understand why he is building gadgets instead of finding a real job. He finally concedes, but warns Kojo that the family will not lend him any more money if he is not able to repay the loan within a year. Kojo promises to pay back the the loan in monthly installments of GHC250."
          },
          {
            text: "Apply for part-time work as a teacher or a tutor at the local secondary school.",
            resultText: "Kojo’s background in accounting qualifies him to teach mathematics to high school students. He can earn GHC500 per month teaching 3 afternoons a week, though this means that he will have less time to focus on his business."
          },
        ]
      },
      2: {
        questionText: "Now that Kojo has found a source of cash, it’s time to build the mobile application! Though Kojo has some experience building websites and a rudimentary understanding of coding, he will not be able to build a fully functional app on his own.",
        answerOptions: [
          {
            text: "Hire a developer to build the mobile application. Kojo gets a quote from a development firm that can build a basic mobile application over the course of 3 months for GHC3500.",
            resultText: "Kojo is confident in his decision. He has found a developer that he can trust will deliver a quality product. The developer also agrees to accept payment in monthly installments of GHC875, starting next month."
          },
          {
            text: "Enroll in a coding bootcamp, and learn how to build the app ‘in-house’. The Code School is offering an 8-week intensive program. The program, which starts at the beginning of next month, costs GHC1000 up front. He will also have to purchase a laptop (GHC1100).",
            resultText: "As the name implies, coding bootcamps are no a walk in the park. Every weekday morning for 8 weeks straight, Kojo will have to work extremely hard to learn the fundamental technical skills needed to build a mobile app. However, he believes that if he works hard, he will become equipped with the skills required to not only build a basic application, but to better overcome obstacles that are all but certain to arise down the road. What’s more, The Code School provides ongoing mentorship and support for graduates of the program. A major risk, of course, is that Kojo may end up building an application that is riddled with mistakes, or that does not properly function."
          },
        ]
      },
      3: {
        questionText: "It will still be several weeks until the Recycle Accra! application is ready. In the meantime, Kojo needs to find some clients to pilot the project! He aims to partner with at least 10 businesses before getting started. RWS is willing to pay GHC35 per 25 kilogram load of plastics. Each client will receive GHC25 per load, GHC10 of which will go to Kojo to fund his operations. After meeting with dozens of business owners and managers, and Kojo manages to generate a lot of interest in his app, but is unable to secure commitments from more than 2 or 3 clients. Many of the potential clients are skeptical: a few dozen cedis per week is not very much money, and it will be difficult to convince busy employees to sort through trash! In other words, Kojo needs to add value to business proposition.",
        answerOptions: [
          {
            text: "Offer to provide pro bono environmental training sessions for the staff of each business that agrees to pilot the project. It may be idealistic, but Kojo thinks that if he can convince people about the benefits of recycling and waste management, they will be more than happy to play their part.",
            resultText: "The offer seems to work. Kojo manages to secure partnerships with 4 additional clients, including the general manager of a supermarket chain with several stores across the city. The general manager, though hesitant at first, agrees to pilot the project at 5 locations, provided that he won’t have to commit any of his own time or resources. Kojo is thrilled to have secured  a major client, but he has to get organized. He will need to spend a number of evenings planning and conducting research for a presentation on environmental responsibility. It’s a lot of work, but Kojo enjoys it — plus he can use the presentation he prepares to pitch to future clients."
          },
          {
            text: "Offer to promote each partnership across social media, and to include a list of participating businesses on the application, once it is developed. Kojo is tech savvy, and knows how to create a buzz online. He will try to convince potential clients that partnering with an environmentally responsible initiative will be good for their business.",
            resultText: "The idea works wonderfully — what kind of business would turn down free publicity? Kojo quickly secures enough clients to pilot the project, but fears that some of the businesses that sign up are trying to take advantage of him. After all, there is no real way to ensure that the businesses actually sort the waste or even use the application once it's ready."
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
        questionText: "With the pilot well underway, Kojo is looking to expand his clientele. After doing some research, he decides to target clients in Awoshie, a neighborhood on the periphery of Accra that is severely underserviced in terms of both infrastructure and municipal services. He is able to easily identify a dozen clients in the area that are interested in Recycle Accra! RWS is interested in expanding the project, but is not willing to provide a door-to-door collection service to a location so far from the processing plant. Kojo’s clients will have to drop their plastic waste at a single collection point closer to the city’s main roadways. Kojo worries that this inconvenience will scare away some of his potential clients.",
        answerOptions: [
          {
            text: "Hire a Motorking driver to make weekly collections in Awoshie, at least until RWS can be convinced to expand their service area. (GHC80 per week).",
            resultText: "Adding a Motorking driver to the monthly payroll won’t be easy, but Kojo thinks that a rapid expansion into Awoshie will impress potential investors. By the end of the month, Kojo manages to secure 10 new clients, most of which are using the app on a regular basis."
          },
          {
            text: "Offer new clients in Awoshie and additional GHC10 per load that they drop off at the collections site for the first 3 months. Kojo will have to pay this extra sum out of his own pocket.",
            resultText: "A number of smaller businesses in Awoshie are convinced by this added incentive, and sign up for Recycle Accra! The larger businesses are not willing to transport their plastics to a central location, and ask Kojo to return when his business can better accommodate them. By the end of the month, Kojo manages to secure 6 new clients, most of which are using the app on a regular basis."
          },
        ]
      },
      7: {
        questionText: "Things seem to be going well as Kojo enters the third and final month of the pilot stage of Recycle Accra! The pilot is expanding slowly, but steadily, and he has received significant amounts of positive feedback. However, with the quick expansion into Awoshie, Kojo appears to have encroached onto the territory of a private waste disposal enterprise — a competitor with close ties to the municipal government. Within a week, Kojo receives a cease and desist notice from the municipal government. As an unregistered business, it states, he is operating illegally in Awoshie and is subject to a heavy fine. However, Kojo is unwilling to be intimidated or pushed out of Awoshie. He his paperwork together, and heads to the registration office. To operate legally, he will need to apply for a Business Operating Permit (GHC500). Unfortunately, the clerk at the office tells Kojo that it will take at least 90 days to review his application.",
        answerOptions: [
          {
            text: "Inform the Recycle Accra! clients in Awoshie that, due to unforeseen circumstances, services will have to be paused for the next three months. The last thing Kojo’s project needs right now is legal trouble!",
            resultText: "Kojo is frustrated by these unexpected bureaucratic obstacles — many of his clients in Awoshie will likely stop using his app altogether. However, he is confident that he made the right choice to stay within the parameters of the law!"
          },
          {
            text: "Offer a GHC150 bribe to the registration officer in order to fastrack the application process. Neither potential investors nor RWS would be impressed should Kojo suddenly have to cut off service to a major segment of his clientele.",
            resultText: "The officer accepts the bribe, and, within one week, Recycle Accra! is an officially registered business. Kojo is relieved, but he doubts that that is the last he will hear from his rivals in Awoshie. Indeed, within the month, two of his clients cancel their subscription to Recycle Accra!, explaining that they have been advised to cut ties with Kojo’s new enterprise."
          },
        ]
      },
      8: {
        questionText: "Mid-way through July, Ghana is hit by a major rainstorm. Within 24 hours, major floods sweep across Accra, causing millions of dollars of damage. These floods, which have been happening on a cyclical basis in recent years, are caused in part by plastic bags and other waste that is disposed of near open drainage systems. Now that Recycle Accra! has found its footing, Kojo senses an opportunity to not only to help alleviate the strain on the city’s drainage system, but to grow his business at the same time.",
        answerOptions: [
          {
            text: "Purchase specially outfitted plastic recycle bins from RWS, and install them in strategic locations — next to open drains or near busy marketplaces. This won’t be a cheap endeavor — in addition to purchasing the bins, Kojo will also have to hire a Motorking driver to make weekly pickups (RWS trucks will not be able to operate in these busy areas). He will also have to hire a number individuals to teach and encourage Accrans how to properly use the bins once they are introduced! In total, Kojo estimates that he will need to fork over about GHC500 to pull this off.",
            resultText: "Kojo hires a number of enthusiastic youth that are willing to encourage the use of his newly installed bins, and this seems to do the trick. By the end of the month, all 6 of Kojo’s bins are being filled and transferred to RWS on a regular, weekly basis. This is not only good publicity for Recycle Accra!, the logo of which is pasted all over the bins, but the plastic that Kojo ships to RWS also brings in an extra  200 cedis a week."
          },
          {
            text: "Launch a social media campaign to raise awareness about the causes of flooding, and ways that Accrans can deal with their waste more responsibly. Kojo will reach out to his brother-in-law, who works with an NGO focused on environmental sustainability, for support in designing the campaign.",
            resultText: "Kojo’s brother-in-law is happy to help. Together, they put together a series of infographics that provide helpful tips on recycling, composting, and responsibly sorting waste. The NGO also offers to donate 300GHC to the campaign, which Kojo puts towards advertisements on Facebook and Twitter.The social media campaign really seems to strike a chord in the weeks following the floods. It is shared thousands of times, and even promoted by Accra’s municipal authorities. It’s not clear to Kojo whether the campaign will significantly bolster the use of Recycle Accra! — it seems like those sharing his social media posts are chiefly concerned with the content, rather than the business it is also promoting. However, Kojo is very pleased with the campaign’s success — for a meagre amount of money, he was able to use his business to effectively promote environmental responsibility in the city he loves."
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
      this.set('resultText', this.get('chosenAnswer').resultText)
    },
    answerClicked(answer) {
      this.get('answerQuestion')(answer)
    }
  }
});
