var ImageTableView = Backbone.View.extend({
  
  tagName: 'table',

  initialize: function() {
    // console.log('this.collection', this.collection);
    this.render();
    // this.listenTo(this.collection, '')
  },

  render: function() {
    this.$el.html('<th class="image-title">Images</th>');
    this.collection.each(function(imageModel) {
      var newImage = new ImageEntryView({model: imageModel}).render();
      this.$el.append(newImage);
      // newImage.delegateEvents();
    }, this);
    return this;
  }

});