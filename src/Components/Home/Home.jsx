import "./Home.scss";
import Carousel from "../Carousel/Carousel";
// import Movie from "../Movie/Movie";
import MovieList from "../MovieList/MovieList";

const Home = (props) => {
  const {movie} = props
  return ( <div className="home">
    <h1 className="home__c2a">Amazing Movies To Watch This Month!</h1>
    <Carousel/>
    <MovieList movie={movie}/>
    </div>
  )
}

export default Home
