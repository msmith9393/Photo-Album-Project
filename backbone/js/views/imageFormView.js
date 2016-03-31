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
    this.$el.children().detach();
    return this.$el.append('<form id="submit">\
      <label>Image Link: <input type="text" /></label>\
      <label class="img-form">Image Title: <input class="img-title" type="text" /></label>\
      <input type="submit" value="Save Photo"></form>')
      .append('Rating: <select class="drop-down">\
        <option value=1>1</option>\
        <option value=2>2</option>\
        <option value=3>3</option>\
        <option value=4>4</option>\
        <option value=5>5</option>\
        </select>');
  }
  
});






















