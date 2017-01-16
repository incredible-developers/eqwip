import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  susuRegex: /susu collector/i ,
  guineaRegex: /guinea fowl/i ,
  eqwipRegex: /eqwip hubs/i ,
  travelRegex: /traveling around Northern Ghana/i ,
  whatsAppRegex: /WhatsApp/i ,
  eqwipComputerRegex: /EQWIP HUB computer lab/i ,
  goroRegex: /Goro Boys/i,
  norseRegex: /NORSAAC/,
  susuIndicator: "#SUSU#",
  investRegex: /investor deposits were being diverted into the bank accounts of firm managers/,
  renderDialog: null,

  partials: Ember.computed('inputText', function(){
    let inputText = this.get('inputText');

    if(inputText == null) {
      return [];
    }


    inputText = this.addSusuMarkdown(inputText);

    let partialStrings = inputText.split(this.get('susuIndicator'));

    partialStrings = partialStrings.map((string) => {
      return string.split("#GUINEA#")
    })

    var flattened = [].concat.apply([], partialStrings);

    flattened = flattened.map((string) => {
      return string.split("#EQWIP#")
    })

    flattened = [].concat.apply([], flattened);

    flattened = flattened.map((string) => {
      return string.split("#INVEST#")
    })

    flattened = [].concat.apply([], flattened);

    flattened = flattened.map((string) => {
      return string.split("#COMPUTER#")
    })

    flattened = [].concat.apply([], flattened);

    flattened = flattened.map((string) => {
      return string.split("#TRAVEL#")
    })

    flattened = [].concat.apply([], flattened);

    flattened = flattened.map((string) => {
      return string.split("#WHATSAPP#")
    })

    flattened = [].concat.apply([], flattened);

    flattened = flattened.map((string) => {
      return string.split("#GORO#")
    })

    flattened = [].concat.apply([], flattened);

    flattened = flattened.map((string) => {
      return string.split("#NORSE#")
    })

    flattened = [].concat.apply([], flattened);

    return flattened.map((string) => {
      return {
        content: string,
        isSusu: this.get('susuRegex').test(string),
        isGuinea: this.get('guineaRegex').test(string),
        isEqwip: this.get('eqwipRegex').test(string),
        isComputer: this.get('eqwipComputerRegex').test(string),
        isTravel: this.get('travelRegex').test(string),
        isInvest: this.get('investRegex').test(string),
        isWhatsApp: this.get('whatsAppRegex').test(string),
        isGoro: this.get('goroRegex').test(string),
        isNorse: this.get('norseRegex').test(string),
        isLinkable: this.get('susuRegex').test(string) ||
          this.get('guineaRegex').test(string) ||
          this.get('eqwipRegex').test(string) ||
          this.get('eqwipComputerRegex').test(string) ||
          this.get('travelRegex').test(string) ||
          this.get('whatsAppRegex').test(string) ||
          this.get('goroRegex').test(string) ||
          this.get('norseRegex').test(string) ||
          this.get('investRegex').test(string)
      };
    });
  }),

  addSusuMarkdown: function (text) {
    if (!(text.constructor === String)) {
      text = text.string
    }
    text = text.replace(this.get('susuRegex'), function(s) {
      return "#SUSU#" + s + "#SUSU#";
    });

    text = text.replace(this.get('guineaRegex'), function(s) {
      return "#GUINEA#" + s + "#GUINEA#";
    });

    text = text.replace(this.get('eqwipComputerRegex'), function(s) {
      return "#COMPUTER#" + s + "#COMPUTER#";
    });

    text = text.replace(this.get('eqwipRegex'), function(s) {
      return "#EQWIP#" + s + "#EQWIP#";
    });

    text = text.replace(this.get('investRegex'), function(s) {
      return "#INVEST#" + s + "#INVEST#";
    });

    text = text.replace(this.get('travelRegex'), function(s) {
      return "#TRAVEL#" + s + "#TRAVEL#";
    });

    text = text.replace(this.get('whatsAppRegex'), function(s) {
      return "#WHATSAPP#" + s + "#WHATSAPP#";
    });

    text = text.replace(this.get('goroRegex'), function(s) {
      return "#GORO#" + s + "#GORO#";
    });

    text = text.replace(this.get('norseRegex'), function(s) {
      return "#NORSE#" + s + "#NORSE#";
    });

    return text
  },

  actions: {
    renderModal(whichModal) {
      this.get('renderDialog')(whichModal)
    }
  }
});
