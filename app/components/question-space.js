import Ember from 'ember';

export default Ember.Component.extend({
  character: null,
  answerQuestion: null,
  month: null,
  renderingResult: null,
  resultText: null,
  impactImage: null,
  rejected: null,
  followUpQuestion: null,
  currentModalText: null,
  endGame: null,
  applyIncome: null,

  susuAcknowledged: null,

  chosenAnswer: null,

  // character specific variables that change
  // which questions/answers they receive
  vaccinated: null,
  madeTheDeal: null,
  rebranded: null,
  hasSusu: null,
  bootcamp: null,
  wentToAccra: null,

  isZara: Ember.computed('character', function() {
    return this.get('character') === 'Zara';
  }),
  

  currentQuestion: Ember.computed('character', 'month', 'followUpQuestion', function() {
    var question = this.get('questions')[this.get('character')][this.get('month')]
    var followUpQuestion = this.get('followUpQuestion')

    if (question.dependsOn && this.get(question.dependsOn)) {
      return question.alternate
    }

    if (followUpQuestion != undefined) {
      return followUpQuestion
    }
    return question
  }),

  questionText: Ember.computed('currentQuestion', function() {
    //  move this optional text logic to set a variable?

      var outputText = this.get('currentQuestion')['questionText']
      var optionalText = this.get('currentQuestion').optionalText

      if (optionalText) {
        if (optionalText.toggle) {
          outputText = optionalText.whenTrue + outputText
        } else {
          outputText = optionalText.whenFalse + outputText
        }
      }
      return Ember.String.htmlSafe(outputText)
    }
  ),

  questionImage : Ember.computed('currentQuestion', function() {
     return this.get('currentQuestion')['questionImage'] || ""
    }
  ),

  answerOptions: Ember.computed('currentQuestion', function() {
    var options = this.get('currentQuestion')['answerOptions']
    return this.get('currentQuestion')['answerOptions']
  }),

  //like half of our games text is going to be in here, which feels hacky
  // nope, its not half, its ~all of it
  questions: {
    'Zara': {
      1: {
        questionText: "Working from home, Zara earns an average of ₵800 per month. She and her husband have agreed to invest an additional ₵2700 of their shared personal savings into the business, ₵1000 of which she will use to purchase furniture, supplies, and other equipment. However, she will need more cash to cover rent.<br><br>Unfortunately, high interest rates, mandatory collateral requirements, and other bureaucratic obstacles make it very difficult for female entrepreneurs to access credit through formal financial institutions in Northern Ghana. Therefore, most young entrepreneurs must rely on the help of relatives and friends, or access credit through informal alternatives.",
        answerOptions: [
          {
            text: "<b>Reach out to friends for a loan.</b>",
            resultText: "Zara's long-time friend, Mo, who owns a local catering company, agrees to lend her ₵5000. She promises to repay him, with interest, in installments of ₵550 per month for one year.",
            impactImage: "Loan_Lundy.png",
            impact: {
              cash: 5000,
              resilience: 2,
              debt: 6600,
              debtPayments:550,
            },
          },
          {
            text: "<b>Apply for a loan through a microfinance institution.</b>",
            resultText: "The major microfinance institution operating in Zara’s region is no longer operational. The local branches were forced to close following a government investigation, which revealed that investor deposits were being diverted into the bank accounts of firm managers. Zara must look for a different source of credit.",
            reject: true,
          },
          {
           text: "<b>Organize a small loan through a Susu collector.</b>",
            resultText: "Zara reaches out to some of her colleagues from the EQWIP HUBs entrepreneurship program, and puts together a group of six traders to start a rotating Susu circle. Each member will contribute ₵350 per month. Every six months, a different trader will be given access to the total monthly sum.<br><br> The group of traders agrees to let Zara access the first loan (₵1750). She is relieved to have found a source of cash to invest in her business, and is happy to have established a network of young, like-minded entrepreneurs.",
            impactImage:"Susu_Lundy.png",
            impact: {
              cash: 1750,
              resilience: 3,
              debt: 1750,
              debtPayments: 350,
              gameFlowVariable: ['hasSusu', true]
            },
          },
        ]
      },
      2: {
        questionText: "Now that she has funding, Zara needs to rent a location for her beauty bar.",
        questionImage: "Cityscape_Lundy.png",
        answerOptions: [
          {
            text: "<b>Rent a space in central Tamale.</b> <br><br> It will be easy to attract new clients in the busy city core, and her students will appreciate a central location (₵4200/year).",
            resultText: "Renting a space downtown is expensive, but Zara considers it a sound investment. The downside — a long commute downtown, especially with children.",
            impact: {
              cash: -4200,
              resilience: 3,
              assets:1,
              assetText: 'equipment, furniture, and supplies for her beauty bar'
            },
          },
          {
            text: "<b>Rent a space closer to where she lives, in the city’s periphery.</b> <br><br> It’s a quieter area, but it’s cheaper, and easier to bring her children along (₵2400 for 12 months).",
            resultText: "It’s not an ideal location, but it’s cheap. Zara can invest the money she saves on rent on things like couches, salon chairs, mirrors, and other equipment. The location is also in a neighborhood that is close to home, which means she can easily bring her children along.",
            impact: {
              cash: -2400,
              resilience: 1,
              assets:3,
              assetText: 'equipment, furniture, and supplies for her beauty bar'
            },
          },
        ]
      },
      3: {
        questionText: "After weeks of tireless work, Zara’s beauty bar is ready for business! Based on the number of clients she hopes to serve each month, she expects to earn an average of ₵600 per month, after expenses.<br><br> Now that she's ready to launch the vocational training component of her business, Zara must come up with a way to attract new students. During her entrepreneurship training with EQWIP HUBs, she spent many hours in the computer lab learning how to build a basic website. Time to put that knowledge to work!",
        answerOptions: [
          {
            text: "<b>Build the website at the EQWIP HUB computer lab.</b> <br><br>It’s a bit of commute, though — an hour and a half each way. Zara will have to shut down the beauty bar for a day or two, and find a sitter while she is away.",
            resultText: "Working closely with a couple of the volunteers at the EQWIP HUB computer lab over the course of two days, Zara is able to set up a basic website, a business email, and a Facebook page. She adds her business to a number of online business directories, and begins advertising her new website on social media.<br><br> By the end of the month, five women have signed up for Zara’s first vocational training course, which is set to begin in May. A slow start, but a start nonetheless.",
            impactImage: "Hackathon_Lundy.png",
            impact: {
              cash: -150,
              income: -200,
              resilience: 2,
              assets:1,
            },
          },
          {
            text: "<b>Build the website at a local internet cafe near home.</b> <br><br>Zara can work on the site over the course of several mornings, while the children are at school and before the beauty bar opens.",
            resultText: "The computers at the cafe are very slow, and the Internet cuts out intermittently. After three frustrating mornings, she gives up. What a waste of time (and ₵25)! She does, however, manage to set up a Facebook page for her salon, which she asks her friends to share widely.<br><br>By the end of the month, five women have signed up for Zara’s first vocational training course, which is set to begin in May. A slow start, but a start nonetheless",
            impact: {
              cash: -25,
              income: -200,
              resilience: -1,
            },
          },
        ]
      },
      4: {
        questionText: "One of Zara’s customers connects her with a woman who needs a last-minute makeup artist to service her bridal party. The woman lives in a small town near Bolgatanga, about 150km from Tamale. She is willing to pay ₵800 for an artist willing to travel to Bolgatanga the day after tomorrow!<br><br> Zara is on the fence. She needs the cash, but getting around Northern Ghana is not easy.",
        answerOptions: [
          {
            text: "<b>Pass on the offer.</b> <br><br>Though Zara needs the money, she thinks it will be a challenge to arrive on time for the wedding. The rainy season has just begun, and many of the roads in rural areas have been rained out.",
            resultText: "It hurts to turn down a big paycheque, but Zara has a number of clients booked already — they are her main priority.",
            impact: {
              income: 150,
              resilience: 1,
            },
          },
          {
            text: "<b>Accept the client, cancel previous appointments, and prepare for the journey to Bolgatanga!</b>",
            resultText: "Unable to find a sitter on short notice, Zara has no choice but to bring her children along to Bolgatanga. After a five hour bus ride (₵45), she hires a <i>Yellow Yellow</i> to take them to the wedding venue, located a few kilometers outside of town (₵10). The journey to the venue is long, hot, and uncomfortable. At last, Zara arrives, barely on time with two upset children in tow.<br><br> After the gig, Zara takes the same route home (₵55), arriving just after midnight, exhausted. Tomorrow, she will have to call her clients to apologize for cancelling on such short notice.",
            impact: {
              cash: 600,
              income: -50,
              resilience: -1,
            },
          },
        ]
      },
      5: {
        questionText: "Zara’s first vocational training course is underway, which provides her with an influx in cash (₵2000). Finally, she can afford to advertise!",
        answerOptions: [
          {
            text: "<b>Invest ₵750 in prime time radio ads.</b> <br><br>This amount will purchase Zara a series of day-time messages on <i>Diamond FM</i> and evening messages on <i>NorthStar Radio</i>.",
            resultText: "The ads seem to do the trick! Over the next couple of weeks, new customers trickle in, and Zara manages to book a number of weddings and events for the coming months. Her vocational training courses also receive a considerable bump in sign-ups.<br><br> This successful marketing campaign will increase Zara’s monthly income signficantly.",
            impactImage: "Radio_Lundy.png",
            impact: {
              cash: 1250,
              income: 300,
              resilience: 1,
            },
          },
          {
            text: "<b>Purchase a smartphone (₵700) and data package (₵20 per month), and develop a social media campaign to promote the business online. </b>",
            resultText: "Radio ads might have a broader, more immediate reach, but a social media campaign can be refined and developed over time. Now that she has a smartphone, she can update her Facebook or Instagram page regularly, and promote her business on WhatsApp.",
            impact: {
              cash: 1300,
              income: 250,
              resilience: 3,
              assets:2,
              assetText : 'a smartphone'
            },
          },
        ]
      },
      6: {
        susuImpact: {
          text: "Six months have passed, and it’s Zara’s turn once again to access the cash from her Susu circle (₵1750).",
          debt: 1750,
          debtPayments: 350,
          cash: 1750
        },
        questionText: "Zara’s recent marketing efforts seem to be working. Within a month, 10 more young women have signed up for the 2-week training program and another 5 have signed up for one-day introductory courses. This means that her cash will jump by ₵1700, but it also means she will have to hire someone! There is no way she can teach all these young women by herself <i>and</i> keep up with her regular clients.",
        answerOptions: [
          {
            text: "Hire a makeup artist full-time to take on regular clients and help with training (₵550 per month). <br><br>Having a second staff member will also allow Zara to spend more time with her children, away from work.",
            resultText: "Though having a new person on the payroll is major expense, it benefits Zara’s business immensely. She is now able to launch a new vocational training course in the late evenings. What’s more, she no longer need to worry about traveling with her children for out of town jobs — the staff member now takes care of any clients that require travel.",
            impact: {
              cash: 1700,
              income: -550,
              resilience: 2,
              assets: 1,
            },
          },
          {
            text: "<b>Create an apprenticeship program that provides more advanced students with the opportunity to practice their skills on walk-in clients, who will pay a slightly discounted price.</b>",
            resultText: "The apprenticeship program is a hit! Zara’s students are grateful for the opportunity to practice on real customers, and the customers are happy to pay a reduced fee.<br><br> At the end of the month, however, Zara finds that she is missing ₵600 in cash. She can only assume that one (or more) of the apprentices has been stealing from her. Without another staff member around assist her, she had no choice but to allow her more advanced students to handle some of the cash from walk-in clients.",
            impact: {
              cash: 1100,
              resilience: -1,
              assets: 1,
            },
          },
        ]
      },
      7: {
        questionText: "One of Zara’s clients, Sandra, is a graduate student in environmental sciences at the University. One day, she notices that Zara's students are not properly sorting their waste or disposing  chemicals. She spots one student rinsing out old nail polish bottles and dumping the chemical contents down the drain, a practice known to contaminate the water supply.<br><br> Sandra offers to design a training module for Zara’s students that focuses on environmental sustainability. For a small fee, she is also willing to spend an hour with each new cohort discussing the benefits of using organic products, teaching them how to properly dispose of chemical waste, and explaining the importance of preserving water in a region prone to drought.",
        answerOptions: [
          {
            text: "<b>Hire Sandra!</b> <br><br>This is a great opportunity to add value to Zara's vocational training courses (₵150 per month).",
            resultText: "Sandra turns out to be a terrific teacher and mentor for Zara’s students — her environmental training sessions really seem to connect with her students. As an end of the month bonus, Zara also notices that her water bill has dropped!",
            impact: {
              income: -125,
              resilience: 2,
              environment: 2,
            },
          },
          {
            text: "<b>Don't hire Sandra.</b> <br><br>The environment is important, but saving money is still a key priority for a start-up in its early stages. Zara will just have to keep a closer eye on her students’ behaviour.",
            resultText: "Zara does her best to remind her students to be more careful with water, and to be conscious of what they do with their waste. Though some of them seem to get the message, it doesn't click with others.<br><br> At the end of the month, Zara notices that her water bill has risen significantly (₵35 more per month).",
            impact: {
              income: -35,
              resilience: -1,
              environment: -1,
            },
          },
        ]
      },
      8: {
        questionText: "The government announces that it is cracking down on ‘illegal businesses’. The papers claim that officers will be issuing fines to any business that is not properly registered.",
        questionImage: "Registration_Lundy.png",
        answerOptions: [
          {
            text: "<b>Get the paperwork together, and register!</b> <br><br>To operate legally, Zara will need to apply for a Tax Identification Number (TIN) and register her business as a sole proprietorship (₵55).",
            resultText: "Zara and Musa spend most of the weekend sorting through the convoluted paperwork for the application. On Monday, she heads to the registration office, but there is a massive queue. She waits for a few hours, but the queue barely moves. She’s one of the only women present, and a couple of men begin to harass and tease her. Annoyed and tired, Zara decides to go home.",
            impact: {
              resilience: -1,
            },
          },
          {
            text: "<b>Take the risk.</b> <br><br>Non-registered small businesses rarely run into problems. The government has been saying this stuff for years!",
            resultText: "Zara hopes that the government is bluffing. Only time will tell.",
            impact: {
              resilience: -2,
            },
          },
        ]
      },
      9: {
        questionText: "Zara’s cousin is getting married this month, and asks her to be the makeup artist for his wife and her bridal party. Zara emails him a quote for ₵500.<br><br> He does not respond to the email. A week later, he confronts Zara at work, claiming that he is insulted that she would ask a family member to pay for her services. He angrily demands that she do the work for free.",
        answerOptions: [
          {
            text: "<b>Apologize to the cousin, and offer to work the wedding for free.</b> <br><br>Zara’s extended family has not only provided her with plenty of support these past months, but has also become an essential source for customer referrals around town. She does not want to put these relationships at risk.",
            resultText: "Zara’s cousin apologizes for getting upset. He thanks her graciously, and leaves. Zara will have to lose a full day’s income to work the wedding <i>pro bono</i> (₵500).",
            impact: {
              cash: -500,
              resilience: -1,
            },
          },
          {
            text: "<b>Tell the cousin that he has to pay the full price.</b> <br><br> This business is the source of Zara’s livelihood, and she cannot afford to give away a free lunch.",
            resultText: "Zara’s cousin gets angry, and storms off, saying that he will find someone else to do the makeup for his wife. Not only has she lost the gig, but she has also created further tension with her family.",
            impact: {
              resilience: -2,
            },
          },
          {
            text: "<b>Offer a ‘family discount’ (₵300) in exchange for future babysitting.</b>",
            resultText: "Zara’s cousin reluctantly accepts the counteroffer, and promises to take care of the kids when needed. It’s not a perfect deal, but at least Zara won’t lose a full day’s income.",
            impact: {
              cash: -200,
              resilience: 1,
            },
          },
        ]
      },
      10: {
        questionText: "The pressure to register Zara's business is mounting. Not only have the police followed up with their promise to crack down on illegal businesses, but many of Zara’s students have also been asking about accreditation. How will their training be recognized by potential employers or customers if the vocational training center was not even legally registered?<br><br> Her husband has offered to stand in line at the registration office on her behalf, but he has not been able to book a weekday off of work. Zara herself is unwilling to return to the notorious Tamale office on her own.",
        answerOptions: [
          {
            text: "The registration office in Accra is known to be much bigger and better organized than the one in Tamale. Many claim that it’s faster to bus to Accra than to queue up here in town. <br><br> <b>Road trip!</b>",
            resultText: "Zara finds a sitter, and buys an overnight bus ticket for a round trip to Accra — an exhausting, 6 hour journey each way (₵90). Fortunately, things go smoothly once she arrives. Indeed, the entire process only takes two hours! <br><br> With time to kill, Zara heads to the marketplace to stock up on organic makeup products not available in Tamale (₵100). She will be able to sell these to her customers at a premium.",
            impact: {
              cash: -190,
              resilience: 2,
              gameFlowVariable: ['wentToAccra', true]
            },
          },
          {
            text: "Last time Zara was in line at the registration office, she was approached by a duo of <i>Goro Boys</i> who offered to ‘facilitate’ the registration process for a fee. Zara knows that these boys are working illegally, but she does not have time to navigate the dysfunctional bureaucracy of the registration office.<br><br> <b>Head back to the registration office, and offer the boys ₵200 for their services.</b>",
            resultText: "The <i>Goro Boys</i> do their thing. One week later, Zara receives word that her business has been successfully registered.",
            impact: {
              cash: -200,
              resilience: 1,
              gameFlowVariable: ['wentToAccra', false]
            },
          },
        ]
      },
      11: {
        optionalText: {
          toggle: 'wentToAccra',
          whenFalse: "Zara’s high school friend, who is visiting Tamale from Accra, brings her a small case of organic makeup products from a specialized manufacturer in the South. Zara’s students and customers love them — they’re easy to use, and better for both skin and the environment.",
          whenTrue: "Zara’s students and customers love the organic makeup products that she brought back from Accra. They are easy to use, and better for both skin and the environment."
        },
        questionText: "",
        answerOptions: [
          {
            text: "<b>Organize a monthly shipment of organic makeup products from Accra to sell to customers.</b>",
            resultText: "Zara will now have to spend over ₵150 per month on freight. Her supply budget will also increase. Even if she raises her prices slightly, her business’s profit margins be smaller.<br><br> She is confident, however, that the availability of environmentally friendly, organic products, will eventually attract new customers, and improve the reputation of her beauty bar.",
            impact: {
              cash: -100,
              resilience: 3,
              environment: 1
            },
          },
          {
            text: "<b>Focus on building the business and expanding the vocational training — leave the organic products to the boutiques.</b>",
            resultText: "The end of the year is coming up, and Zara is going to have to put together enough cash for next year’s rent. It’s not a good time to be spending cash.",
            impact: {
              cash: 0
            },
          },
        ]
      },
      12: {
        optionalText: {
          toggle: 'hasSusu',
          whenFalse: "Zara has nearly paid off her debt, And she still has access to a nice sum of cash. Her profits, however, have stagnated. She needs to find a way to increase revenue and expand her business.",
          whenTrue: "Zara’s profits have stagnated. She needs to find a way to increase revenue and expand her business."
        },
        questionText: "As the new year approaches, she decides to set an ambitious, long-term goal on which to focus her efforts in the coming months. She consults with her students, clients, and colleagues for ideas, and comes up with two options.",
        answerOptions: [
          {
            text: "Zara knows there is a wider demand for vocational makeup training than her small salon can possibly cater to.<br><br> <b>Using the power of digital technology, expand the scope and reach of the business by offering online tutorials and vocational training courses that can be accessed by women across the country and beyond.</b>",
            resultText: "To pull this off, Zara will need to purchase a laptop (₵1200), a webcam (₵100), and an internet package (₵35/ month). This is a major investment, but Zara can use the computer for a number of additional purposes, like accounting and managing social media.<br><br> Next, Zara will need to film a number of brief tutorials to load onto YouTube and share on social media. These will be used as promotional materials, and as a way to draw in potential students for online training.<br><br> Once she has established a presence online, Zara can begin creating a online vocational training program that will require payment to access.",
            impact: {
              cash: -1300,
              income: -35,
              resilience: 3,
              assets: 2,
              assetText: "a computer and webcam"
            },
          },
          {
            text: "Zara wants to expand her vocational training to reach unemployed young women in her region. Though many of these women have secondary or tertiary education, they do not possess the job skills required to find work in today’s market.<br><br> <b>Reach out to national and international NGOs working locally on issues of youth unemployment or livelihood training, and develop a partnership to subsidize vocational training for unemployed young women.</b>",
            resultText: "Zara is thrilled to dedicate herself to this new long-term project. Over the course of a year, she has witnessed first hand the positive impact that her vocational training has on unemployed women. Many of her former students have branched out to start their own businesses, and several others have expressed interest in working at Zara’s salon.<br><br> Zara takes this message to several NGOs for feedback, and for support in bringing this vision to life. Based on these initial meetings, it sounds like Zara will have to dedicate much of her time and resources to developing this plan over the next several months. However, she is confident that investing in her community is not only a worthwhile cause, but will also strengthen the sustainability of her business.",
            impact: {
              resilience: 3,
            },
          },
        ]
      },
    },
    'Kojo': {
      1: {
        questionText: "First thing’s first — Kojo needs cash! Currently, he has ₵1100 in savings from his time with the national service. He will need a lot more than that to successfully build a viable mobile application.<br><br> Unfortunately, high interest rates, mandatory collateral requirements, and other bureaucratic obstacles make it very difficult for young entrepreneurs to access credit through formal financial institutions in Ghana. Therefore, most young entrepreneurs must rely on the help of relatives and friends, or access credit through informal alternatives.",
        answerOptions: [
          {
            text: "<b>Reach out to family for a loan.</b>",
            resultText: "Kojo asks his family for a loan of ₵3000. His two older siblings and uncle are happy to help him out. His father, however, is reluctant — he worked hard to pay for his son’s tertiary education, and does not understand why he is building gadgets instead of finding a real job. He finally concedes, but warns Kojo that the family will not lend him any more money if he does not repay him within a year.<br><br> Kojo promises to pay back the loan in monthly installments of ₵250.",
            impact: {
              cash: 3000,
              debt: 3000,
              debtPayments:250,
            },
          },
          {
            text: "<b>Apply for part-time work as a teacher at the local secondary school.</b>",
            resultText: "Kojo’s background in accounting qualifies him to teach mathematics to junior high school students. He can earn ₵500 per month teaching 3 afternoons a week, though this means that he will have less time to focus on his business.",
            impact: {
              income: 500,
            },
          },
        ]
      },
      2: {
        questionText: "Now that Kojo has found a source of cash, it’s time to build the mobile application! Though he has some experience building websites and a rudimentary understanding of coding, he will not be able to build a fully functional app on his own.",
        answerOptions: [
          {
            text: "<b>Hire a developer to build the mobile application.</b> <br><br>Kojo gets a quote from a development firm that can build a basic mobile application over the course of 3 months for ₵3500. The developer is willing to accept payment in monthly installments of ₵875, starting next month",
            resultText: "Kojo is confident in his decision. He has found a developer that he can trust will deliver a quality product.",
            impact: {
              debt: 3500,
              debtPayments:875,
              gameFlowVariable: ['bootcamp', false]
            },
          },
          {
            text: "<b>Enroll in a coding bootcamp, and build the app from scratch.</b> <br><br><i>The Code School</i> is offering an 8-week intensive program. The program, which starts at the beginning of next month, costs ₵1000 up front. He will also have to purchase a new laptop (₵1100).",
            resultText: " As the name implies, a coding bootcamp is no walk in the park. Every weekday morning for 8 weeks, Kojo will learn the fundamental technical skills needed to build a mobile app. However, he believes that if he works hard, he will become equipped with the skills required to not only build a basic application, but to better overcome obstacles that are all but certain to arise down the road. What’s more, <i>The Code School</i> provides ongoing mentorship and support for graduates of the program.<br><br> A major risk, of course, is that Kojo may end up building an application that is riddled with mistakes, or that does not properly function.",
            impact: {
              cash: -2100,
              resilience: 2,
              gameFlowVariable: ['bootcamp', true]
            },
          },
        ]
      },
      3: {
        questionText: "It will still be several weeks until the Recycle Accra! application is ready. In the meantime, Kojo strikes a deal with a recycling plant located just outside of the city called Responsible Waste Services (RWS). RWS is willing to pay ₵35 per 25kg load of plastic. Each client will receive ₵25 per load, and Kojo will take the remaining ₵10 to Kojo to fund the operation.<br><br>Now, Kojo needs to find some clients to pilot the project! He aims to partner with at least 10 businesses before getting started. He meets with dozens of business owners and managers, but is only able to secure 2 clients. Others are skeptical: a few dozen cedis per week is not very much money, and it will be difficult to convince busy employees to sort through trash!<br><br>Kojo needs to come up with a way to add value his business proposition.",
        answerOptions: [
          {
            text: "<b>Offer to provide <i>pro bono</i> environmental training sessions for the staff of each business that agrees to pilot the project.</b> <br><br>It may be idealistic, but Kojo thinks that if he can convince people about the benefits of recycling and waste management, they will be more than happy to play their part.",
            resultText: "The offer seems to work. Kojo manages to secure partnerships with 4 additional clients, including the general manager of a supermarket chain with several stores across the city. The general manager, though hesitant at first, agrees to pilot the project at 5 locations.",
            impact: {
              resilience: 2,
              environment: 2,
            },
          },
          {
            text: "<b>Offer to promote new clients on social media and on the app itself.</b> <br><br>Kojo is tech savvy, and knows how to create buzz online. He will try to convince potential clients that partnering with an environmentally responsible initiative will be good for their business.",
            resultText: "The idea works wonderfully — what kind of business would turn down free publicity? Kojo quickly secures enough clients to pilot the project, though there is no real way to ensure that these businesses actually use the application once it's ready.",
            impact: {
              resilience: 1,
            },
          },
        ]
      },
      4: {
        dependsOn: 'bootcamp',
        alternate: {
          questionText: "At last, the mobile application is ready to go! With 10 clients signed up, Kojo expects to generate a monthly revenue of approximately ₵400.<br><br> Kojo finishes his bootcamp at the end of April, and, with the help of his mentors at <i>The Code School,</i> gets to work on the app. He runs into very few problems building the basic infrastructure for the application, but has trouble devloping the geographic information system (GIS) (i.e. the ‘mapping’ aspect of the app). Eventually, after much testing, the app is ready to be piloted.<br><br>However, during the first week of the pilot, the RWS trucks are twice sent to the wrong location, and are unable to make the pickup. In order to keep the pilot on track, Kojo must hire a Motorking driver to pick up the missed bins, and reimburse his clients out of pocket (₵70).",
          questionImage: "Motorking_Lundy.png",
          answerOptions: [
            {
              text: "<b>Spend some time at <i>The Code School</i> lab to work out the app’s bugs.</b>",
              resultText: "After a few all-nighters and extensive testing, Kojo thinks that the app is fixed, though he remains somewhat nervous. The business is still in a stage of infancy, and another major mistake could put the whole enterprise at risk.",
              impact: {
                cash: -70,
                income: 400,
                assets: 1
              }
            },
            {
              text: "<b>Hire an expert developer to work out the app’s kinks, and to make sure that there won’t be more problems in the future (₵400).</b>",
              resultText: "Kojo learned a lot during the bootcamp, but he is still a beginner, in the big scheme of things. Though he built the majority of the application’s code himself, there is always more he can learn from an expert.<br><br> The developer Kojo hires fixes the application’s GIS, and explains to Kojo exactly what went wrong. Should be smooth sailing from here.",
              impact: {
                cash: -470,
                income: 400,
                resilience: 2,
                assets: 1
              }
            },
          ]
        },
        questionText: "At last, the mobile application is ready to go! With 10 clients signed up, Kojo expects to generate a monthly revenue of approximately ₵400.<br><br> A number of Kojo’s clients request specialized trash bins to help them keep the plastics separate from other trash. Unfortunately, though RWS does have specialized bins, they are not willing to provide them to Kojo’s clients during the pilot stage of the project. They will, however, offer to sell and deliver the bins to Kojo’s clients for ₵400.",
        questionImage: "Motorking_Lundy.png",
        answerOptions: [
          {
            text: "<b>Fork over the money.</b> <br><br>Kojo is willing to do what it takes to avoid issues during these early stages of the project.",
            resultText: "This was not a cheap decision to make, but Kojo’s clients seem happy and eager to get started.",
            impact: {
              cash: -400,
              income: 400,
              resilience: 1,
              environment: 1,
              assets: 2,
              debtPayments:-875
            }
          },
          {
            text: "<b>Promise the clients that specialized bins will be provided once the pilot is complete. Request they do their best to properly sort and label their trash in the meantime.</b>",
            resultText: "Turns out that the concerns raised by Kojo’s clients were valid. During the second week of the pilot, the RWS trucks refuse to collect the plastic waste from two of the supermarket locations, because it is mixed with organic waste and other forms of trash.<br><br> In order to keep the clients on board and happy, Kojo must reimburse these two clients (₵50), and purchase each of them a specialized bin from RWS (₵150).",
            impact: {
              cash: -200,
              income: 400,
              resilience: -1,
              environment: -1,
              assets: 1,
              debtPayments:-875
            }
          },
        ]
      },
      5: {
        questionText: "Kojo is reaady to expand. After doing some research, he decides to target businesses in Awoshie, a neighborhood on the periphery of Accra that is severely underserviced in terms of both infrastructure and municipal services.<br><br> RWS is interested in expanding the project, but is not willing to provide a door-to-door collection service to a location so far from the processing plant. Kojo’s clients will have to drop their plastic waste at a single collection point closer to the city’s main roadways. Kojo worries that this inconvenience will scare away some of his potential clients.",
        questionImage: "Cityscape_Lundy.png",
        answerOptions: [
          {
            text: "<b>Hire a Motorking driver to make weekly collections in Awoshie, at least until RWS can be convinced to expand their service area. (₵80 per week).</b>",
            resultText: "Adding a Motorking driver to the monthly payroll won’t be easy, but Kojo thinks that a rapid expansion into Awoshie will impress potential investors.<br><br> By the end of the month, Kojo manages to secure 10 new clients, most of which are using the app on a regular basis.",
            impact: {
              income: 80,
              resilience: 2,
            },
          },
          {
            text: "<b>Offer new clients in Awoshie and additional ₵10 per load if they drop off their waste at the collections site for the first 3 months.</b> <br><br>Kojo will have to pay this extra sum out of his own pocket.",
            resultText: "A number of smaller businesses in Awoshie are convinced by this incentive, and sign up for Recycle Accra! The larger businesses, however, are not willing to transport their plastics to a central location, and ask Kojo to return when his business can better accommodate them.<br><br> By the end of the month, Kojo manages to secure 6 new clients, most of which are using the app on a regular basis.",
            impact: {
              resilience: 2,
            },
          },
        ]
      },
      6: {
        questionText: "Things seem to be going well as Kojo enters the third and final month of the pilot!<br><br> However, with the quick expansion into Awoshie, Kojo appears to have encroached onto the territory of a private waste disposal enterprise — a competitor with close ties to the municipal government. Within a week, Kojo receives a cease and desist notice. As an unregistered business, it states, he is operating illegally in Awoshie and is subject to a heavy fine. Unwilling to be pushed out of Awoshie, Kojo gets his paperwork together, and heads to the registration office.<br><br> To operate legally, he will need to apply for a Business Operating Permit (₵500). Unfortunately, the registration officer tells Kojo that it will take at least 90 days to review his application.",
        questionImage:"Registration_Lundy.png",
        answerOptions: [
          {
            text: "<b>Inform the clients in Awoshie that, due to unforeseen circumstances, services will have to be paused for the next three months.</b> <br><br>The last thing Kojo’s project needs right now is legal trouble!",
            resultText: "Kojo is frustrated by these unexpected bureaucratic obstacles — many of his clients in Awoshie will likely stop using his app altogether. However, he is confident that he made the right choice to stay within the law!",
            impact: {
              income: -100,
              resilience: 1,
            },
          },
          {
            text: "<b>Offer a ₵150 bribe to the registration officer in order to fastrack the application process.</b> <br><br>Neither potential investors nor RWS will be impressed should Kojo suddenly cut off service to a major segment of his clientele.",
            resultText: "The officer accepts the bribe, and, within one week, Recycle Accra! is an officially registered business. Kojo is relieved, but he doubts that that is the last he will hear from his rivals in Awoshie.<br><br> Indeed, within the month, two of his clients cancel their subscription to Recycle Accra!, explaining that they have been advised to cut ties with Kojo’s new enterprise.",
            impact: {
              cash: -150,
              resilience: -2,
            },
          },
        ]
      },
      7: {
        questionText: "Mid-way through July, Ghana is hit by a major rainstorm. Within 24 hours, major floods sweep across Accra, causing millions of dollars of damage. These floods, which have been happening on a cyclical basis in recent years, are caused in part by plastic bags and other waste that is disposed of near open drainage systems.<br><br> Now that Recycle Accra! has found its footing, Kojo senses an opportunity to not only to help alleviate the strain on the city’s drainage system, but to grow his business at the same time.",
        answerOptions: [
          {
            text: "<b>Purchase specially outfitted plastic recycle bins from RWS, and install them in strategic locations — next to open drains or near busy marketplaces.</b> <br><br>This won’t be a cheap endeavor — in addition to purchasing the bins, Kojo will also have to hire a Motorking driver to make weekly pickups. In total, Kojo estimates that he will need to fork over about ₵500 to pull this off.",
            resultText: "Kojo hires a number of enthusiastic young people that are willing to encourage the use of his newly installed bins around town (₵50 per month), which seems to do the trick. By the end of the month, all 6 of Kojo’s bins are being filled and transferred to RWS on a regular basis. Not only is this good publicity for Recycle Accra!, but it also brings in an extra ₵200 a month.",
            impact: {
              cash: -500,
              income: 150,
              resilience: 2,
              environment: 2,
              assets: 1,
            },
          },
          {
            text: "<b>Launch a social media campaign to raise awareness about the causes of flooding, and ways that people in Accra can deal with their waste more responsibly.<br><br>Kojo will reach out to his brother-in-law, who works with an NGO focused on environmental sustainability, for support in designing the campaign.",
            resultText: "Kojo’s brother-in-law is happy to help. Together, they put together a series of infographics that provide helpful tips on recycling, composting, and responsibly sorting waste. The NGO also offers to donate ₵300 to the campaign, which Kojo puts towards advertisements on Facebook and Twitter.<br><br> The social media campaign really seems to strike a chord in the weeks following the floods. It is shared thousands of times, and is promoted by Accra’s municipal government.",
            impact: {
              income: 50,
              resilience: 1,
              environment: 2,
            },
          },
        ]
      },
      8: {
        questionText: "Things seem to be back on track. With dozens of clients using the application regularly, RWS is now providing new clients with specialized recycling bins, free of charge.<br><br> Now, Kojo wants to upgrade some of his equipment — a new modem, router, and an external hard drive will go a long way (₵ 250). Before he makes any purchases, though, Kojo receives a phone call from sister. Her three young children are heading back to school next month, and she needs money for their school fees (₵200).",
        questionImage: "School_Lundy.png",
        answerOptions: [
          {
            text: "<b>Family first. Offer her ₵250 to cover school fees and to buy her children some new school clothes.</b>",
            resultText: "Kojo’s sister is extremely grateful, as are his nephew and nieces. He will have to slog through the next few months with his old equipment, but he feels good about fulfilling his brotherly duty.",
            impact: {
              cash: -250,
              resilience: -1,
            },
          },
          {
            text: "Recycle Accra! has <i>almost</i> reached the investment stage of its development, and Kojo doesn’t think he can part with any cash right now.<br><br> <b>Apologze, and promise to cover the fees next year.</b>",
            resultText: "Kojo upgrades the equipment in his home office. Unforunately, he sister is very disappointed that he would prioritize his business over his family.",
            impact: {
              cash: -250,
              resilience: 1,
              assets: 1,
            },
          },
        ]
      },
      9: {
        questionText: "September arrives, and Kojo is determined to further expand the reach of Recycle Accra! He sets his sights on the affluent neighborhood of Dansoman.",
        answerOptions: [
          {
            text: "<b>Invest in a series of targeted advertisements on Facebook, Twitter, and WhatsApp (₵80).</b> <br><br>The advertisements will offer a promotion — if any business refers another business to sign up for Recycle App, they will receive an extra ₵10 per load for one month.",
            resultText: "The ads generate plenty of likes and a significant spike in mobile application downloads.<br><br> A fews weeks pass, however, and it looks like the initial spike in traffic does not translate to an equivalent spike in business — indeed, the number of people who actually use the application did not rise significantly. Still, the campaign generated a lot of buzz around Recycle Accra!, the type of buzz that potential investors will certainly appreciate.",
            impact: {
              cash: -80,
              income: 10,
              resilience: 2,
            },
          },
          {
            text: "Go door-to-door to meet business owners throughout Dansoman in person. It’s a tedious gig, but hey — it might be effective.",
            resultText: "Kojo’s door-to-door undertaking proves fruitful. He secures a number of high profile clients, including a college and a hotel.Taking out advertisements online or in a newspaper probably would have had a broader reach, but Kojo is confident that his new clients will make good use of the mobile application.",
            impact: {
              income: 100,
              resilience: 2,
            },
          },
        ]
      },
      10: {
        questionText: "One of Kojo’s colleagues from the bootcamp invites him to take part in a 'hackathon' — a weekend event where teams of computer coders, designers, and social entrepreneurs compete to develop the best web or mobile based computer program. The hackathon, which will be held at the U-Code computer lab in Accra, will be judged by an esteemed panel of local and international judges.<br><br> The contest costs ₵350 to enter. The hackathon will be highly competitive, but the winning team will get to work with business experts and a tech incubator to further develop their idea.",
        answerOptions: [
          {
            text: "<b>Sign up!</b><br><br>This sounds like a great opportunity for Kojo to meet fellow social entrepreneurs, and to hone his coding skills.",
            resultText: "Though his team does not win the hackathon, Kojo has an excellent time. His team built a prototype that helps connect Ghanaians to affordable health care professionals in their area, and Kojo was able to contribute his GIS digital mapping skills.<br><br> The hackathon also helped Kojo expand his network — throughout the weekend, he forged a close connection with a terrific web designer, who offered her help to improve the look and interface of his app, and deepened his friendship with the app’s main developer, an experienced coder who has promised to help Kojo with any bugs he many have in the future.",
            impactImage: "Hackathon_Lundy.png",
            impact: {
              cash: -350,
              resilience: 3,
            },
          },
          {
            text: "<b>Maybe next time.</b> <br><br>Cash is low, and Kojo would rather focus on his own application at this time.",
            resultText: "Hackathons are popular in Accra. There will be plenty of opportunities in the future.",
            impact: {
              cash: 0,
            },
          },
        ]
      },
      11: {
        questionText: "Business is doing well. Recycle Accra! has now been downloaded over 200 times, and has over 50 regular users in four different neighborhoods throughout the city. Though Kojo has some cash saved, he doesn’t think he will be able to expand his business much further without new investors.<br><br> However, Kojo is not confident that his business proposal is up to speed. In particular, he needs to find an effective way to convey his plan to monetize the application, and generate a more steady flow of revenue.",
        answerOptions: [
          {
            text: "<b>Pay a professional business consultant to improve the business proposal, and streamline the plan to generate revenue (₵500).</b>",
            resultText: "Kojo meets briefly with a highly esteemed business consultant — an intimidating older gentleman located in the affluent East Ridge neighborhood, to whom he hands his proposal. <br><br> Two days and 500 cedis later, Kojo receives the overhauled  proposal, which now places a heavy emphasis on introducing a monthly pay scale for current clients, and charging new clients a initial download fee. Kojo is a bit overwhelmed by these changes, but the proposal is clearly the work of a professional.",
            impact: {
              cash: -500,
              resilience: 1,
              gameFlowVariable: ['consultant', true]
            },
          },
          {
            text: "<b>Seek advice and mentorship from local community business leaders.</b>.",
            resultText: "One of Kojo’s close friends, Donna, is currently enrolled in the EQWIP HUBs entrepreneurship training program. The EQWIP HUB Network, she explains, connects young entrepreneurs to mentors within the community. She thinks they will be able to help him out.<br><br>Kojo meets up with Donna at the EQWIP HUB one day after her training. After a long discussion about his business proposal, one of the staff members offers to connect Kojo to the Executive Director of a major environmental NGO that is based in Accra. They set up a Skype meeting.<br><br> The meeting is eye-opening. The Executive Director thinks that Kojo has an excellent product, but  recommends that he focus less on monetizing the application, and more on building partnerships with nonprofit or governmental organizations that focus on environmental stewardship.",
            impact: {
              resilience: 3,
              gameFlowVariable: ['consultant', false]
            },
          },
        ]
      },
      12: {
        dependsOn: 'consultant',
        alternate: {
          questionText: "As the end of the year approaches, Kojo decides, at last, to reach out to potential investors. Kojo sets up meetings with a number of organizations and companies. He recieves two offers.",
          answerOptions: [
            {
              text: "A large waste collection and recycling firm that is partnered with the municipal government offers Kojo ₵50,000 to purchase Recycle Accra!, which they will adapt to their city-wide services. Kojo will retain a 10% stake in the business, and will be kept on as an ‘advisor’.</b>",
              resultText: "Wow! ₵50,000 is <i>a lot</i> of money. Kojo can now pay back his debts, upgrade his tech equipment, and help his family out with some of their expenses.<br><br> Unfortunately, the waste company does not seem interested in giving Kojo much of a say regarding their use of his application. Though officially an ‘advisor’, he suspects that this does not give him very much influence.<br><br> On the other hand, Kojo now has more than enough cash to invest in a new enterprise, if he chooses. Now that he has extensive experience and a solid network, he can easily put together a team of like-minded young entrepreneurs with which to develop new and innovative tech-based social enterprises.",
              impactImage: "Loan_Lundy.png",
              impact: {
                cash: 50000,
                resilience: -3,
              },
            },
            {
              text: "<b>An international NGO dedicated to fostering environmental sustainability throughout Ghana offers to partner with Kojo. They offer him ₵5,000 in seed capital to grow and expand Recycle Accra!, and a two-year salaried position (₵1,200/month) as a technology and innovation advisor.</b>",
              resultText: "Kojo is thrilled by this offer. ₵5,000, plus a monthly salary, will provide him with enough cash to service his debts, upgrade his equipment, and invest in expanding and marketing Recycle Accra!<br><br> Though it was tough to turn down a significantly larger cash offer, Kojo is relieved that he will not have to cede control of the project he worked so hard to build. Indeed, as an employee of a major NGO, he will now be able to leverage the support of an impressive and diverse network of professionals to not only expand Recycle Accra!, but also build new and innovative social enterprises.",
              impactImage: "Loan_Lundy.png",
              impact: {
                cash: 10000,
                resilience: 3,
              },
            },
          ]
        },
        questionText: "As the end of the year approaches, Kojo decides, at last, to reach out to potential investors. Kojo sets up meetings with a list of organizations and companies provided to him by the business consultant. He receives two offers.",
        answerOptions: [
          {
            text: "<b>A private waste collection and processings firm that operates nation-wide offers ₵50,000 to purchase Recycle Accra!, and adapt the technology to service their own operations. Kojo will retain a 10% stake in the company, and will stay on board as an ‘advisor’.</b>",
            resultText: "Wow! ₵50,000 is <i>a lot of money</i>. Kojo will be able to pay back his debts, upgrade his tech equipment, and help his family out with some of their expenses.<br><br> Unfortunately, the private waste company does not seem interested in giving Kojo much of a say regarding their use of his application. Though officially an ‘advisor’, he suspects that this does not give him very much influence.<br><br> On the other hand, Kojo now has more than enough cash to invest in a new enterprise. Now that he has extensive experience and a solid network, he can easily put together a team of like-minded young entrepreneurs with which to develop new and innovative tech-based social enterprises.",
            impactImage: "Loan_Lundy.png",
            impact: {
              cash: 50000,
              resilience: -3,
            },
          },
          {
            text: "<b>A small tech incubator offers Kojo ₵10,000 in seed funding in exchange for 20% of Recycle Accra! In addition to seed funding, the incubator will also provide Kojo with the space, support, and mentorship he will need to take the business to the next level.</b>",
            resultText: "Kojo is thrilled by this offer. ₵10,000 provides him with enough cash to service his debts, upgrade his equipment, and invest in further expanding and marketing Recycle Accra!<br><br> Though it was tough to turn down a significantly larger cash offer, Kojo is relieved that he will not have to cede control of the project he worked so hard to build. Indeed, he now has access to an incredible tech lab, an extensive network of fellow entrepreneurs and mentors, and the support of a incubator that wants his business to succeed.",
            impactImage: "Loan_Lundy.png",
            impact: {
              cash: 10000,
              resilience: 3,
            },
          },
        ]
      },
    },
    'Lamisi': {
      1: {
        questionText: "Lamisi starts with ₵500 in cash and 20 full grown birds. She spends ₵250 on building a new pen, and purchasing bird feed and other supplies. She also buys an additional two dozen chicks from a local hatchery. It will take 4 to 6 months for these chicks to mature, at which point they will be able to lay eggs for up to two years. <br><br>She crunches the numbers. Based on current poultry prices, Lamisi expects to turn a profit of about ₵340 per month by the end of June.",
        answerOptions: [
          {
            text: "Time to get started!",
            resultText: null,
            impact: {
              income: 0,
              cash: -250,
              assetText: "a well built pen"
            }
          },
        ]
      },
      2: {
        questionText: "Though less prone to sickness than chickens, guinea fowl are susceptible to a number of diseases, including Fowl Pox, Newcastle disease, and Coccidiosis. A disease outbreak will not only decrease Lamisi’s profits, but can potentially decimate her flock.",
        answerOptions: [
          {
            text: "<b>Purchase vaccinations for the flock.</b> <br><br>Better safe than sorry (₵ 200).",
            resultText: "Wise choice. It’s much easier to run a successful poultry farm when you have a healthy flock of birds!",
            impact: {
              cash: -200,
              resilience: 2,
              gameFlowVariable: ['vaccinated', true],
              income: 340
            }
          },
          {
            text: "<b>Take the risk for now, and reconsider once the flock has grown.</b>",
            resultText: "Vaccines are expensive. Might as well hold off until the rainy season, when birds are more likely to get sick.",
            impact: {
              resilience: -2,
              gameFlowVariable: ['vaccinated', false],
              income: 340
            }
          },
        ]
      },

      3: {
        questionText: "As Lamisi’s flock grows, so too does the volume of waste that she must deal with. She’s been dumping the waste in a small creek away from her yard, but her neighbors have started to complain — not only do her actions risk contaminating local water resources, but the stench is unbearable!",
        answerOptions: [
          {
            text: "<b>Build an isolated area to dispose the waste material until a specialized compost organization can collect it (₵250).</b>",
            resultText: "It’s not cheap, but Lamisi feels good about being a responsible steward of the environment.<br><br> After a few weeks of collecting waste, she decides to reach out to her neighbor and family friend, who rears cattle, so she can learn how to process the waste into manure. He is happy to help.<br><br> Though it’s a lot of extra work, Lamisi can now sell her manure, or use it to fertilize her family’s vegetable garden.",
            impact: {
              cash: -250,
              income: 30,
              resilience: 2,
              environment: 1,
            }
          },
          {
            text: "<b>Continue to dump the waste in the creek, but make an effort to spread it across a larger area.</b>",
            resultText: "Lamisi saved a buck, but at the expense of the natural environment, on which she and her neighbors depend. On hot days, the stench from her farm is enough to turn away customers.",
            impact: {
              environment: -1
            }
          },
        ]
      },

      4: {
        questionText: "Lamisi’s uncle is a bureaucrat based in Accra. He is visiting Tamale, and takes her out to a local restaurant known for its grilled meats and <i>tuo zaafi.</i> As they dine, she overhears the restaurant manager complaining about an inconsistent supply of poultry. She senses an opportunity.",
        answerOptions: [
          {
            text: "<b>Approach the manager, and offer to be his poultry supplier.</b> <br><br>Lamisi is confident in her product, and believes that risk-taking is the key to growth.",
            resultText: "Though hesitant, the manager offers to give Lamisi a shot — what does he have to lose?<br><br> After sampling her product, he agrees to do business. He offers to purchase a supply of 12 birds a month at a price of ₵25 each. He praises her confidence and initiative. Lamisi also agrees to pay for a veterinarian to assess the health of her birds (₵350), and hires a Motorking driver to make her deliveries once a week (₵40/month).",
            impactImage: "Loan_Lundy.png",
            impact: {
              cash: -350,
              income: 225,
              resilience: 3,
              gameFlowVariable: ['madeTheDeal', true],
            },
          },
          {
            text: "<b>Don’t approach the manager.</b> <br><br>Lamisi doubts that he would want to partner with a female poultry supplier. Plus, it will be embarrassing if Lamisi is rejected in front of her uncle.",
            resultText: "No risk, no reward. Lamisi leaves the restaurant with a deflated sense of confidence. At least she didn’t have to face rejection.",
            impact: {
              resilience: -2,
              gameFlowVariable: ['madeTheDeal', false],
            }
          },
        ]
      },

      5: {
        optionalText: {
          toggle: 'madeTheDeal',
          whenFalse: "Now that Lamisi needs to supply a restaurant with birds, she needs to expand the size of her pen, and purchase additional chicks and feed. To do this, she will need more cash.",
          whenTrue: "Lamisi is ready to expand the size of her pen, and purchase additional chicks and feed. To do this, she will need more cash. "
        },

        questionText: "Unfortunately, high interest rates, negative attitudes towards women in business, and other bureaucratic obstacles make it very difficult for female entrepreneurs to access credit through formal financial institutions in Northern Ghana. Therefore, most young entrepreneurs must rely on the help of relatives and friends, or access credit through informal alternatives.",
        answerOptions: [
          {
            text: "<b>Reach out to family for a loan.</b>",
            resultText: "Lamisi’s parents deny her request for a loan. Though they have come to term with the fact that she is operating a small poultry operation in the yard, they do not think that she will be able to run a successful farm on a larger scale.<br><br> Lamisi reluctantly decides to ask her long-time friend, who owns a local catering company, for a loan. He agrees to loan her ₵1000, which she will pay back, with interest, in installments of ₵100 per month for one year. She is relieved to have found a source of cash to invest in her business. She spends ₵150 expanding her pen and purchasing additional feed.",
            impact: {
              cash: 850,
              resilience: 3,
              debt: 1200,
              debtPayments: 100
            },
          },
          {
            text: "<b>Apply for a loan through a microfinance institution.</b>",
            resultText: "The major microfinance institution operating in Lamisi’s region is no longer operational. The local branches were forced to close following a government investigation, which revealed that investor deposits were being diverted into the bank accounts of firm managers. Lamisi’s friends and mentors recommend that she look for a different source of credit. (Try a different option).",
            reject: true,
          },
          {
            text: "<b>Organize a small loan through a <i>Susu collector.</i></b>",
            resultText: "Lamisi reaches out to some of her colleagues from the EQWIP HUBs entrepreneurship program, and puts together a small group of six traders to start a rotating Susu circle. Each member will contribute ₵80 per month. Every six m onths, a different trader will be given access to the total monthly sum. The group of traders agrees to let Lamisi access the first loan (₵400).<br><br> Lamisi is relieved to have found a source of cash to invest in her business, and is happy to have established a network of young, like-minded entrepreneurs.<br><br> She spends ₵150 expanding her pen and purchasing additional feed.",
            impactImage:"Susu_Lundy.png",
            impact: {
              cash: 250,
              resilience: 1,
              debt: 400,
              debtPayments: 80,
              assets: 1,
              gameFlowVariable: ['hasSusu', true]
            },
          },
        ]
      },

      6: {
       questionText: "The government announces that it is cracking down on ‘illegal businesses’. The newspapers claim that inspection officers will be issuing fines to businesses that are not properly registered. ",
       questionImage: "Registration_Lundy.png",
       answerOptions: [
         {
           text: "<b>Get the paperwork together, and register!</b> <br><br>To operate legally, Lamisi will need to apply for a Tax Identification Number and register her business as a sole proprietorship (₵55).",
           resultText: "Lamisi spends most of her weekend sorting her way through the convoluted application paperwork. On Monday, she heads to the registration office, but there is a massive queue. She waits for several hours, but the queue barely moves. She’s one of the only women present in the queue, and a couple of men begin to harass and tease her. Frustrated and tired, Lamisi decides to go home.<br><br> The next day, determined to properly register her business, Lamisi decides to hire a man that will wait in line at the office on her behalf. This costs her an extra (₵50), but it does the trick. A few weeks later, her application is accepted.",
            impact: {
              cash: -110,
              resilience: 2,
            }
         },
         {
           text: "<b>Take the risk.</b> <br><br>The government has been saying this for years!",
            impact: {
              followUpQuestion: {
                questionText: "Lo and behold, two weeks following the government’s announcement, an inspection officer arrives at Lamisi’s farm, asking for her registration papers and TIN. The fine, he explains, will be very expensive.",
                answerOptions: [
                  {
                    text: "<b>Ignore the officer’s hint, and accept the fine (₵500).</b> <br><br>Lamisi doesn’t want any more trouble.",
                    resultText: "Ouch.",
                    impact: {
                      cash: -500,
                    },
                  },
                  {
                    text: "<b>Offer the officer a ₵150 bribe.</b>",
                    resultText: "The officer accepts the bribe with little hesitation. Lamisi is off the hook, but she feels that the integrity of her business has been compromised.",
                    impact: {
                      cash: -150,
                      resilience: -1,
                    },
                  }
                ]
              },
            }
         },
       ]
      },
      7: {
        dependsOn: 'vaccinated',
        alternate: {
          questionText: "Lamisi’s younger sister has just started Junior High School, and her fees are due. As the older sister, Lamisi is expected to cover the school fees (₵150).",
          questionImage:"School_Lundy.png",
          answerOptions: [
            {
              text: "<b>Pay the fees, and wish her luck.</b>",
              resultText: "Though she would have rather used the money to invest in her business, Lamisi is obligated to help out her family — not only did they provide her with the land needed to start her business, but they have also been increasingly supportive of her endeavor in recent weeks.",
              impact: {
              }
            },
            {
              text: "<b>Pay the fees, and offer her an extra ₵100 for school supplies and new clothing.</b>",
              resultText: "Lamisi’s sister is very grateful for the generous gift. Nor does the gesture go unnoticed by the rest of the family, who have been slowly warming to the idea of Lamisi’s business endeavors.<br><br> As time passes, Lamisi’s siblings and even her parents start offering to help Lamisi around the farm — feeding and caring for the flock, and other simple chores. The support, though modest, comes as a great relief.",
              impact: {
              }
            },
          ]
        },
          questionText: "Lamisi’s younger sister has just started Junior High School, and her fees are due (₵150). As the older sister, Lamisi is expected to cover the school fees.<br><br> However, just as the rainy season is coming to a close, a number of her birds fall sick. Lamisi will have to hire a veterinarian to tend to the sick birds (₵300).",
          questionImage:"School_Lundy.png",
          answerOptions: [
            {
              text: "<b>Pay the school fees, and hope that the birds can recover on their own.</b>",
              resultText: "Lamisi is obligated to help out her family — not only did they provide her with the land needed to start her business, but they have also been increasingly supportive of her endeavor in recent weeks. Lamisi must put her family first.<br><br> Unfortunately, a half dozen birds pass away from illness, which leads to a significant loss in her productivity. Should have purchased those vaccinations!",
              impact: {
                cash: -150,
                income: -100,
                resilience: -2,
                assets: -1
              }
            },
            {
              text: "<b>Hire the vet to tend to the flock.</b> <br><br>Someone else will have to cover the school fees this year.",
              resultText: "The vet is able to nurse the birds back to health, but Lamisi’s family is not happy that she chose to put her business over her family.",
              impact: {
                cash: -300,
                resilience: -2,
              }
            },
          ]
      },
      // esoko
      8: {
       questionText: "One of the traders in Lamisi’s Susu circle tells her about Esoko — a mobile agribusiness tool that connects smallholder farmers with businesses, governments, and NGOs. Farmers can sign up using their cell phone to access key information about market prices, weather forecasts, agronomic tips, crop calendars, market trends, and  more. Esoko just opened a branch in Tamale, he explains.<br><br> This sounds like a great opportunity! Unfortunately, Esoko is designed to work most efficiently with smartphones — Lamisi only has a ‘yam’.",
       answerOptions: [
         {
           text: "<b>Buy a cell phone and data package, and sign up for Esoko!  (₵500 for a new phone, plus ₵20/month for data).</b>",
           resultText: "What a difference! Corresponding with the Esoko experts provides Lamisi with the confidence to make changes to her business model and the way that she manages her farm. She develops a better system for tracking changes in the market and setting your prices, and a new feed mix that makes use of low-cost substitutes. Esoko also offers tips on how to better clean and maintain the feeding and watering troughs for your birds.",
            impact: {
              cash: -500,
              income: 200,
              resilience: 3,
              environment: 1,
              assets: 2,
              assetText: 'a smartphone'
            }
         },
         {
           text: "<b>Save the cash.</b> <br><br>Lamisi has contacts in the marketplace that provide information about prices and market trends. Plus, she grew up on a farm! She can take care of her birds without the help of experts in some office far away.",
           resultText: "Maybe down the road, when Lamisi has more cash saved, she will consider buying a smartphone. Back to work.",
            impact: {
              cash: 0,
            }
         },
       ]
      },
      9: {
        questionText: "Lamisi is worried about the sustainability of her business. New competitors seem to be entering the market each week! She needs to find a way to innovate — to bring something new or different to the table. She reaches out to customers, restaurant owners, and wholesalers, in order to find out how to better improve her business.<br><br> Lamisi’s research produces some interesting findings. First, she learns that most restaurants, hotels, and households in urban areas in Northern Ghana rely on frozen poultry products imported from the South or from overseas — these products are typically cheaper, pre-cut, processed, and ready to use.<br><br> However, customers and restaurants also reported a preference for local, fresh poultry, even if it is a bit more expensive. Many customers believe that fresh poultry is healthier than the frozen kind. However, frozen poultry is considered more convenient and more reliable. Plus, customers do not want to kill or prepare their own birds.<br><br> Lamisi comes up with two ways to make use of these findings.",
        answerOptions: [
          {
            text: "<b>Rebrand the business: “Lamisi’s Free-Range Farm: the fresh and healthy choice for poultry in Tamale.”</br> <br><br> <i>Improve the quality of the product, and increase the price.</i>",
            resultText: "For this scheme to work, Lamisi will need to produce goods that are as healthy and high quality! After consulting with some more experienced farmers and doing some research online, she replaces many of the low-cost ingredients in her feed mix with higher-quality, organic products, and also begins to add herbal supplements to her birds’ water supply. (₵150 per month). She also further expands her pen to create more space for her birds to roam (₵150).",
            impact: {
              cash: -150,
              income: -150,
              resilience: 3,
              environment: 1,
              assets: 2,
              gameFlowVariable: ['rebranded', false]
            }
          },
          {
            text: "<b>Reach out to local restaurants or hotels, and offer to supply, prepare, and deliver a regular shipment of fresh eggs and guinea fowl.</b> <br><br><i>Focus on reliability and customer convenience, in order to better compete with the suppliers of frozen chicken.</i>",
            resultText: "Lamisi reaches out to three local restaurants, and offers to supply them with a regular shipment of fresh eggs and guinea fowl.<br><br> The first restaurateur she speaks to turns her down. He subtly hints that he does not want to rely on a young woman to supply his poultry. However, Lamisi does not give up. She brings a free sample of her products to the next two restaurateurs she visits, both of which agree to a two-week trial!<br><br> In order to supply these restaurants, Lamisi will need to purchase new equipment and build an isolated area (₵200) in order to properly kill and dress the birds.",
            impact: {
              cash: -200,
              income: 200,
              resilience: 2,
              environment: -1,
              gameFlowVariable: ['rebranded', true]
            }
          },
        ]
      },
      10: {
        dependsOn: 'rebranded',
        alternate: {
          questionText: "Lamisi now needs to find an efficient way to deliver her products to the two restaurants she has agreed to supply. Unfortunately, getting around in Tamale is not very easy. There is no formal public transit, and very few people have access to cars or trucks. Beyond walking or cycling, the two most popular forms of transportation are Yellow Yellows — informal motorized tricycle taxis used to travel short distances — and Motorking motorized tricycles, which come equipped with a small truck bed for transporting goods. When it rains, roads become very muddy, and transportation can be very difficult, and even dangerous.",
          questionImage: "Motorking_Lundy.png",
          answerOptions: [
            {
              text: "<b>Hire a Yellow Yellow each week, and personally deliver the products to each restaurant (₵70 per month).</b> <br><br>Lamisi wants her partnerships to succeed, which means making sure that her goods arrive on time, and in good order.",
              resultText: "The restaurateurs are very happy with both Lamisi’s product, and her service. Particularly, they appreciate that she is thorough, punctual, and willing to follow up after the delivery.",
              impact: {
              }
            },
            {
              text: "One of the traders in Lamisi’s Susu circle works as a distributer of <i>Brukina</i> — a popular millet-based drink and breakfast substitute. She works closely with a Motorking driver who delivers Brukina throughout the region for a good rate.<br><br> <b>Offer your friend’s driver ₵35 a month to add the poultry products to his regular route.</b>",
              resultText: "The scheme backfires. On the second week, the delivery driver collides with another vehicle, and Lamisi’s eggs are crushed by a tumbling crate of <i>Brukina</i>. She loses a week’s profit, and the restaurant managers are <i>not happy.</i><br><br> One of them terminates the contract.",
              impact: {
              }
            },
          ]
        },
        questionText: "Lamisi’s birds are fattening up nicely on their new diet, which means she can now charge more for them. The timing is good, too — the Bugum Chugu (Fire Festival) is just around the corner! The festival, which marks the start of a new lunar year, is one of the most important holidays and biggest parties for residents in Northern Ghana. The demand for plump guinea fowl is sure to spike.<br><br> This is a perfect opportunity to market her new brand, and to attract new customers.",
        answerOptions: [  
          {
            text: "<r>Purchase ₵250 worth of prime time radio ads, which buys a series of day-time mentions on <i>Diamond FM</i> and a series of evening messages on <i>NorthStar Radio.</i></b>",
            resultText: "The radio ads work! As the Fire Festival approaches, dozens of new customers arrive. Not everyone who drops by purchases a bird — the prices are too high, some complain — but Lamisi’s farm has never been busier. ",
            impactImage: "Radio_Lundy.png",
            impact: {
            }
          },
          {
            text: "<b>Book a day off, head to the EQWIP  HUBs computer lab downtown, and put together a social media campaign to promote the new brand.</b> <br><br>Lamisi’s sister is willing to take care of the chores around the farm while she is gone.",
            resultText: "With the support of EQWIP volunteers and staff, Lamisi creates a basic website for her business and adds it to online business directories throughout Tamale. She also launches a Facebook page, and spreads word of her business on WhatsApp.<br><br> She has to purchase a bigger data package to maintain her social media accounts (₵35 month), but the social media campaign seem to work! Within a few weeks, her profits begin to rise. Not everyone who drops by purchases from her — the prices are too high, they say — but the farm has never been busier.",
            impact: {
              assetText: 'a website'
            }
          },
        ]
      },
      11: {
        susuImpact: {
          text: "Six months have passed, and it’s Lamisi’s turn once again to access the cash from her Susu circle (₵400). Now that she has enough cash, she purchases a round of vaccinations for her a flock, which should last her through the coming season (₵200).",
          debt: 400,
          debtPayments: 80,
          cash: 200
        },
        questionText: "Lamisi’s cousin, who is getting married next week, drops by the farm and asks her to provide a half dozen birds for the occasion.<br><br> She is happy to oblige, and offers the half-dozen birds for a price of ₵150. Her cousin gets upset, and claims that he is offended that she would try to charge a family member, as if he was just another customer. He re-asserts that she should give the birds to him for free.",
        answerOptions: [
          {
            text: "<b>Let him take the birds for free.</b> <br><br>It’s best to avoid any more family tension.",
            resultText: "That stings, but Lamisi didn’t think she had a choice. Her family already disapproves of her business, and she doesn’t want to create any more bad blood.",
            impact: {
              cash: -150,
              resilience: -1,
            }
          },
          {
            text: "<b>Call his bluff, and offer to provide the half-dozen birds for a discounted price of ₵100.</b>",
            resultText: "Lamisi’s cousin shakes off her counter-offer. He takes two of the live birds, and leaves. He claims that he will give her money for them next time he see her, but this seems unlikely.<br><br> Lamisi’s pride and self-esteem are hurt by this unpleasant and costly encounter.",
            impact: {
              cash: -50,
              resilience: -2,
            }
          },
        ]
      },
      12: {
        dependsOn: 'rebranded',
        alternate: {
          questionText: "Over the past several weeks, Lamisi has watched with anxiety as the price of white corn — a key ingredient in her bird feed mix — steadily inflates. A 50kg bag of white corn, which cost her just ₵55 just 3 months ago, now costs ₵100. It looks like the price of soybean meal is also on the rise.<br><br> It doesn’t look like Lamisi will be able to sustain her business model with these prices on the rise.",
          answerOptions: [
            {
              text: "<b>Change the bird feed mix to make use of low-cost substitutes for white corn and soybean meal.</b>",
              resultText: "After a couple of weeks, Lamisi’s plump, juicy birds start to thin out — at least to those who look closely. She continue to attract a steady stream of customers, but the feedback she received is less glowing than it once was.<br><br> Lamisi fears that her loyal customers may begin to drift, lest she improve the quality of her product.",
              impact: {
                income: -35,
                resilience: -2,
                environment: -1
              }
            },
            {
              text: "<b>Raise the prices to account for higher expenses.</b>",
              resultText: "A price increase is tough to swallow in a competitive market, and it turns away several of Lamisi’s customers, especially those looking for live birds. But inflation has had an impact on people across the region, and many of her loyal customers are unwilling to end their patronage.<br><br> Her monthly profit margin drops, but her reputation for providing high quality products in the region remains intact.",
              impact: {
                income: -40,
                resilience: 2,
              }
            },
          ]
        },
        questionText: "Over the past several weeks, Lamisi has watched with anxiety as the price of white corn — a key ingredient in her new bird feed mix — steadily inflates. A 100kg bag of white corn, which cost her just ₵55 just 3 months ago, now costs ₵100. It looks like the price of soybean meal is also on the rise.<br><br> It doesn’t look like Lamisi will be able to sustain her business model with these key prices on the rise.",
        answerOptions: [
          {
            text: "<b>Revert back to the old feed mix, which used low-cost substitutes for white corn and soybean meal, and keep your prices where they are.</b> <br><br>Lamisi will have to wait this out, and hope that the quality of her product does not suffer significantly.",
            resultText: "After a couple of weeks, Lamisi’s plump, juicy birds start to thin out — at least to those who look closely. She continue to attract a steady stream of customers, but the feedback she received is less glowing than it once was.<br><br> Lamisi fears that her loyal customers may begin to drift, or discover that she has not been fully honest with them.",
            impact: {
              income: -50,
              resilience: -2,
              environment: -1
            }
          },
          {
            text: "<b>Raise the prices to account for higher expenses.</b> <br><br>Lamisi has invested a lot of money in her rebranding efforts, and believes that she has won the loyalty of many customers.",
            resultText: "A price increase is tough to swallow in a competitive market, and it turns away several of Lamisi’s customers, especially those looking for live birds. But inflation has had an impact on people across the region, and many of her loyal customers are unwilling to end their patronage.<br><br> Her monthly profit margin drops, but her reputation for providing high quality products in the region remains intact.",
            impact: {
              income: -65,
              resilience: 2
            }
          },
        ]
      },
    }
  },

  setGameflowChangers: function(gameFlowVariable) {
    if (gameFlowVariable != undefined) {
      this.set(gameFlowVariable[0], gameFlowVariable[1])
    }
  },

  susuImpact: Ember.computed('currentQuestion', function (){
    var currentQuestion = this.get('currentQuestion')
    return currentQuestion.susuImpact
  }),

  susuText: Ember.computed('currentQuestion', function() {
    var susu = this.get('susuImpact')
    if (susu != undefined) {
      return susu.text
    }
  }),

  displaySusuImpact: Ember.computed('currentQuestion', 'susuAcknowledged', function(){
    return (this.get('hasSusu') && this.get('susuImpact') && !this.get('susuAcknowledged'))
  }),

  actions: {
    renderResult(answer) {
      
      this.set('rejected', false)
      this.set('chosenAnswer', answer)
      this.set('resultText', answer.resultText)
      this.set('impactImage', answer.impactImage || "")
      this.set('followUpQuestion', null)

      if (answer.reject) {
        this.set('rejected', true)
        return
      }

      if (answer.impact.followUpQuestion != undefined) {
        this.set('followUpQuestion', answer.impact.followUpQuestion)
        return
      }

      this.setGameflowChangers(answer.impact.gameFlowVariable)
      this.get('answerQuestion')(answer.impact)
    },

    submitAnswer(impact) {
      if (impact != undefined) {
        this.get('applyIncome')(impact)
      }

      var nextMonth = this.get('month') + 1
      this.set('month', nextMonth)

      if (this.get('month') > 12) {
        this.get('endGame')()
      }

      this.set('resultText', null)
      this.set('impactImage', null)
      this.set('chosenAnswer', null)
    },

    handleSusuImpact() {
      this.set('susuAcknowledged', true)
      this.get('setImpact')(this.get('susuImpact'))
    },

    renderDialog: function(whichModal) {
      this.setDialogContent(whichModal)
      this.toggleProperty('isShowingModal');
    },
  },

  setDialogContent(whichModal) {
    if(whichModal == 'susu') {
      this.set('currentModalText', 'Susu collection is a traditional form of banking that has been adapted to provide informal credit and savings opportunities to those who do not have access to the formal banking sector.<br><br> Over the course of a month, groups of 3 to 6 ‘traders’ make small, daily cash deposits to a local Susu collector, who typically sets up shop in the marketplace (‘susu’ means ‘small small’ in the Akan language). At the end of each month, one of the contributors is given the accumulated sum, minus a small fee taken by the collector. In other words, a Susu collector acts as a type of rotating savings and credit service, in which each contributor is given access to a cheap loan at least twice per year.<br><br> Unlike formal banks, Susu collectors are flexible, do not require paperwork, and do not charge transaction fees or interest. However, the rotating nature of Susu collection means that each member has to wait until their turn to access a loan.<br><br> There are an estimated 4,000 Susu collectors in Ghana, each serving between 400 and 1,500 customers daily.<br><br>')
    } else if (whichModal == 'guinea') {
      this.set('currentModalText',
               'Guinea fowl are a species of bird indigenous to Africa. Lean, nutritious, and rich in fatty acids, guinea fowl is an extremely popular bird in Ghana, and a favorite at roadside barbecue stands and upscale restaurants. Raising guinea fowl is also a relatively low-maintenance gig, when it comes to livestock. <br/><br/> The average guinea fowl also produces 55 to 100 eggs per year.'
              )
    } else if (whichModal == 'eqwip') {
      this.set('currentModalText',
               'EQWIP HUBs offers free entrepreneurship training courses to local youth.<br/><br/> These courses are focused on providing youth with opportunities to develop an innovative mindset to approach business idea generation, and on building practical skills with which they can develop, evaluate, and test these ideas. The courses will also enable participants to develop market-relevant skills, build networks, and access technology.'
              )
    } else if (whichModal == 'invest') {
      this.set('currentModalText',
               'Read about the recent DKM Microfinance Company scandal in Ghana <a target="_blank" href="http://www.ghanaweb.com/GhanaHomePage/business/DKM-customers-threaten-demo-over-non-payment-of-claims-490980"> here </a>'
              )
    } else if (whichModal == 'computer') {
      this.set('currentModalText',
               'In addition to offering training programs on digital literacy, EQWIP HUBs also provides participants with free access to computers and other information technology. By improving access to technology, EQWIP HUBs seeks to foster innovation and create a more sustainable livelihood for young entrepreneurs in low and middle income countries.'
              )
    } else if (whichModal == 'travel') {
      this.set('currentModalText',
               'Though there are buses that travel between cities in Northern Ghana, there is no formal public transit within those cities, and very few people have access to cars or trucks. Beyond walking or cycling, the two most popular forms of transportation are Yellow Yellows — informal motorized tricycle taxis used to travel short distances, or ‘tuk tuks’, and Motorking motorized tricycles, which come equipped with a small truck bed for transporting goods. When it rains, roads become very muddy, and transportation can be very difficult, and even dangerous.'
    )} else if (whichModal == 'whatsapp') {
      this.set('currentModalText',
               "WhatsApp Messenger is a free, cross-platform, instant messaging social media application for smartphones. It's extremely popular in Ghana."
    )} else if (whichModal == 'norse') {
      this.set('currentModalText',
               "NORSAAC is an empowerment for change organization committed to women and young people in Ghana’s Northern Region."
    )} else if (whichModal == 'service') {
      this.set('currentModalText',
               "Ghanaian students who graduate from accredited tertiary institutions are required by law to do a one-year national service to the country. Graduates are posted to various sectors as service personnel, and provided with a monthly stipend of ₵350.<br/><br/> The National Service Secretariat (NSS) is the Government of Ghana agency mandated to formulate policies and structures for national service."
    )} else if (whichModal == 'motor') {
      this.set('currentModalText',
               "A motorized tricycle with a back carriage for transporting goods."
    )} else if (whichModal == 'goro') {
      this.set('currentModalText',
               "<a href='http://3news.com/goro-boys-keep-frustrating-applicants-at-passport-office/' target='_blank'>Learn more about Goro Boys here.</a>"
    )} else if(whichModal == 'andMore'){
      this.set('currentModalText',
        "This information is pushed out to farmers via SMS messaging, or they can speak directly over the phone with agents ready to offer expert advice. <br/><br/> For example, if the price of eggs across the country rises, farmers will be sent a notice of the change. If it seems like your birds are not as healthy as they ought to be, you can reach out to Esoko for advice on improving your feed."
    )} else if(whichModal == 'yam'){
      this.set('currentModalText',
        "A brick; a basic cellphone without internet access or a camera."
    )} else if(whichModal == 'tuaZaafi'){
      this.set('currentModalText',
        "A popular dish in Northern Ghana consisting primarily of cooked maize dough plus a little dried  cassava dough and water."
    )} else if(whichModal == 'creditProblem'){
      this.set('currentModalText',
        "In many lower-middle income countries, women face a number of major obstacles to entrepreneurship. These include not only limited access to the formal sector of financial products, but also the pressure to prioritize household and family responsibilities over education, systemic discrimination and gender-based cultural norms and practices that limit women's ability to access training, services, and support, and a vulnerability to gender-based violence."
    )} else if(whichModal == 'offerBribe'){
      this.set('currentModalText',
        "<a href='http://www.business-anti-corruption.com/country-profiles/ghana' target='_blank'> Ghana's police force is plagued by a relatively high level of corruption:</a> extortion and bribery are widespread among the ranks of officers; and officers have been known to set up illegal checkpoints, and carrying out arrests as a means to extort irregular payments from citizens or from business associates of the detained"
    )} else if(whichModal == 'bootCamp'){
      this.set('currentModalText',
        "Boot camps, which are <a href='http://www.macleans.ca/work/jobs/how-coding-boot-camps-are-filling-the-talent-gap/' target='_blank'>‘an accelerated launch pad into a career’</a> in web development and design, are taking off in Canada and around the world."
    )} else if(whichModal == 'codeSchool'){
      this.set('currentModalText',
        "<a href='http://thecodeschool.net/' target='_blank'>Visit The Code School website here</a>"
    )} else if(whichModal == 'floodAccra'){
      this.set('currentModalText',
        "Ghana has for two decades been one of Africa’s fastest-growing economies. The country’s infrastructure, however, has not been able to keep up with its growth. This has led to a major problem with trash in major cities. In recent years, the accumulation of improperly disposed plastic bags in Accra has clogged up and damaged municipal drainage systems, causing major floods, <a href='https://www.wsj.com/articles/ghanas-growth-spurs-uncontrollable-trash-1434928945' target='_blank'>some of which have been deadly.</a>"
    )} else if(whichModal == 'eqwipHubNetwork'){
      this.set('currentModalText',
        "A solid network is an essential asset for young entrepreneurs. That’s why participants at each HUB are introduced to group of local leaders — including private and public sector representatives, established entrepreneurs, and like-minded civil society organization — dedicated to identifying opportunities, and providing mentorship and coaching to budding entrepreneurs. <br/><br/>Participants in the HUB Network will benefit greatly from increased information about the market, better access to capital and local labour markets, and an expanded network of skilled and highly motivated youth."
    )} else if(whichModal == 'launchTraining'){
      this.set('currentModalText',
        "She has designed a 2-week training course for young women (₵500 per person), and will also offer one-day introductory lessons for ₵55."
    )} else if(whichModal == 'ewipHubCLab'){
      this.set('currentModalText',
        "In addition to offering training programs on digital literacy, EQWIP HUBs also provides participants with free access to computers and other information technology. By improving access to technology, EQWIP HUBs seeks to foster innovation and create a more sustainable livelihood for young entrepreneurs in the Global South."
    )} else if(whichModal == 'crunchesNumber'){
      this.set('currentModalText',
        "Lamisi expects her flock to eventually produce about one crate of eggs per day, which she can sell for about ₵14. She can also sell her older birds for ₵25 each."
    )} else {
      this.set('currentModalText', '')
    }
  },
});
