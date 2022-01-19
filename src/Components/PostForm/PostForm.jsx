import { useState } from "react";
import "./PostForm.scss";

const PostForm = () => {
  const [movie, setMovie] = useState({
    imageURL: "",
    movieName: "",
    rating: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/movie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(error => console.log(error))
    e.target.reset();
  }

  return (
    <div className="log-form">
      <h2>Add A New Movie</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Movie Image URL" onInput={(e) => setMovie({ ...movie, imageURL: e.target.value })} />
        <input type="text" placeholder="Movie" required onInput={(e) => setMovie({ ...movie, movieName: e.target.value })} />
        <input type="text" placeholder="Rating Out of 10" onInput={(e) => setMovie({ ...movie, rating: e.target.value })} />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;