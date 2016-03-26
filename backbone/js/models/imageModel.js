var Image = Backbone.Model.extend({
  
  displayImage: function() {
    this.trigger('displayImage', this);
  }
  
  // defaults:   {
  //   title: 'DEFAULT',
  //   image: 'http://tinyurl.com/zgs7z2s',
  //   rating: '10'
  // }

});