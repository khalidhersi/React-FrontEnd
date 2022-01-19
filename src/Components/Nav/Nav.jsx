import "./Nav.scss";
import { Link } from "react-router-dom";
import vueLogo from "../../assets/images/Vue-logo.png";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/">
      <img src={vueLogo} alt="vue Logo" className="nav__logo" />
      </Link>
      <Link className="nav-menu__item" to="/">
        Home
      </Link>

      <Link className="nav-menu__item" to="/movielist">
        Now Showing
      </Link>

      <Link className="nav-menu__item" to="/new-movie">
        Add A Favorite Movie
      </Link>

      <Link className="nav-menu__item" to="/delete-movie">
        Add A Favorite Movie
      </Link>
    </div>
  )
}

export default Nav
