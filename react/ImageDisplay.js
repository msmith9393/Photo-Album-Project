class ImageDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      image: {
        url,
        rating,
        title
      },
      updateImageRating
    } = this.props;

    return (
      <div className="image-display-panel">
        <img src={url} />
        <div>
          <span className="image-display-title">{title}</span>
          <span className="rating">{rating} out of 5</span>

          <select
            className="drop-down"
            value={rating}
            onChange={e => {
              updateImageRating(e.target.value);
            }}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </div>
    )
  }
}

window.ImageDisplay = ImageDisplay;