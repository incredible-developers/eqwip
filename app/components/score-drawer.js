import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["flexBlock flexVertical"],
  character: null,
  month: null,
  answers: null,
  currentDialogText: null,
  monthName: Ember.computed('month', 'character', function() {
    if (this.get('character') == 'Lamisi') {
      return this.get('lamisiMonths')[this.get('month') - 1]
    } else {
      return this.get('normalMonths')[this.get('month') - 1]
    }
  }),
  lamisiMonths: [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March'
  ],
  normalMonths: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],

  environmentMax: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return 3
    };

    if (character == 'Lamisi') {
      return 3
    };

    if (character == 'Kojo') {
      return 4
    };
  }),

  environmentMin: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return -3
    };

    if (character == 'Lamisi') {
      return -3
    };

    if (character == 'Kojo') {
      return -4
    };
  }),


  resilienceMin: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return 0
    };

    if (character == 'Lamisi') {
      return -5
    };

    if (character == 'Kojo') {
      return 0
    };
  }),

  resilienceMax: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return 19
    };

    if (character == 'Lamisi') {
      return 16
    };

    if (character == 'Kojo') {
      return 19
    };
  }),

  assetsMin: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return 0
    };

    if (character == 'Lamisi') {
      return 0
    };

    if (character == 'Kojo') {
      return 0
    };
  }),

  assetsMax: Ember.computed('character', function() {
    var character = this.get('character')

    if (character == 'Zara') {
      return 9
    };

    if (character == 'Lamisi') {
      return 4
    };

    if (character == 'Kojo') {
      return 4
    };
  }),

  setCurrentDialogText(dialogType) {
    if (dialogType == 'environment') {
      this.set('currentDialogText',
               'The environmental impact gauge measures the impact of your business on the natural environment that it operates in.'
              )
    } else if (dialogType == 'resilience') {
      this.set('currentDialogText',
               'The resilience gauge measures your ability as an entrepreneur to adapt to changing circumstances and to overcome unexpected challenges. Your resiliency will also impact the likelihood that you will be able to sustain and grow your business over time.'
              )
    } else if (dialogType == 'assets') {
      this.set('currentDialogText',
               'The assets gauge measures your non-financial assets. This includes things like electronics, vehicles, equipment, stored goods, etc.'
              )
    } else if (dialogType == 'cash') {
      this.set('currentDialogText', null)
      this.set('showCashChart', true)
    }
  },

  actions: {
    renderDialog(dialogType) {
      this.setCurrentDialogText(dialogType)
      this.set('isShowingModal', true)
    },
    removeDialog() {
      this.set('isShowingModal', false)
      this.setCurrentDialogText(null)
    }
  }
});
