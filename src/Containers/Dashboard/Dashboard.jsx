import { useState, useEffect } from "react";
import "./Dashboard.scss";
import MovieList from "../../Components/MovieList/MovieList";
import Form from "../../Components/Form/Form";
import Home from "../../Components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

const Dashboard = () => {
const [movie, setMovie] = useState([])

  const getMovie = () => {
    fetch("http://localhost:8080/movielist")
    .then(response => response.json()
    .then(result => setMovie(result))
    .catch(error => console.log(error)))
  }

  useEffect(() => {
    getMovie();
  }, [movie])

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home movie={movie}/>} />
        <Route path="/movielist" element={<MovieList movie={movie} />} />
        <Route path="/new-movie" element={<Form />} />
      </Routes>
    </Router>
  )
}

export default Dashboard
