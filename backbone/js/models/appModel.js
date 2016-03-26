// Defines a backbone model class for the whole app
// sets currentImage to a new Image
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentImage', new Image());
  
    params.imageCollection.on('displayImage', function(image) {
      this.set('currentImage', image);
    }, this);
  }

});