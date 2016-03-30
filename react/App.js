var imageData = [
  {
    title: 'Fish',
    url: 'http://tinyurl.com/n4vgcl5',
    rating: 5
  },
  {
    title: 'Octopus',
    url: 'http://tinyurl.com/kxd7cuu',
    rating: 4
  },
  {
    title: 'Ocean',
    url: 'http://tinyurl.com/zgs7z2s',
    rating: 3
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: imageData,
      currentImageIndex: 0
    };
  }

  updateCurrentImage(index) {
    this.setState({
      currentImageIndex: index
    });
  }

  updateImageRating(index, newRating) {
    const nextImages = this.state.images.slice();
    nextImages[index].rating = newRating;

    this.setState({
      images: nextImages
    });
  }

  addNewImage(url, title) {
    const nextImages = this.state.images.slice();
    const newImage = {
      url,
      title,
      rating: 5
    };

    nextImages.push(newImage);
    this.setState({
      images: nextImages
    });
  }

  render() {
    const {
      images,
      currentImageIndex
    } = this.state;

    return (
      <div>
        <h3>Photo Library App</h3>

        <NewImageForm addNewImage={this.addNewImage.bind(this)} />

        <div>
          <div className="image-table-panel">
            <ImageTable
              updateCurrentImage={this.updateCurrentImage.bind(this)}
              imageData={images} />
          </div>

          <ImageDisplay
            image={images[currentImageIndex]}
            updateImageRating={this.updateImageRating.bind(this, currentImageIndex)} />
        </div>
      </div>
    )
  }
}

window.App = App;