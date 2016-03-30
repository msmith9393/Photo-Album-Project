var ImageTable = ({imageData, updateCurrentImage}) => (
  <table className="table">
    <thead>
      <tr>
        <td className='img-title'>Images</td>
      </tr>
    </thead>
    <tbody>
      {imageData.map((image, index) =>
        <ImageTableRow
          key={index}
          image={image}
          updateCurrentImage={updateCurrentImage.bind(null, index)} />
      )}
    </tbody>
  </table>
);

// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.
window.ImageTable = ImageTable;
