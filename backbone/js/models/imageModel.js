var Image = Backbone.Model.extend({
  displayImage: function() {
    // console.log('INSIDE DISPLAY IMAGE')
    this.trigger('displayImage', this);
    this.listenTo(this.model, 'change', this.render);
  }
});