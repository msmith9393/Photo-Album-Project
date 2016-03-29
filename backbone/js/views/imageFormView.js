var ImageFormView = Backbone.View.extend({

  className: 'new-image-form',

  initialize: function() {
    // this.collection.on('addImage', this.render, this);
    this.render();
  },

  event: {
    'submit #submit': 'handleSubmit'
  },

  handleSumbit: function(e) {
    e.preventDefault();
    console.log('HELLO IN HANDLE SUBMIT');
  },

  render: function() {
    this.$el.children().detach();
    this.$el.append('<form id="submit"><label>Image Link: <input type="text" /></label><label class="img-form">Image Title: <input type="text" /></label><button>Save Photo</button></form>')
      .append('<select class="drop-down"><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option></select>');

    // .append(<select
    //         className="drop-down"
    //         value={rating}
    //         onChange={e => {
    //           updateImageRating(e.target.value);
    //         }}>
    //         <option value={1}>1</option>
    //         <option value={2}>2</option>
    //         <option value={3}>3</option>
    //         <option value={4}>4</option>
    //         <option value={5}>5</option>
    //       </select>);


    // render: function() {
    //   this.$el.children().detach();
    //   this.$el.html('<th class="image-title">Images</th>')
    //     .append(this.collection.map(function(imageModel) {
    //       return new ImageEntryView({model: imageModel}).render();
    //     })
    //   );
    // }




  }
});