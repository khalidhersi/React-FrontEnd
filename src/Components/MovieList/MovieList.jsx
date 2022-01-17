import "./MovieList.scss";
import Movie from "../Movie/Movie";

const MovieList = (props) => {
  return (
    <>
      <h2 className="heading">Enjoy All Our Movies</h2>
      <div className="container">
        {props.movie && props.movie.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    </>
  )
}

export default MovieList
