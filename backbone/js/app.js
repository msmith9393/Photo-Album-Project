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

<<<<<<< HEAD
  $('#container').append(AppView.render());
// });
||||||| merged common ancestors
$('#container').append(AppView.render());
=======
$('#container').append(AppView.$el);
>>>>>>> 203898d4e10597a32d9d98e4315ead9bc6c0b782
