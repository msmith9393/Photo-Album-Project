var ImageEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="img-entry"><%=title%></td>'),

  events: {
    'click': 'handleClick'
  },

  handleClick: function() {
    console.log('HELLO');
    this.model.displayImage();
  },

  initialize: function() {
    this.model.on('toggle:currentImage', this.render, this);
    // this.listenTo(this.model, 'change', this.render);
    // this.render();
  },

  render: function() {
    // this.delegateEvents();
    return this.$el.html(this.template(this.model.attributes));
  }
});