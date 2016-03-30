var AppView = Backbone.View.extend({
  
  className: 'app',

  initialize: function() {

    this.imageFormView = new ImageFormView({collection: this.model.get('currentCollection')});

    this.imageTableView = new ImageTableView({
      collection: this.model.get('currentCollection')
    });

    this.imageDisplayView = new ImageDisplayView({
      model: this.model.get('currentImage')
    });

    this.model.on('change:currentImage', function(model) {
      this.imageDisplayView.setImage(model.get('currentImage'));
    }, this);

    this.model.on('change:currentCollection', function(collection) {
      console.log('CHANGING CURRENT COLLECTION IN APPVIEW');
      this.$el.empty();
      this.render();
    }, this);

    this.render();
  },


  render() {
    this.$el.children().detach();
    return this.$el.html([
      this.imageFormView.$el,
      this.imageTableView.$el,
      this.imageDisplayView.$el
    ]);
  }
});



