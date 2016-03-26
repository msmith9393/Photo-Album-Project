var ImageDisplayView = Backbone.View.extend({

  className: 'currentImage',

  el: '<img />',

  initialize: function() {

  },

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});