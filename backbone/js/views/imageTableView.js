var ImageTableView = Backbone.View.extend({
  
  tagName: 'table',

  initialize: function() {
    // console.log('this.collection', this.collection);
    this.render();
    // this.listenTo(this.collection, '')
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th class="image-title">Images</th>')
      .append(this.collection.map(function(imageModel) {
        return new ImageEntryView({model: imageModel}).render();
      })
    );
  }




  //   this.collection.each(function(imageModel) {
  //     var newImage = new ImageEntryView({model: imageModel}).render();
  //     this.$el.append(newImage);
  //     // newImage.delegateEvents();
  //   }, this);
  //   return this;
  // }

});