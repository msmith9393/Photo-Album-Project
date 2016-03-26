var ImageEntryView = Backbone.View.extend({
  
  tagName: 'tr',

  imageTemplate: _.template('<td class="img-entry"><%=title%></td>'),

  events: {
    'click': function() {
      console.log(this);
      this.model.changeImage();
    }
  },

  initialize: function() {
    this.render();
    this.model.on('toggle:description', this.render, this);
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.imageTemplate(this.model.attributes));
    return this;
  }

});