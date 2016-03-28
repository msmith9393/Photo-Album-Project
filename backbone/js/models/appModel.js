// Defines a backbone model class for the whole app
// sets currentImage
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentImage', params.imageCollection.models[0]);
    // console.log('currentImage in AppModel:', this.get('currentImage'));
    // console.log('params.imageCollection', params.imageCollection);

    params.imageCollection.on('displayImage', function(image) {
      // console.log('Change current image in appmodel')
      this.set('currentImage', image);
    }, this);
  }

});