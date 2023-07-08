// Write your code here
import './index.css'

const MovieItem = props => {
  const {details} = props
  return (
    <div className="MovieItemOuter">
      <img className="ItemImage" src={details.thumbnailUrl} />
    </div>
  )
}

export default MovieItem
