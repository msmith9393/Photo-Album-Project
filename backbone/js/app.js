var imageData = [
  {
    title: 'Fish',
    url: 'http://tinyurl.com/n4vgcl5',
    rating: 5
  },
  {
    title: 'Octopus',
    url: 'http://tinyurl.com/kxd7cuu',
    rating: 4
  },
  {
    title: 'Ocean',
    url: 'http://tinyurl.com/zgs7z2s',
    rating: 3
  }
];

// collection of images, each image is a model
var ImageDataCollection = new Backbone.Collection(imageData, { model: Image });
// model representing entire app, takes collection of images
var AppModel = new AppModel({ imageCollection: ImageDataCollection })
// view of entire app has access to AppModel
var AppView = new AppView({ model: AppModel });

$('#container').append(AppView.$el);