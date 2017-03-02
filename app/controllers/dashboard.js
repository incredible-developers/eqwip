import Ember from 'ember';

export default Ember.Controller.extend({


  isShowingHowToPlayModal : false,
  isShowingAboutGhana: false,
  isShowingAboutUs: false,

  actions: {
    howToPlayDialog: function(){
      this.toggleProperty('isShowingHowToPlayModal');
    },
    aboutGhana: function(){
      this.toggleProperty('isShowingAboutGhana');
    },
    aboutUs: function(){
      this.toggleProperty('isShowingAboutUs');
    }
  }
});
