var Image = Backbone.Model.extend({
  
  displayImage: function() {
    this.trigger('displayImage', this);
  },

  defaults: {
    title: '',
    url: '',
    rating: ''
  }

});