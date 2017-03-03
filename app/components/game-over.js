import Ember from 'ember';

export default Ember.Component.extend({
  character: null,
  assetsArray: [],
  classNames: ["flexBlock flexVertical"],
  isShowingGetInvolved: false,

  actions: {
    howToGetInvolved: function(){
      this.toggleProperty('isShowingGetInvolved')
    }
  },

  environmentText: Ember.computed('character', function() {
    if (this.get('environmentLow')) {
      return this.get('environmentLowText')
    }

    if (this.get('environmentMedium')) {
      return this.get('environmentMediumText')
    }

    if (this.get('environmentHigh')) {
      return this.get('environmentHighText')
    }
  }),

  environmentLowText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return 'Zara’s beauty bar has had a negative impact on the environment. Her students use an excessive amount of water, and are not trained to properly dispose of their chemical waste. Increasingly, businesses are expected to be responsible stewards of the natural environment. Continued disregard may undermine the salon’s sustainability.'
    }
    if (character == 'Lamisi') {
      return 'Lamisi’s poultry farm has had a negative impact on the environment. Increasingly, businesses are expected to be responsible stewards of the natural environment. Continued disregard may undermine her business’s sustainability.'
    };
    if (character == 'Kojo') {
      return 'Despite the fact that Kojo’s business was designed to facilitate responsible waste management, Recycle Accra! has not had a very positive environmental impact. Kojo may need to consider a new approach if he wants to continue marketing his business as a ‘social enterprise’.'
    };
  }),

  environmentMediumText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return 'Zara’s business has not had a significant impact on the environment, but there is still lots of room for improvement. A beauty bar can always find ways to conserve more water or better dispose of their chemical waste. Zara may also consider using more organic products. As a social enterprise designed to facilitate and encourage responsible waste management, Recycle Accra! has had a clear positive impact on the environment. Kojo should continue to search for new ways to help his clients to improve their environmental footprint, and to raise awareness about waste management generally.'
    }
    if (character == 'Lamisi') {
      return 'Lamisi’s business has not had a signficant impact on the environment, but there is still lots of room for improvement. Increasingly, businesses are expected to be responsible stewards of the natural environment. Lamisi should make an effort to better incorporate environmental impact into her decision-making process.'
    };
    if (character == 'Kojo') {
      return 'As a social enterprise designed to facilitate and encourage responsible waste management, Recycle Accra! has had a clear positive impact on the environment. Kojo should continue to search for new ways to help his clients to improve their environmental footprint, and to raise awareness about waste management generally.'
    };
  }),

  environmentHighText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return 'Zara’s beauty bar, which sells organic beauty products and offers environmental training sessions to its students, has a reputation among customers for being environmentally responsible. This reputation has attracted new customers, and contributed to the business’s sustainability.'
    }
    if (character == 'Lamisi') {
      return 'As an entrepreneur, Lamisi has proven to be a responsible steward of the environment — and her customers have taken notice. Having a reputation for being environmentally responsible is likely to strengthen the sustainability of Lamisi’s business.'
    };
    if (character == 'Kojo') {
      return 'As a social enterprise designed to facilitate and encourage responsible waste management, Recycle Accra! has had a clear positive impact on the environment. Kojo has demonstrated an impressive dedication to keeping the environment at the center of his decision-making process. To remain successful, he should continue to search for new ways to help his clients to improve their environmental footprint, and to raise awareness about waste management generally.'
    };
  }),

  resilienceText: Ember.computed('character', function() {
    if (this.get('resilienceLow')) {
      return this.get('resilienceLowText')
    }

    if (this.get('resilienceMedium')) {
      return this.get('resilienceMediumText')
    }

    if (this.get('resilienceHigh')) {
      return this.get('resilienceHighText')
    }
  }),

  resilienceLowText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return 'Zara’s business is not very resilient, and will have trouble remaining sustainable in a highly competitive market. Though she has a decent number of loyal customers, she will need to find a way to attract more students for her vocational training program if she wants her business to stay afloat. She will need to focus on innovation, in order set herself apart from her competitors. She should also try to expand her network, or seek out support from mentors or business leaders in her community.'
    }
    if (character == 'Lamisi') {
      return 'Lamisi’s business is not very resilient, and will have trouble remaining sustainable in a highly competitive market. She should consider ways to innovate her business, in order set herself apart from her competitors. She should also try to expand her network, or seek out support from mentors or business leaders in her community. '
    };
    if (character == 'Kojo') {
      return 'Though it’s off to a good start, Recycle Accra! is not very resilient, and will have trouble remaining sustainable in an unpredictable and competitive market. Kojo needs continue to innovate to find a way to retain his current customers, and better branch out to new ones.'
    };
  }),

  resilienceMediumText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return 'Zara’s business is somewhat resilient. Her beauty bar has a great reputation, dozens of loyal customers, and a fully booked training course planned for next month. However, this a highly competitive market, and there is still much room for improvement. In particular, she needs to determine a way to ensure a steady flow of new students for her vocational training program, is she wants her business to be sustainable. Zara should continue to innovate, and market her vocational training program in creative ways. She should also consider expanding her business network, and further incorporating technology into her business model.'
    }
    if (character == 'Lamisi') {
      return 'Lamisi’s business is somewhat resilient. She has a well-developed brand, dozens of loyal customers, and she produces a quality product. However, it’s a highly competitive market, and there is still much room for improvement. Lamisi should continue to innovate, and market her products in creative ways. She should also consider expanding her business network, and further incorporating technology into her business model.'
    };
    if (character == 'Kojo') {
      return 'Recycle Accra! is somewhat resilient, though there is much room to improve in such an unpredictable market. Though he has developed a large and wide-ranging clientele, he will need to remain innovative in order to stave off competitors and continue to grow. Expanding his business and partner network will greatly contribute to his business’s resilience and sustainability. He should also continue to hone his coding skills, and work to improve the way he administers his business.'
    };
  }),

  resilienceHighText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return ' Zara’s business is very resilient. Her beauty bar has a great reputation, dozens of loyal customers, and a number of fully booked training courses planned for the coming months. Her first year in business has equipped her with a unique set of skills, and a willingness to innovate that will help her to succeed in a competitive market and sustain her business into the future.'
    }
    if (character == 'Lamisi') {
      return 'Lamisi’s business is very resilient. She has a unique, well-developed brand, dozens of loyal customers, and she produces a quality product. Her first year in business has equipped her with invaluable experiences and a set of skills that will help her to succeed in a competitive market, and sustain her business into the future.'
    };
    if (character == 'Kojo') {
      return 'Recycle Accra! is very resilient, though there is always room for improvement in such an unpredictable market. In particular, he must work to ensure that his large and wide-ranging clientele are satisfied with his service, and demonstrate a willingness to adapt and innovate according to their needs. In order to strengthen the resilience of his business further, Kojo should focus on expanding his network and improving the way he administers his business. In order to stay competitive, he should hone is coding skills and experiment with new technology.'
    };
  }),

  cashText: Ember.computed('character', function() {
    if (this.get('cashLow')) {
      return this.get('cashLowText')
    }

    if (this.get('cashMedium')) {
      return this.get('cashMediumText')
    }

    if (this.get('cashHigh')) {
      return this.get('cashHighText')
    }
  }),

  cashLowText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return 'Next year’s rent is nearly due, and Zara does not have very much cash. This will make it difficult for her to grow her business, and will limit her ability to implement her newly revised business model. She should consider looking for alternative sources of credit, and cutting down on unnecessary expenses.'
    }
    if (character == 'Lamisi') {
      return 'Lamisi does not have very much cash. This will make it difficult for her to grow her business, and will limit her ability to innovate. She should consider looking for alternative sources of credit, and cutting down on unnecessary expenses.'
    };
    if (character == 'Kojo') {
      return 'Kojo does not have very much cash. This will make it difficult for him to further expand his business. If Kojo is not able to secure further investment for Recycle Accra!, he should consider looking for alternative sources of credit with which to further innovate. '
    };
  }),

  cashMediumText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return 'Zara has amassed a considerable amount of cash, though much it will have to be put towards next year’s rent. What cash she has left after rent, she will need to invest back into her business in order to make sure that her newly revised business model will be both successful and sustainable.'
    }
    if (character == 'Lamisi') {
      return 'Lamisi has amassed a considerable amount of cash. However, her business is still new, and vulnerable to unexpected changes in the market. She should consider investing some of her capital back into her business in order to make it more resilient. For example, she may invest in technology, advertising, market research, or efforts to innovate her business model.'
    };
    if (character == 'Kojo') {
      return 'Kojo now has a sizeable amount of cash, much of which he should invest back into his company immediately. In order to make Recycle Accra! more sustainable, he may consider hiring staff, purchasing new equipment, or searching for new marketing opportunities.'
    };
  }),

  cashHighText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return 'Zara has amassed an impressive amount of of cash. Once next year’s rent is paid, she should be able to put a considerable amount of cash back into her business — both to fund her newly revised business model, and to invest in new equipment and furniture for her salon. Zara’s liquidity should allow her to further innovate as the new year rolls on.'
    }
    if (character == 'Lamisi') {
      return 'Lamisi has amassed an impressive amount of of cash. She should look for new and innovated ways to invest this capital back into her business, in order to set herself apart from her competition.'
    };
    if (character == 'Kojo') {
      return 'Kojo now has a tonne of cash. He would be wise to work with his investors or his mentors to carefully manage the money, and to make sure that it is used to effectively grow and sustain his business.'
    };
  }),

  cashLow: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('cash') <= 8000
    };

    if (character == 'Lamisi') {
      return this.get('cash') <= 7000
    };

    if (character == 'Kojo') {
      return this.get('cash') <= 12000
    };
  }),

  cashMedium: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return !(this.get('cashLow') || this.get('cashHigh'))
    };

    if (character == 'Lamisi') {
      return !(this.get('cashLow') || this.get('cashHigh'))
    };

    if (character == 'Kojo') {
      return !(this.get('cashLow') || this.get('cashHigh'))
    };
  }),

  cashHigh: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('cash') >= 13000
    };

    if (character == 'Lamisi') {
      return this.get('cash') >= 10000
    };

    if (character == 'Kojo') {
      return this.get('cash') >= 25000
    };
  }),

  resilienceHigh: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('resilience') >= 18
    };

    if (character == 'Lamisi') {
      return this.get('resilience') >= 15
    };

    if (character == 'Kojo') {
      return this.get('resilience') >= 18
    };
  }),

  resilienceMedium: Ember.computed('character', function() {
    return !(this.get('resilienceHigh') || this.get('resilienceLow'))
  }),

  resilienceLow: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('resilience') <= 7
    };

    if (character == 'Lamisi') {
      return this.get('resilience') <= 6
    };

    if (character == 'Kojo') {
      return this.get('resilience') <= 10
    };
  }),

  environmentHigh: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('environment') >= 2
    };

    if (character == 'Lamisi') {
      return this.get('environment') >= 2
    };

    if (character == 'Kojo') {
      return this.get('environment') >= 4
    };
  }),

  environmentMedium: Ember.computed('character', function() {
    var character = this.get('character')
    return !(this.get('environmentHigh') || this.get('environmentLow'))
  }),

  environmentLow: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('environment') <= 0
    };

    if (character == 'Lamisi') {
      return this.get('environment') <= -2
    };

    if (character == 'Kojo') {
      return false
    };
  }),

  assetsHigh: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('assets') >= 7
    };

    if (character == 'Lamisi') {
      return this.get('assets') >= 3
    };

    if (character == 'Kojo') {
      return this.get('assets') >= 3
    };
  }),

  assetsLow: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return this.get('assets') <= 3
    };

    if (character == 'Lamisi') {
      return this.get('assets') < 2
    };

    if (character == 'Kojo') {
      return this.get('assets') <= 2
    };
  }),

  assetsMedium: Ember.computed('character', function() {
    var character = this.get('character')
    return !(this.get('assetsHigh') || this.get('assetsLow'))
  }),

  assetsText: Ember.computed('character', function() {
    if (this.get('assetsLow') || this.get('assetsMedium')) {
      return this.get('assetsLowText')
    }

    if (this.get('assetsHigh')) {
      return this.get('assetsHighText')
    }
  }),

  assetsHighText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return 'In addition to cash, Zara has a great number of non-financial assets, including: ' + this.get('assetsArrayText') + ". These assets have significantly contributed to the sustainability of her business."
    }
    if (character == 'Lamisi') {
      return 'In addition to cash, Lamisi has a great number of non-financial assets, including: ' + this.get('assetsArrayText') + ". These assets have significantly contributed to the sustainability of Lamisi’s business."
    };
    if (character == 'Kojo') {
      return 'In addition to cash, Kojo has a great number of non-financial assets, including: '  + this.get('assetsArrayText') + ". These assets have significantly contributed to the sustainability of Recycle Accra!"
    };
  }),

  assetsLowText: Ember.computed('character', function() {
    var character = this.get('character')
    if (character == 'Zara') {
      return 'In addition to cash, Zara has a number of non-financial assets, including: ' + this.get('assetsArrayText') + ". These assets have significantly contributed to the sustainability of her business."
    }
    if (character == 'Lamisi') {
      return 'In addition to cash, Lamisi has a number of non-financial assets, including: ' + this.get('assetsArrayText') + ". These assets have significantly contributed to the sustainability of Lamisi’s business."
    };
    if (character == 'Kojo') {
      return 'In addition to cash, Kojo has a number of non-financial assets, including: ' + this.get('assetsArrayText') + ". These assets have significantly contributed to the sustainability of Recycle Accra!"
    };
  }),

  assetsArrayText: Ember.computed('assetsArray', function() {
    var a = this.get('assetsArray')
    return [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(a.length < 2 ? '' : ' and ');
  }),
});
