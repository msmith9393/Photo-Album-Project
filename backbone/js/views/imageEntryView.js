var ImageEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="img-entry"><%=title%></td>'),

  events: {
    'click': 'handleClick'
  },

  handleClick: function() {
    this.model.displayImage();
  },

  initialize: function() {
    this.model.on('toggle:currentImage', this.render, this);
  },

  render: function() {
    // this.delegateEvents();
    return this.$el.html(this.template(this.model.attributes));
  }
});