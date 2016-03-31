var Image = Backbone.Model.extend({
  
  displayImage: function() {
    this.trigger('displayImage', this);
<<<<<<< HEAD
||||||| merged common ancestors
  },

  addImage: function() {
    console.log('ADD IMAGE INSIDE IMAGE');
    this.trigger('addImage', this);
=======
  },

  defaults: {
    title: '',
    url: '',
    rating: ''
>>>>>>> 203898d4e10597a32d9d98e4315ead9bc6c0b782
  }

});