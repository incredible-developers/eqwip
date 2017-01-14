import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  susuRegex: /susu/i ,
  susuIndicator: "#SUSU#",

  partials: Ember.computed('inputText', function(){
    let inputText = this.get('inputText');

    if(inputText == null) {
      return [];
    }


    inputText = this.addSusuMarkdown(inputText);

    let partialStrings = inputText.split(this.get('susuIndicator'));

    return partialStrings.map((string) => {
      return {
        content: string,
        isSusu: this.get('susuRegex').test(string),
      };
    });
  }),

  addSusuMarkdown: function (text) {
    return text.string.replace(this.get('susuRegex'), function(s) {
      return "#SUSU#" + s + "#SUSU#";
    });
  }
});
