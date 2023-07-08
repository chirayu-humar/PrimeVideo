// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  console.log(moviesList)
  return (
    <Slider>
      {moviesList.map(eachItem => (
        <MovieItem details={eachItem} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
