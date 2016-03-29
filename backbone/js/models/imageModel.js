var Image = Backbone.Model.extend({
  
  displayImage: function() {
    this.trigger('displayImage', this);
  },

  addImage: function() {
    console.log('ADD IMAGE INSIDE IMAGE');
    this.trigger('addImage', this);
  }

});