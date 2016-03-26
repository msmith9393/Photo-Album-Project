var ImageTableView = Backbone.View.extend({
  
  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<th class="image-title">Images</th>');
    this.collection.each(function(imageModel) {
      this.$el.append(new ImageEntryView({model: imageModel}).$el);
    }, this);

    return this;
  }

});