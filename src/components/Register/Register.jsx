import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React from "react";
import axios from "axios";

function Register() {
  const history = useHistory();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    axios.post("/api/routes/register", user)
    .then(() => history.push("/login"));
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setUser({ ...user, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setUser({ ...user, password: e.target.value });
  };

  return (
    <form className="form-horizontal" id="form">
      <fieldset>
        <div id="legend">
          <legend className="">Register</legend>
        </div>
        <div className="control-group">
          <label className="control-label" name="email">
            Email
          </label>
          <div className="controls">
            <input
              type="text"
              id="name"
              name="email"
              placeholder=""
              className="input-xlarge"
              onChange={handleEmailChange}
            />
            <p className="help-block"></p>
          </div>
        </div>

        <div className="control-group">
          <label className="control-label" name="password">
            Password
          </label>
          <div className="controls">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=""
              className="input-xlarge"
              onChange={handlePasswordChange}
            />
            <p className="help-block"></p>
          </div>
        </div>

        <div className="control-group">
          <div className="controls">
            <Link className="btn btn-success" onClick={handleClick}>
              Register
            </Link>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default Register;
