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
    'Zara': {
      1: {
        questionText: "Working from home, Zara earns an average of GHC800 per month. She has just started an entrepreneurship training program with EQWIP HUBs, to better prepare her to launch her business. Her husband has agreed to give her access to GHC1100 of their shared personal savings, but she will need much more cash to set up her business. In addition to renting a space, she’ll also need to furnish it, and purchase supplies and equipment. She crunches the numbers, and figures she will need access to about GHC5000, after rent. Unfortunately, high interest rates, mandatory collateral requirements, and other bureaucratic obstacles make it all but impossible for young female entrepreneurs to access credit through formal financial institutions in Northern Ghana. Therefore, most young entrepreneurs must rely on the help of relatives and friends, or access credit through informal alternatives.",
        answerOptions: [
          {
            text: "Reach out to family for a loan.",
            resultText: "Zara’s parents deny her request for a loan. Though they support her work as a makeup artist, they do not support her ambition to start a vocational training program. As a mother of two, raising her children should be her main priority, they explain. Zara reluctantly decides to ask her long-time friend, who owns a local catering company, for a loan. He agrees to loan her GHC5000, which she will pay back, with interest, in installments of GHC550 per month for one year (total of GHC6600).",
            impact: {
              cash: 5000,
              resilience: 2,
              debt: 6600,
              debtPayments:550,
            },
          },
          {
            text: "Apply for a loan through a microfinance institution.",
            resultText: "The major microfinance institution operating in Zara’s region is no longer operational. The local branches were forced to close following a government investigation, which revealed that investor deposits were being diverted into the bank accounts of firm managers. Zara’s friends and mentors recommend that she look for a different source of credit. (Try a different option). ",
            impact: {
              reject: true,
            },
          },
          {
           text: "Organize a small loan through a Susu collector.",
            resultText: "Zara reaches out to some of her colleagues from the EQWIP HUBs entrepreneurship program, and puts together a group of six traders to start a rotating Susu circle. Each member will contribute GHC350 per month. Every six months, a different trader will be given access to the total monthly sum. The group of traders agrees to let Lamisi access the first loan (GHC1750). Lamisi is relieved to have found a source of cash to invest in her business, and is happy to have established a network of young, like-minded entrepreneurs.",
            impact: {
              cash: 1750,
              resilience: 3,
              debt: 1750,
              debtPayments: 350,
            },
          },
        ]
      },
      2: {
        questionText: "Now that she has funding, Zara needs to rent a location for her beauty bar.",
        answerOptions: [
          {
            text: "Rent a space in central Tamale — it will be easy to attract new clients in the busy city core, and her students will appreciate a central location (GHC4200 for 12 months).",
            resultText: "Renting a space downtown is expensive, but Zara considers it a sound investment. Better to build a beauty bar in an ideal location than have to move and start over again once things are underway, she reasons. However, Zara now has less money to invest on equipment, supplies, and furniture for her beauty bar. Getting to work will also be more difficult — it will be inconvenient, to say the least, to have to haul her children back and forth to the salon.",
            impact: {
              cash: -6000,
              resilience: 3,
              assets:1,
            },
          },
          {
            text: "Rent a space closer to where she lives, on the city’s periphery. It’s a quieter area, but it’s cheaper, and easier to bring her children along (GHC2400 for 12 months).  ",
            resultText: "It’s not an ideal location, but it’s cheap. Zara can now afford to invest the money she saved on rent on things like couches, salon chairs, mirrors, and other equipment. It’s also in a neighborhood that is close to home, which means she can easily bring her children along. The downside — she will have to work extra hard to attract clients and students from outside of her neighborhood.",
            impact: {
              cash: -4000,
              resilience: 1,
              assets:3,
            },
          },
        ]
      },
      3: {
        questionText: "After weeks of tireless work, Zara’s beauty bar is finally set up. Before she gets underway, she crunches out a quick profit analysis. Based on the average number of clients she expects to serve each month, and taking into account the new expenses of that are required to maintain her rental space, Zara expects to earn an average of GHC600 on a monthly basis (GHC200 per month less than she was making before).She will need to expand her business in order to service her debt and create wealth. Zara decides that it is time to launch the vocational training component of her business. She has designed a 2-week training course for young women (GHC500 per person), and will also offer one-day introductory lessons for GHC55.  (Click next) Zara needs to find young people to sign up for her vocational training courses, but doesn’t have enough cash to advertise. During her entrepreneurship training, Zara spent many hours in the computer lab, working closely with volunteers and fellow participants to learn how to develop a website using Squarespace. If she can dedicate a few days of work to it, she thinks she can build a basic website for her business, which she can then share on social media and add to local business directories.",
        answerOptions: [
          {
            text: "Build the website at the EQWIP HUB computer lab. It’s a bit of commute, though — an hour and a half each way. Zara will have to shut down the beauty bar for a day or two, and find a sitter while she is away.",
            resultText: "Working closely with a couple of the volunteers at the EQWIP HUB computer lab over the course of two days, Zara is able to set up a basic website, a business email, and a Facebook page. She adds her business to a number of online business directories, and begins advertising her new website on social media.",
            impact: {
              cash: -150,
              income: -200,
              resilience: 2,
              assets:1,
            },
          },
          {
            text: "Build the website at a local internet cafe near home. Zara can work on the site over the course of several mornings, while the children are at school and the beauty bar is still closed.",
            resultText: "Zara spends several mornings at an Internet cafe trying to build the website. The computers are very slow, and the Internet cuts out intermittently. After three frustrating mornings, she gives up. What a waste of time (and GHC25)! She does, however, manage to set up a Facebook page for her salon, which she asks her friends to share widely.",
            impact: {
              cash: -25,
              income: -200,
              resilience: -1,
            },
          },
        ]
      },
      4: {
        questionText: "Five women have signed up for Zara’s first vocational training course, which is set to begin on May 1st. A slow start, but a start nonetheless. One of Zara’s customers connects her with a woman who is looking for a makeup artist to service her bridal party. The woman lives in a small town near Bolgatanga, about 150km from Tamale. The artist she had previously booked cancelled on her last minute. Now, she is willing to pay GHC800 for an makeup artist willing to travel to for gig — the day after tomorrow! Zara is on the fence. She needs the cash, but traveling around Northern Ghana is not easy, especially with children.",
        answerOptions: [
          {
            text: "Pass on the offer. Though Zara needs the money, she thinks it will be a challenge to arrive on time for the wedding. The rainy season has just begun, and many of the roads in rural areas have been rained out.",
            resultText: "It hurts to turn down a big paycheque, but Zara has a number of clients booked already — they are her main priority.",
            impact: {
              income: 150,
              resilience: 1,
            },
          },
          {
            text: "Accept the client, cancel previous appointments, and prepare the children for the 5 hour journey to Bolgatanga!",
            resultText: "Despite her family’s admonishment, Zara and her children take the Metro Mass Transit bus to Bolgatanga (GHC45). Next, she hires a Yellow Yellow to take them to the wedding venue, which is located a few kilometers outside of town. The driver charges you extra for the two children and all your supplies (GHC10). The journey to the venue is long, hot, and uncomfortable, but Zara arrives just in time, with two upset children in tow. After the job, Zara embarks home, arriving after midnight, exhausted. (GHC55). The next day, she will have to call and apologize to the customers whose appointments she cancelled without notice.",
            impact: {
              cash: 600,
              income: -50,
              resilience: -1,
            },
          },
        ]
      },
      5: {
        questionText: "Zara’s first vocational training course is underway, which provides her with an influx in cash (GHC2000). Finally, she can afford to advertise her business.",
        answerOptions: [
          {
            text: "Purchase GHC750 worth of prime time radio ads. This will be used to pay for a series of day-time mentions on Diamond FM and a series of evening messages on NorthStar Radio.",
            resultText: "The ads seem to do the trick! Over the next couple of weeks, new customers trickle in, and Zara manages to book a number of weddings and events for the coming months. Her vocational training courses also receive a considerable bump in sign-ups. This successful marketing campaign should improve Zara’s profit margin over the next several months.",
            impact: {
              cash: 1250,
              income: 300,
              resilience: 1,
            },
          },
          {
            text: "Purchase a smartphone (GHC700) and data package (GHC20 per month), and develop a social media campaign to promote the business online.",
            resultText: "Radio ads might have a broader, more immediate reach, but a social media campaign can be  refined and developed over time, Zara figures. Now that she has a smartphone, she can update her Facebook page regularly, and share details of her business throughout various channels on WhatsApp. She also consults with some of her colleagues from her EQWIP HUBs training course — particularly the social media-savvy ones. Their advice is to focus not on advertising your business per se, but on building your business’s brand. To do this, her colleagues explain, Zara should regularly post photos and videos that convey her salon’s unique style and culture. If done right, the customers will follow.",
            impact: {
              cash: 1300,
              income: 250,
              resilience: 3,
              assets:2,
            },
          },
        ]
      },
      6: {
        questionText: "",
        answerOptions: [
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
        ]
      },
      7: {
        questionText: "One of Zara’s walk-in clients, Sandra, is a graduate student in environmental sciences at the University of Development Studies in town, and notices that Zara’s students, who were cleaning up after a training session, were not properly sorting their waste or disposing of chemicals — indeed, she spotted one student rinsing out old nail polish bottles and dumping the chemical contents down the drain, a practice known to contaminate the water supply. Sandra offers to design a training module for Zara’s students that focuses on environmental sustainability. For a small fee, she is also willing to spend an hour with each new cohort discussing the benefits of using organic products, teaching them how to properly dispose of chemical waste, and explaining the importance of preserving water in a region prone to drought.",
        answerOptions: [
          {
            text: "Hire Sandra! This is a great opportunity to add value to the training courses. (GHC150 per month).",
            resultText: "Sandra turns out to be a terrific teacher and mentor for Zara’s students — her environmental training sessions are a big hit, not only for the students, but on social media as well. As an end of the month bonus, Zara also notices that her hydro bill has dropped, significantly.",
            impact: {
              income: -125,
              resilience: 2,
              environment: 2,
            },
          },
          {
            text: "The environment is important, but saving money is still a priority for a start-up in a stage of relative infancy. Zara promises to keep a closer eye on her students’ behaviour.",
            resultText: "Zara does her best to convince her students to be more careful with water, and to be conscious of what they do with their waste. Though some students seem to get the message, it doesn't click with others. She can’t help but notice, now, that her hydro bill has risen significantly in recent months (GHC25 per month).",
            impact: {
              income: -35,
              resilience: -1,
              environment: -1,
            },
          },
        ]
      },
      8: {
        questionText: "The government announces that it is cracking down on ‘illegal businesses’. The papers claim that officers will be issuing fines to businesses that are not properly registered.",
        answerOptions: [
          {
            text: "Get the paperwork together, and register! To operate legally, Zara will need to apply for a Tax Identification Number (GHC25) and register her business as a sole proprietorship (GHC35).",
            resultText: "Zara’s husband spends the better part of a weekend sorting through the convoluted paperwork for the application. On Monday, she heads to the registration office, but there is a massive queue. She waits for a few hours, but the queue barely moves. She’s one of the only women present in the queue, and a couple of men begin to harass and tease her. Annoyed and tired, Zara decides to go home.",
            impact: {
              resilience: -1,
            },
          },
          {
            text: "Non-registered small businesses rarely run into problems. The government has been saying this for years! Might as well take the risk.",
            resultText: "Zara hopes that the government is bluffing. Only time will tell.",
            impact: {
              resilience: -2,
            },
          },
        ]
      },
      9: {
        questionText: "Zara’s cousin is getting married this month, and has asked her to be the makeup artist for his wife and her bridal party. Zara emails him a quote for GHC500. He does not respond to the email. A week later, he confronts Zara at work, claiming that he is insulted that she would ask a family member to pay for her services. He angrily demands that she do the work for free.",
        answerOptions: [
          {
            text: "Apologize to the cousin, and offer to work the wedding for free. Zara’s extended family has not only provided her with plenty of support these past months, but has also become an essential source for customer referrals around town. She does not want to put these relationships into jeopardy.",
            resultText: "Zara’s cousin apologizes for getting upset. He thanks her graciously, and leaves. Zara will have to lose a day’s income to work the wedding pro bono (GHC500).",
            impact: {
              cash: -500,
              resilience: -1,
            },
          },
          {
            text: "Zara stands her ground, and tells him that he has to pay full price. This business is the source of Zara’s livelihood, and she cannot afford to give away a free lunch.",
            resultText: "Zara’s cousin gets angry, and storms off, saying that he will find someone else to do the makeup for his wife. Not only has she lost the gig, but she has also created further tension with her family.",
            impact: {
              resilience: -2,
            },
          },
          {
            text: "Offer a ‘family discount’ (GHC300)  in exchange for future babysitting.",
            resultText: "Zara’s cousin reluctantly accepts the counteroffer, and promises to take care of the kids when needed. It’s not a perfect deal, but at least Zara doesn’t lose a full day’s income.",
            impact: {
              cash: -200,
              resilience: 1,
            },
          },
        ]
      },
      10: {
        questionText: "The pressure on Zara to register her business is mounting. Not only have the police followed up with their promise to crack down on illegal businesses, but many of Zara’s students have also been asking about accreditation. How will their training be recognized by potential employers or customers if the vocational training center was not even legally registered? Her husband has offered to stand in line at the registration office on her behalf, but he has not been able to book a weekday off of work. Zara herself is unwilling to return to the notorious Tamale office on her own.",
        answerOptions: [
          {
            text: "The registration office in Accra is known to be much bigger and better organized than the one in Tamale. Many claim that it’s faster to simply bus to Accra than to queue up here in town. Road trip!",
            resultText: "Zara finds a sitter, and buys an overnight bus ticket for a round trip to Accra — an exhausting, 6 hour journey each way (GHC90). Fortunately, things go smoothly once she arrives. Indeed, the entire process only takes two hours! She is told that it will take 60 days to review the application. Frustrating, but that’s the way it goes. With a couple of hours to kill, Zara heads to the marketplace to stock up on organic makeup products not available in Tamale (GHC100). She will be able to sell these to her customers at a premium.",
            impact: {
              cash: -190,
              resilience: 2,
            },
          },
          {
            text: "Last time Zara was in line at the registration office, she was approached by a duo of Goro Boys — unofficial ‘middle men’ who offered to ‘facilitate’ the registration process for a fee. Zara knows that these Goro boys are working illegally, but she does not have time to navigate the dysfunctional bureaucracy of the registration office, nor does does she want to be harassed while waiting in line again. Head back to the registration office, and offer the Goro Boys GHC200 for their services.",
            resultText: "The Goro Boys do their thing. One week later, Zara receives word that her business has successfully been registered.",
            impact: {
              cash: -200,
              resilience: 1,
            },
          },
        ]
      },
      11: {
        questionText: "",
        answerOptions: [
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
        ]
      },
      12: {
        questionText: "",
        answerOptions: [
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
        ]
      },
    },
    'Kojo': {
      1: {
        questionText: "First thing’s first — Kojo will need cash to fund his business endeavor! Currently, he has GHC1100 in savings, which he accumulated during his time with the national service. He figures he will need a lot more than that to successfully build a viable mobile application. Unfortunately, high interest rates, mandatory collateral requirements, and other bureaucratic obstacles make it all but impossible for young entrepreneurs to access credit through formal financial institutions in Ghana. Therefore, most young entrepreneurs must rely on the help of relatives and friends, or access credit through informal alternatives.",
        answerOptions: [
          {
            text: "Reach out to family for a loan.",
            resultText: "Though they do not have a lot of money, Kojo asks his family for a loan of GHC3000. Kojo’s two older siblings and uncle are happy to help him out. His father, however, is very reluctant — he worked hard to pay for his son’s tertiary education, and does not understand why he is building gadgets instead of finding a real job. He finally concedes, but warns Kojo that the family will not lend him any more money if he is not able to repay the loan within a year. Kojo promises to pay back the the loan in monthly installments of GHC250.",
            impact: {
              cash: 3000,
              debt: 3000,
              debtPayments:250,
            },
          },
          {
            text: "Apply for part-time work as a teacher or a tutor at the local secondary school.",
            resultText: "Kojo’s background in accounting qualifies him to teach mathematics to high school students. He can earn GHC500 per month teaching 3 afternoons a week, though this means that he will have less time to focus on his business.",
            impact: {
              income: 500,
            },
          },
        ]
      },
      2: {
        questionText: "Now that Kojo has found a source of cash, it’s time to build the mobile application! Though Kojo has some experience building websites and a rudimentary understanding of coding, he will not be able to build a fully functional app on his own.",
        answerOptions: [
          {
            text: "Hire a developer to build the mobile application. Kojo gets a quote from a development firm that can build a basic mobile application over the course of 3 months for GHC3500.",
            resultText: "Kojo is confident in his decision. He has found a developer that he can trust will deliver a quality product. The developer also agrees to accept payment in monthly installments of GHC875, starting next month.",
            impact: {
              debt: 3500,
              debtPayments:875,
            },
          },
          {
            text: "Enroll in a coding bootcamp, and learn how to build the app ‘in-house’. The Code School is offering an 8-week intensive program. The program, which starts at the beginning of next month, costs GHC1000 up front. He will also have to purchase a laptop (GHC1100).",
            resultText: "As the name implies, coding bootcamps are no a walk in the park. Every weekday morning for 8 weeks straight, Kojo will have to work extremely hard to learn the fundamental technical skills needed to build a mobile app. However, he believes that if he works hard, he will become equipped with the skills required to not only build a basic application, but to better overcome obstacles that are all but certain to arise down the road. What’s more, The Code School provides ongoing mentorship and support for graduates of the program. A major risk, of course, is that Kojo may end up building an application that is riddled with mistakes, or that does not properly function.",
            impact: {
              cash: -2100,
              resilience: 2,
            },
          },
        ]
      },
      3: {
        questionText: "It will still be several weeks until the Recycle Accra! application is ready. In the meantime, Kojo needs to find some clients to pilot the project! He aims to partner with at least 10 businesses before getting started. RWS is willing to pay GHC35 per 25 kilogram load of plastics. Each client will receive GHC25 per load, GHC10 of which will go to Kojo to fund his operations. After meeting with dozens of business owners and managers, and Kojo manages to generate a lot of interest in his app, but is unable to secure commitments from more than 2 or 3 clients. Many of the potential clients are skeptical: a few dozen cedis per week is not very much money, and it will be difficult to convince busy employees to sort through trash! In other words, Kojo needs to add value to business proposition.",
        answerOptions: [
          {
            text: "Offer to provide pro bono environmental training sessions for the staff of each business that agrees to pilot the project. It may be idealistic, but Kojo thinks that if he can convince people about the benefits of recycling and waste management, they will be more than happy to play their part.",
            resultText: "The offer seems to work. Kojo manages to secure partnerships with 4 additional clients, including the general manager of a supermarket chain with several stores across the city. The general manager, though hesitant at first, agrees to pilot the project at 5 locations, provided that he won’t have to commit any of his own time or resources. Kojo is thrilled to have secured  a major client, but he has to get organized. He will need to spend a number of evenings planning and conducting research for a presentation on environmental responsibility. It’s a lot of work, but Kojo enjoys it — plus he can use the presentation he prepares to pitch to future clients.",
            impact: {
              resilience: 2,
              environment: 2,
            },
          },
          {
            text: "Offer to promote each partnership across social media, and to include a list of participating businesses on the application, once it is developed. Kojo is tech savvy, and knows how to create a buzz online. He will try to convince potential clients that partnering with an environmentally responsible initiative will be good for their business.",
            resultText: "The idea works wonderfully — what kind of business would turn down free publicity? Kojo quickly secures enough clients to pilot the project, but fears that some of the businesses that sign up are trying to take advantage of him. After all, there is no real way to ensure that the businesses actually sort the waste or even use the application once it's ready.",
            impact: {
              resilience: 1,
            },
          },
        ]
      },
      4: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
        ]
      },
      5: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
        ]
      },
      6: {
        questionText: "With the pilot well underway, Kojo is looking to expand his clientele. After doing some research, he decides to target clients in Awoshie, a neighborhood on the periphery of Accra that is severely underserviced in terms of both infrastructure and municipal services. He is able to easily identify a dozen clients in the area that are interested in Recycle Accra! RWS is interested in expanding the project, but is not willing to provide a door-to-door collection service to a location so far from the processing plant. Kojo’s clients will have to drop their plastic waste at a single collection point closer to the city’s main roadways. Kojo worries that this inconvenience will scare away some of his potential clients.",
        answerOptions: [
          {
            text: "Hire a Motorking driver to make weekly collections in Awoshie, at least until RWS can be convinced to expand their service area. (GHC80 per week).",
            resultText: "Adding a Motorking driver to the monthly payroll won’t be easy, but Kojo thinks that a rapid expansion into Awoshie will impress potential investors. By the end of the month, Kojo manages to secure 10 new clients, most of which are using the app on a regular basis.",
            impact: {
              income: 80,
              resilience: 2,
            },
          },
          {
            text: "Offer new clients in Awoshie and additional GHC10 per load that they drop off at the collections site for the first 3 months. Kojo will have to pay this extra sum out of his own pocket.",
            resultText: "A number of smaller businesses in Awoshie are convinced by this added incentive, and sign up for Recycle Accra! The larger businesses are not willing to transport their plastics to a central location, and ask Kojo to return when his business can better accommodate them. By the end of the month, Kojo manages to secure 6 new clients, most of which are using the app on a regular basis.",
            impact: {
              resilience: 2,
            },
          },
        ]
      },
      7: {
        questionText: "Things seem to be going well as Kojo enters the third and final month of the pilot stage of Recycle Accra! The pilot is expanding slowly, but steadily, and he has received significant amounts of positive feedback. However, with the quick expansion into Awoshie, Kojo appears to have encroached onto the territory of a private waste disposal enterprise — a competitor with close ties to the municipal government. Within a week, Kojo receives a cease and desist notice from the municipal government. As an unregistered business, it states, he is operating illegally in Awoshie and is subject to a heavy fine. However, Kojo is unwilling to be intimidated or pushed out of Awoshie. He his paperwork together, and heads to the registration office. To operate legally, he will need to apply for a Business Operating Permit (GHC500). Unfortunately, the clerk at the office tells Kojo that it will take at least 90 days to review his application.",
        answerOptions: [
          {
            text: "Inform the Recycle Accra! clients in Awoshie that, due to unforeseen circumstances, services will have to be paused for the next three months. The last thing Kojo’s project needs right now is legal trouble!",
            resultText: "Kojo is frustrated by these unexpected bureaucratic obstacles — many of his clients in Awoshie will likely stop using his app altogether. However, he is confident that he made the right choice to stay within the parameters of the law!",
            impact: {
              income: -100,
              resilience: 1,
            },
          },
          {
            text: "Offer a GHC150 bribe to the registration officer in order to fastrack the application process. Neither potential investors nor RWS would be impressed should Kojo suddenly have to cut off service to a major segment of his clientele.",
            resultText: "The officer accepts the bribe, and, within one week, Recycle Accra! is an officially registered business. Kojo is relieved, but he doubts that that is the last he will hear from his rivals in Awoshie. Indeed, within the month, two of his clients cancel their subscription to Recycle Accra!, explaining that they have been advised to cut ties with Kojo’s new enterprise.",
            impact: {
              cash: -150,
              resilience: -2,
            },
          },
        ]
      },
      8: {
        questionText: "Mid-way through July, Ghana is hit by a major rainstorm. Within 24 hours, major floods sweep across Accra, causing millions of dollars of damage. These floods, which have been happening on a cyclical basis in recent years, are caused in part by plastic bags and other waste that is disposed of near open drainage systems. Now that Recycle Accra! has found its footing, Kojo senses an opportunity to not only to help alleviate the strain on the city’s drainage system, but to grow his business at the same time.",
        answerOptions: [
          {
            text: "Purchase specially outfitted plastic recycle bins from RWS, and install them in strategic locations — next to open drains or near busy marketplaces. This won’t be a cheap endeavor — in addition to purchasing the bins, Kojo will also have to hire a Motorking driver to make weekly pickups (RWS trucks will not be able to operate in these busy areas). He will also have to hire a number individuals to teach and encourage Accrans how to properly use the bins once they are introduced! In total, Kojo estimates that he will need to fork over about GHC500 to pull this off.",
            resultText: "Kojo hires a number of enthusiastic youth that are willing to encourage the use of his newly installed bins, and this seems to do the trick. By the end of the month, all 6 of Kojo’s bins are being filled and transferred to RWS on a regular, weekly basis. This is not only good publicity for Recycle Accra!, the logo of which is pasted all over the bins, but the plastic that Kojo ships to RWS also brings in an extra  200 cedis a week.",
            impact: {
              cash: -500,
              income: 150,
              resilience: 2,
              environment: 2,
              assets: 1,
            },
          },
          {
            text: "Launch a social media campaign to raise awareness about the causes of flooding, and ways that Accrans can deal with their waste more responsibly. Kojo will reach out to his brother-in-law, who works with an NGO focused on environmental sustainability, for support in designing the campaign.",
            resultText: "Kojo’s brother-in-law is happy to help. Together, they put together a series of infographics that provide helpful tips on recycling, composting, and responsibly sorting waste. The NGO also offers to donate 300GHC to the campaign, which Kojo puts towards advertisements on Facebook and Twitter.The social media campaign really seems to strike a chord in the weeks following the floods. It is shared thousands of times, and even promoted by Accra’s municipal authorities. It’s not clear to Kojo whether the campaign will significantly bolster the use of Recycle Accra! — it seems like those sharing his social media posts are chiefly concerned with the content, rather than the business it is also promoting. However, Kojo is very pleased with the campaign’s success — for a meagre amount of money, he was able to use his business to effectively promote environmental responsibility in the city he loves.",
            impact: {
              income: 50,
              resilience: 1,
              environment: 2,
            },
          },
        ]
      },
      9: {
        questionText: "Things seem to be back on track. With dozens of clients using the application regularly in a number of neighborhoods across Accra, RWS is now providing each new client with specialized recycling bins, free of charge. Kojo is now looking to upgrade some of his equipment — a new modem, router, and an external hard drive will go a long way (GHC 250). Before he makes any purchases, however, Kojo receives a phone call from sister. Her three young children are heading back to school next month, and she need money for their school fees (GHC200).",
        answerOptions: [
          {
            text: "Family first. Offer your sister GHC250, to cover school fees and to buy her children some new school clothes.",
            resultText: "Kojo’s sister is extremely grateful, as are his nephew and nieces. He will have to slog through the next few months with his old equipment, but he feels go about fulfilling his brotherly duty.",
            impact: {
              cash: -250,
              resilience: -1,
            },
          },
          {
            text: "Recycle Accra! has almost reached the investment stage of its development, and Kojo doesn’t think he can part with any cash right now. Kojo apologizes to his sister, and promises to cover the fees, plus more, next year. He is sure she will understand.",
            resultText: "Kojo upgrades the equipment in his home office. His sister is extremely  upset that he would prioritize his business over his family.",
            impact: {
              cash: -250,
              resilience: 1,
              assets: 1,
            },
          },
        ]
      },
      10: {
        questionText: "September arrives, and Kojo is determined to further expand the reach of Recycle Accra! He sets his sights on the affluent neighborhood of Dansoman.",
        answerOptions: [
          {
            text: "Invest in a series of targeted advertisements on Facebook, Twitter, and WhatsApp (GHC80). The advertisements offer a promotion — if any business refers another business to sign up for Recycle App, they will receive an extra GHC10 per load for one month.",
            resultText: "The targeted ads generate plenty of likes, plenty of traffic on the Recycle Accra! website, and a significant spike in mobile application downloads. A fews weeks pass, however, and it appears as though the initial spike in traffic does not translate to an equivalent spike in business — indeed, the number of people who actually use the application did not rise significantly. Still, the campaign generated a lot of buzz around Recycle Accra!, the type of buzz that potential investors will certainly appreciate.",
            impact: {
              cash: -80,
              income: 10,
              resilience: 2,
            },
          },
          {
            text: "To save money, Kojo decides to go door-to-door to meet business owners throughout Dansoman in person. It’s a tedious gig, but, hey — there’s nothing more effective than a face-to-face conversation.",
            resultText: "Kojo’s door-to-door undertaking is exhausting, but proves fruitful. He secures a number of high profile clients, including a college and a hotel. Taking out advertisements online or in a newspaper probably would have had a broader reach, but Kojo is confident that his new clients will make good use of the mobile application. Plus, if all goes well, these high profile clients will look good on a investment proposal.",
            impact: {
              income: 100,
              resilience: 2,
            },
          },
        ]
      },
      11: {
        questionText: "One of Kojo’s colleagues from the bootcamp invites him to take part in a hackathon — a weekend event where teams of computer coders, programmers, designers, and social entrepreneurs compete to develop a viable web or mobile based computer program. The hackathon, which will be held at the U-Code computer lab in Accra, will be judged by an esteemed panel of local and international judges. The contest costs GHC350 to enter. The hackathon will be highly competitive, but the winning team will get to work with business experts and a tech incubator to further develop their idea.",
        answerOptions: [
          {
            text: "Sign up! This sounds like a great opportunity for Kojo to meet fellow social entrepreneurs, and to hone his coding skills.",
            resultText: "Though his team does not win the hackathon, Kojo has an excellent time. His team was building an application that helps connect Ghanaians to affordable health care professionals in their area, and Kojo was able to contribute his GIS digital mapping skills. More importantly, the hackathon helped Kojo expand his network — throughout the weekend, he forged a close connection with a terrific web designer, who offered her help to improve the look and interface of Recycle Accra!, and deepened his friendship with the app’s main developer, an experienced coder who has promised to help Kojo with any bugs he many have in the future. Kojo was also able to practice pitching a business idea to investors, and was provided with invaluable feedback and mentorship from the hackathon judges.",
            impact: {
              cash: -350,
              resilience: 3,
            },
          },
          {
            text: "Maybe next time. Cash is low, and Kojo would rather focus on his own application at this time.",
            resultText: "Accra loves hackathons. There will be plenty of opportunities in the future.",
            impact: {
              cash: 0,
            },
          },
        ]
      },
      12: {
        questionText: "Business is doing well. Recycle Accra! has now been downloaded over 200 times, and has over 50 regular users in four different neighborhoods throughout Accra. Kojo’s cash is running low, however, and he doesn’t think he will be able to expand his business much further without investors. However, Kojo is not confident that his business proposal will be able to win over potential investors. In particular, he needs to find an effective way to convey his plan to monetize the application, and generate a more steady flow of revenue.",
        answerOptions: [
          {
            text: "Pay a professional business consultant to improve Kojo’s business proposal, and streamline the plan to generate revenue (GHC500).",
            resultText: "Kojo finds a highly esteemed (and expensive) business consult located in the affluent East Ridge neighborhood of Accra. After waiting in the consultant’s office for many hours, he briefly meets with the consultant, an intimidating older man to whom he hands his business proposal after a brusk meeting. Two days and 500 cedis later, Kojo receives the newly revised business proposal. The consultant has overhauled the business proposal, which now places a heavy emphasis on introducing a monthly pay scale for current clients, and charging new clients a initial download fee. Kojo is a bit overwhelmed by these changes, and is not sure how the consultant determined they were necessary. The proposal, however, appears professional and clearly thought out, and Kojo sees no choice but to trust the consultant.",
            impact: {
              cash: -500,
              resilience: 1,
            },
          },
          {
            text: "Seek advice and mentorship from local business and community development leaders. One of Kojo’s close friends, Donna, is currently enrolled in the EQWIP HUBs entrepreneurship training program. The EQWIP HUB Network, she explains, connects young entrepreneurs to mentors within the community. She thinks they will be able to help him out.",
            resultText: "Kojo meets up with Donna at the EQWIP HUB one day after her training. After a long discussion about his business proposal, one of the staff members offers to connect Kojo to the Executive Director of a major environmental NGO that is based in Accra, but that operates throughout Western Africa. They set up a Skype meeting. The meeting is eye-opening. The Executive Director thinks that Kojo has an excellent product, but  recommends that he focus less on monetizing the application, and more on building partnerships with nonprofit or governmental organizations that have a vested interest in promoting environmental stewardship.",
            impact: {
              resilience: 3,
            },
          },
        ]
      },
            13: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
        ]
      },
      14: {
        questionText: "This is the text from the first question",
        answerOptions: [
          {
            text: "",
            resultText: "",
            impact: {
            },
          },
          {
            text: "",
            resultText: "",
            impact: {
            },
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
            resultText: "Wise choice. It’s much easier to run a successful poultry farm when you have a healthy flock of birds!",
            impact: {
              cash: -200,
              resilience: 2,
            }
          },
          {
            text: "Vaccinations are expensive. Take the risk for now, and reconsider once the flock has grown.",
            resultText: "Might as well hold off until the rainy season, when birds are more likely to get sick.",
            impact: {
              resilience: -2
            }
          },
        ]
      },

      2: {
        questionText: "As Lamisi’s flock grows, so too does the volume of waste that she must deal with. She’s been dumping the waste in a small creek away from her yard, but her neighbors have started to complain — not only do her actions risk contaminating local water resources, but the stench is unbearable!",
        answerOptions: [
          {
            text: "Build an isolated area to dispose the waste material until a specialized compost organization can collect it (GHC250)",
            resultText: "It’s not cheap, but Lamisi feels good about being a responsible steward of the environment. After a few weeks of collecting waste, she decides to reach out to her neighbor and family friend, who rears cattle, so she can learn how to process the waste into manure. He is happy to help. Though it’s a lot of extra work, Lamisi can now sell her manure, or use it to fertilize her family’s vegetable garden. (Cash up)",
            impact: {
              cash: -250,
              income: 370,
              resilience: 2,
              environment: 1
            }
          },
          {
            text: "Continue to dump the waste in the creek, but make an effort to spread it across a larger area.",
            resultText: "Lamisi saved a buck, but at the expense of the natural environment, on which she and her neighbors depend. On hot days, the stench of from her farm is enough to turn away customers. Nor are her neighbors impressed. Lamisi may come to regret this choice yet.",
            impact: {
              environment: -1
            }
          },
        ]
      },

      3: {
        questionText: "Lamisi’s uncle is a bureaucrat based in Accra. He is visiting Tamale, and takes her out to a local restaurant known for its grilled guinea fowl with tuo zaafi. As they dine, she overhears the restaurant manager complaining about an inconsistent supply of poultry. She senses an opportunity.",
        answerOptions: [
          {
            text: "After dinner, approach the manager, and offer to be his poultry supplier. Lamisi is confident in her product, and believes that risk-taking is the key to growth.  She promises to bring him 2 fowls first thing in the morning to try out.",
            resultText: "Though hesitant, the manager offers to give Lamisi a shot — what does he have to lose? After sampling her product, he agrees to do business. He offers to purchase a supply of 12 birds a month at a price of GHC25 each. He praises her confidence and initiative. Before signing the contract, Lamisi agrees to pay for a veterinarian to assess the health of her birds (GHC350), and hires a Motorking driver to make her deliveries once a week (GHC40/month).",
            impact: {
              cash: -350,
              income: 225,
              resilience: 3,
            },
          },
          {
            text: "Don’t approach the manager. It will be embarrassing if she is rejected in front of her uncle. Plus, Lamisi thinks it is unlikely that the restaurant manager will partner with a female poultry farmer.",
            resultText: "No risk, no reward. Lamisi leaves the restaurant with a deflated sense of confidence. At least she didn’t have to face rejection.",
            impact: {
              resilience: -2,
            }
          },
        ]
      },

      5: {
       questionText: "The government announces that it is cracking down on ‘illegal businesses’. The newspapers claim that inspection officers will be issuing fines to businesses that are not properly registered. ",
       answerOptions: [
         {
           text: "Get the paperwork together, and register! To operate legally, Lamisi will need to apply for a Tax Identification Number (GHC25) and register her business as a sole proprietorship (GHC35).",
           resultText: "Lamisi spends most of her weekend sorting her way through the convoluted application paperwork. On Monday, she heads to the registration office, but there is a massive queue. She waits for several hours, but the queue barely moves. She’s one of the only women present in the queue, and a couple of men begin to harass and tease her. Frustrated and tired, Lamisi decides to go home. The next day, determined to properly register her business, Lamisi decides to hire a man that will wait in line at the office on her behalf. This costs her an extra (GHC50), but it does the trick. A few weeks later, her application is accepted.",
            impact: {
              cash: -110,
              resilience: 2,
            }
         },
         {
           text: "The government has been saying this for years! Might as well take the risk.",
           resultText: "Lo and behold, two weeks following the government’s announcement, a inspection officer arrives at Lamisi’s farm, asking for her registration papers and TIN. The fine, he explains, will be very expensive.",
            impact: {
              resilience: -1,
            }
         },
       ]
      },
      7: {
        questionText: "Lamisi’s younger sister has just started Junior High School, and her fees are due. As the older sister, Lamisi is expected to cover the school fees (GHC150).",
        answerOptions: [
          {
            text: "Pay the fees, and wish her luck.",
            resultText: "Though she would have rather used the money to invest in her business, Lamisi is obligated to help out her family — not only did they provide her with the land needed to start her business, but they have also been increasingly supportive of her endeavor in recent weeks.",
            impact: {
            }
          },
          {
            text: "Pay the fees, and offer her an extra GHC100 for school supplies and new clothing.",
            resultText: "Lamisi’s sister is very grateful for the generous gift. Nor does the gesture go unnoticed by the rest of the family, who have been slowly warming to the idea of Lamisi’s business endeavors. As time passes, Lamisi’s siblings and even her parents start offering to help Lamisi around the farm — feeding and caring for the flock, and other simple chores. The support, though modest, comes as a great relief.",
            impact: {
            }
          },
        ]
      },
      9: {
       questionText: "One of the traders in Lamisi’s Susu circle tells her about Esoko — a mobile agribusiness tool that connects smallholder farmers with businesses, governments, and NGOs. Farmers can sign up using their cell phone to access key information about market prices, weather forecasts, agronomic tips, crop calendars, market trends, and more. Esoko just opened a branch in Tamale, the trader explains. Esoko’s Managing Director claims that the branch was established to bridge the gap in information flow between smallholder farmers and key players in the agricultural value chain. This sounds like a great opportunity! Unfortunately, Esoko is designed to work most efficiently with smartphones — Lamisi only has a ‘yam’.",
       answerOptions: [
         {
           text: "Buy a cell phone and data package, and sign up for Esoko!  (GHC500 for a new phone, plus GHC20/month for data). ",
           resultText: "What a difference! Corresponding with the Esoko experts provides Lamisi with the confidence to make changes to her business model and the way that she manages her farm. She develops a better system for tracking changes in the market and setting your prices, and a new feed mix that makes use of low-cost substitutes. Esoko also offers tips on how to better clean and maintain the feeding and watering troughs for your birds. Investing in a smartphone has also made it much easier to connect with her current clients and advertise her business using the digital communications tool WhatsApp.",
            impact: {
              cash: -500,
              income: 200,
              resilience: 3,
              environment: 1,
              assets: 2,
            }
         },
         {
           text: "Save the cash. Lamisi has contacts in the marketplace that provide information about prices and market trends. Plus, she grew up on a farm! She can take care of her birds without the help of experts in an office far away.",
           resultText: "Maybe down the road, when Lamisi has more cash saved, she will consider buying a cell phone. Back to work.",
            impact: {
              cash: 0,
            }
         },
       ]
      },
      10: {
      questionText: "The rainy season is ending, and the Harmattan — a dry and dusty northeasterly trade wind that blows from the Sahara over West Africa from December to March — is on its way. The hot, dry weather will make it difficult for Lamisi’s birds to thrive, and the farm’s production will likely suffer.  Lamisi begins to worry about the sustainability of her business. The market has become saturated — services like Esoko have made it easier for new entrepreneurs to enter the market, further eating into her demand.  Lamisi must find a new way to innovate — to bring something new or different to the table. She reaches out to customers, restaurant owners, and wholesalers, in order to find out how to better improve her business.  (Click next) Lamisi’s research produces some interesting findings. First, she learns that most restaurants, hotels, and households in urban areas in Northern Ghana rely on frozen poultry products imported from the South or from overseas — these products are typically cheaper, pre-cut, processed, and ready to use.  However, customers and restaurants also reported a preference for local, fresh poultry, even if it is a bit more expensive. Many customers believe that fresh poultry is healthier than the frozen kind. However, frozen poultry is considered more convenient and more reliable. Plus, customers do not want to kill or prepare their own birds.  (Click next) Lamisi comes up with two ways to make use of these findings:",
      answerOptions: [
        {
          text: "Rebrand the business: “Lamisi’s Free-Range Farm: the fresh and healthy choice for poultry in Tamale.” Improve the quality of the product, and increase the price.",
          resultText: "For this scheme to work, Lamisi will need to produce goods that are as healthy and high quality as advertised! After consulting with some more experienced farmers and doing some research online, she replaces many of the low-cost ingredients in her feed mix with higher-quality, organic products, and also begins to add herbal supplements to her birds’ water supply. (GHC150 per month). She also further expands her pen to create more space for her birds to roam (GHC150) Lamisi will eventually have to raise her prices, but not just yet.",
            impact: {
              cash: -150,
              income: -150,
              resilience: 3,
              environment: 1,
              assets: 2,
            }
        },
        {
          text: "Reach out to local restaurants or hotels, and offer to supply, prepare, and deliver a regular shipment of fresh eggs and guinea fowl.  Focus on reliability and customer convenience, in order to better compete with the suppliers of frozen chicken.",
          resultText: "Lamisi reaches out to three local restaurants, and offers to supply them with a regular shipment of fresh eggs and guinea fowl.  The first restaurateur she speaks to turns her down. He subtly hints that he does not want to rely on a young woman to supply his poultry. However, Lamisi does not give up. She brings a free sample of her products to the next two restaurateurs she visits, both of which agree to a two-week trial! In order to supply these restaurants, Lamisi will need to purchase new equipment and build an isolated area (GHC200) in order to properly kill and dress the birds.",
            impact: {
              cash: -200,
              income: 200,
              resilience: 2,
              environment: -1,
            }
        },
      ]
      },
      13: {
        questionText: "Six months have passed, and it’s Lamisi’s turn once again to access the cash from her Susu circle (GHC400). Now that she has enough cash, she purchases a round of vaccinations for her a flock, which should last her through the coming season (GHC200).  (Click Next) Lamisi’s cousin, who is getting married next week, drops by the farm and asks her to provide a half dozen birds for the occasion.  She is happy to oblige, and offers the half-dozen birds for a price of GHC150. Her cousin gets upset, and claims that he is offended that she would try to charge a family member, as if he was just another customer. He re-asserts that she should give the birds to him for free.",
        answerOptions: [
          {
            text: "Let him take the birds for free. It’s best to avoid any more family tension.",
            resultText: "That stings, but Lamisi didn’t think she had a choice. Her family already disapproves of her business, and she doesn’t want to create any more bad blood.",
            impact: {
              cash: -150,
              resilience: -1,
              debt: 400,
              debtPayments: 80,
            }
          },
          {
            text: "Call his bluff, and offer to provide the half-dozen birds for a discounted price of GHC100.",
            resultText: "Lamisi’s cousin shakes off her counter-offer. He takes two of the live birds, and leaves. He claims that he will give her money for them next time he see her, but this seems unlikely. Lamisi’s pride and self-esteem are hurt by this unpleasant and costly encounter.",
            impact: {
              cash: -50,
              resilience: -2,
              debt: 400,
              debtPayments: 80,
            }
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
