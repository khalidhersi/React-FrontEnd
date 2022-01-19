import "./Movie.scss";

const Movie = (props) => {
  const {
    imageURL,
    movieName,
    releaseDate,
    rating
  } = props.movie;

  return (
    <div className="movie">
      <h3>{movieName}</h3>
      <img src={imageURL} alt="movie poster" className="movie__poster" />
      <div className="text">
      <h4>Realeased on the: {releaseDate}</h4>
      <h4>Rated: {rating}/10</h4>
      </div>
    </div>
  )
}

export default Movie
