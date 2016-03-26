var imageData = [
  {
    title: 'Dog',
    image: 'http://tinyurl.com/n4vgcl5',
    rating: 'Dog Picture - 5'
  },
  {
    title: 'Cat',
    image: 'http://tinyurl.com/kxd7cuu',
    rating: 'Cat Picture - 6'
  },
  {
    title: 'Mountains',
    image: 'http://tinyurl.com/zgs7z2s',
    rating: 'Mountain Picture - 7'
  },
  {
    title: 'Ocean',
    image: 'http://tinyurl.com/zgs7z2s',
    rating: 'Ocean Picture - 8'
  }
];

// collection of images, each image is a model
var ImageDataCollection = new Backbone.Collection(imageData, { model: Image });
// model representing entire app, takes collection of images
var AppModel = new AppModel({ imageCollection: ImageDataCollection })
// view of entire app
var AppView = new AppView({ model: AppModel });

$('#container').append(AppView.render());
