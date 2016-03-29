var ImageDisplayView = Backbone.View.extend({

  className: 'currentImage',

  initialize: function() {
    console.log('CURRENT IMAGE in ImageDisplayView view', this.model);
    this.render();
  },

  setImage: function(image) {
    console.log('IMAGE', image);
    this.model = image;
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    var image = $('<img class="currentImage" />').attr('src', this.model.attributes.url);
    return this.$el.append(image)
      .append($('<p><span class="title">' + this.model.get('title') + ':  </span><span class="rating">' + this.model.get('rating') + ' out of 5</span></p>'))
  }

});























