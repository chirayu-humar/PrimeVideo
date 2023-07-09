// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {details} = props
  return (
    <div className="MovieItemOuter">
      {/* <button type="button">
        <img className="ItemImage" src={details.thumbnailUrl} />
      </button> */}
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img
              alt="thumbnail"
              className="ItemImage"
              src={details.thumbnailUrl}
            />
          </button>
        }
      >
        {close => (
          <div className="outerPopup">
            <div className="upperOuterPopup">
              <button
                data-testid="closeButton"
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="bottomOuterPopup">
              <ReactPlayer url={details.videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
