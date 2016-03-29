var ImageTableView = Backbone.View.extend({
  
  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th class="image-title">Images</th>')
      .append(this.collection.map(function(imageModel) {
        return new ImageEntryView({model: imageModel}).render();
      })
    );
  }

});