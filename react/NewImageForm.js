class NewImageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      title: ''
    }
  }

  linkState(type, e) {
    const value = e.target.value;
    this.setState({
      [type]: value
    });
  }

  savePhoto() {
    const {
      url,
      title
    } = this.state;

    this.props.addNewImage(url, title);
  }

  render() {
    return (
      <div className="new-image-form">
        <label>Image Link: <input type="text" onChange={this.linkState.bind(this, 'url')} /></label>
        <label className="img-form">Image Title: <input type="text" onChange={this.linkState.bind(this, 'title')} /></label>

        <button onClick={this.savePhoto.bind(this)}>Save Photo</button>
      </div>
    )
  }
}

window.NewImageForm = NewImageForm;