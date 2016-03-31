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

<<<<<<< HEAD
||||||| merged common ancestors
    params.imageCollection.on('addImage', function(newImageCollection) {
      // this.set('currentImage', image);
      this.set('currentCollection', newImageCollection);
    }, this);
=======
    params.imageCollection.on('add', function() {
      // this.set('currentCollection', this.get('currentCollection'));
      console.log('CURRENTCOLLECTION AFTER', this.get('currentCollection'))
    }, this);
>>>>>>> 203898d4e10597a32d9d98e4315ead9bc6c0b782
  }

});