import { useState } from "react";
import "./DeleteForm.scss"

const DeleteForm  = () => {
  const [movie, setMovie] = useState({
    movieName: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/movielist/{id}', {
      method: 'DELETE',
    })
    .then(() => this.setMovie({ status: 'Delete successful' }))
  }

  return (
    <div className="log-form">
      <h2>Delete A Movie</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="By Movie Id" onInput={(e) => setMovie({ ...movie, imageURL: e.target.value })} />
        <input type="text" placeholder="By Movie Name"  onInput={(e) => setMovie({ ...movie, movieName: e.target.value })} />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default DeleteForm ;