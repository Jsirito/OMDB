import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Header() {
  const user = useSelector((state) => state.user);

  const handleLogout = async () => {
    await axios
      .post("http://localhost:3001/api/routes/logout")
      .then(() => alert("User Loged Out"));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          OMDB
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="container">
            {user.id ? (
              <Link className="nav-link" onClick={handleLogout}>
                LogOut
              </Link>
            ) : (
              <Link className="nav-link" to={"/login"}>
                LogIn
              </Link>
            )}
          </li>
          <li className="container">
            <Link className="nav-link" to={"/register"}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
