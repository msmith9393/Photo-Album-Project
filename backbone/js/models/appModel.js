// Defines a backbone model class for the whole app
// sets currentImage
var AppModel = Backbone.Model.extend({

  initialize: function(params) {

    this.set('currentImage', params.imageCollection.models[0]);
    this.set('currentCollection', params.imageCollection);
    console.log('CURRENTCOLLECTION BEFORE', this.get('currentCollection'))

    params.imageCollection.on('displayImage', function(image) {
      this.set('currentImage', image);
    }, this);

  }

});