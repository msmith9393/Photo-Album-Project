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

// $(function() {
  var ImageDataCollection = new Backbone.Collection(imageData, { model: Image });
  var AppModel = new AppModel({ imageCollection: ImageDataCollection })
  var AppView = new AppView({ model: AppModel });

  $('#container').append(AppView.render());
// });
