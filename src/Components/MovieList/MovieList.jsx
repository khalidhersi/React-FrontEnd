import "./MovieList.scss";
import Movie from "../Movie/Movie";

const MovieList = (props) => {
const {movie} = props

  return (
    <>
      <h2 className="heading">Enjoy All Our Movies</h2>
      <div className="container">
        {movie && movie.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    </>
  )
}

export default MovieList
