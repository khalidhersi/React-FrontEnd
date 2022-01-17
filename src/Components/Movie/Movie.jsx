import "./Movie.scss";

const Movie = (props) => {
  const {
    imageURL,
    movieName,
    realeaseDate,
    rating
  } = props.movie;

  return (
    <div className="movie">
      <h3>{movieName}</h3>
      <img src={imageURL} alt="movie poster" className="movie__poster" />
      <h4>Realeased on the: {realeaseDate}</h4>
      <h4>Rated: {rating}/10</h4>
    </div>
  )
}

export default Movie
