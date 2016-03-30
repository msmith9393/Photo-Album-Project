class ImageTableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    const {
      updateCurrentImage,
      image
    } = this.props;

    return (
      <tr onClick={updateCurrentImage}>
        <td className="title">{image.title}</td>
      </tr>
    )
  }
}

// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.
window.ImageTableRow = ImageTableRow;
