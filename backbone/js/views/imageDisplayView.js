var ImageDisplayView = Backbone.View.extend({

  className: 'currentImage',

  initialize: function() {
    // console.log('this.model in backbone view', this.model.attributes);
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },

  // setImage: function(image) {
  //   this.model = image;
  //   this.render();
  // },

  render: function() {
    var image = $('<img class="currentImage" />').attr('src', this.model ? this.model.get('image') : '');
    return this.$el.append(image)
      .append($('<p class="title">' + this.model.get('title') + '</p>'))
      .append($('<p class="rating">Rating: ' + this.model.get('rating') + '</p>'));
  }

});























