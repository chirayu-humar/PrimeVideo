// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const ActionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const ComedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-container">
      {/* first div */}
      <div className="upperBanner">
        <img
          alt="prime video"
          className="bannerImage"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        />
      </div>
      {/* second div */}
      <div className="firstContainer">
        <h1>Action Movies</h1>
        <MoviesSlider moviesList={ActionMoviesList} />
      </div>
      {/* third div */}
      <div className="secondContainer">
        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={ComedyMoviesList} />
      </div>
      {/* fourth div */}
    </div>
  )
}

export default PrimeVideo
