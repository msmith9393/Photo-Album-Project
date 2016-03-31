var ImageDisplayView = Backbone.View.extend({

  className: 'currentImage',

  initialize: function() {
    this.render();
  },

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  events: {
    change: 'setRating'
  },

  setRating: function() {
    var rating = $("select option:selected").text().slice(-1);
    this.model.set('rating', rating);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    var select = this.model.get('rating');
    var options = [1, 2, 3, 4, 5];
    
    var dropdown = ($('<select>')).append(options.map(function(value) {
        var val = '<option value="' + value + '">' + value + '</option>';
        if (value === 1) {
          val = '<option selected value="' + value + '">' + value + '</option>'
        }
        return val;
    }));

    var image = $('<img class="currentImage" />').attr('src', this.model.attributes.url);
    this.$el.append(image)
      .append($('<p><span class="title">' + this.model.get('title') + ':  </span><span class="rating">Rating: ' + this.model.get('rating') + ' out of 5</span></p>')).append($('<span>Change Rating: </span>')).append(dropdown);

    return this;
  }

});























