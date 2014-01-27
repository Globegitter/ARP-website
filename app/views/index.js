export default Ember.View.extend({
  showConcept: false,
  actions: {
    toggle: function(){
      //window.console('!!!!!!');
      this.toggleProperty('showConcept');  
    }
  }
});
