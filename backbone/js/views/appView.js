var AppView = Backbone.View.extend({
  
  className: 'app',

  initialize: function() {


    this.imageTableView = new ImageTableView({
      collection: this.model.get('imageCollection')
    });

    this.imageDisplayView = new ImageDisplayView({
      model: this.model.get('currentImage')
    });

    this.model.on('change:currentImage', function(model) {
      this.imageDisplayView.setImage(model.get('currentImage'));
    }, this);

  },


  render() {
    // this.$el.children().detach();
    return this.$el.html([
      this.imageTableView.$el,
      this.imageDisplayView.$el
    ]);
  }
});



