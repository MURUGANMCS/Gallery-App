// Write your code here.
import './index.css'

const ThumnailItem = props => {
  const {imageData, selectedImage, selectedImageId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageData

  const getSelectImageStyle =
    selectedImageId === imageData.id ? 'selected-image' : ''

  const onClickImage = () => {
    selectedImage(imageData)
  }

  return (
    <li className="list-container">
      <button
        type="button"
        className={`btn ${getSelectImageStyle}`}
        onClick={onClickImage}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          key={id}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumnailItem
