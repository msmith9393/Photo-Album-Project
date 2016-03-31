var ImageFormView = Backbone.View.extend({

  className: 'new-image-form',

  initialize: function() {
    this.render();
  },

  events: {
    'submit form': 'handleSubmit'
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var imageTitle = $(e.target.children[1].children[0]).val();
    var imageLink = $(e.target.children[0].children[0]).val();
    var rating = $(e.target).siblings().val();
    var imageToAdd = new Image();
    imageToAdd.set('title', imageTitle);
    imageToAdd.set('url', imageLink);
    imageToAdd.set('rating', rating);
    this.collection.add(imageToAdd);
  },

  render: function() {

    var options = ['select', 1, 2, 3, 4, 5];
    
    var dropdown = $('<select>').append(options.map(function(value) {
        var val = '<option value="'+value+'">'+value+'</option>';
        if (value === 'select') {
          val = '<option selected value="1">'+value+'</option>'
        }
        return val;
    }));

    this.$el.children().detach();
    return this.$el.append('<form id="submit">\
      <label>Image Link: <input type="text" /></label>\
      <label class="img-form">Image Title: <input class="img-title" type="text" /></label>\
      <input type="submit" value="Save Photo"></form>')
      .append(dropdown);
  }

});






















