var ImageDisplayView = Backbone.View.extend({

  className: 'currentImage',

  initialize: function() {
    this.render();
  },

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    var image = $('<img class="currentImage" />').attr('src', this.model.attributes.url);
    this.$el.append(image)
      .append($('<p><span class="title">' + this.model.get('title') + ':  </span><span class="rating">' + this.model.get('rating') + ' out of 5</span></p>'))
    return this;
  }

});























