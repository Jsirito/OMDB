import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { sendLoginRequest } from "../../state/actions/user/user";

function LogIn() {

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(sendLoginRequest(user))
      // .then(() => alert(`Success login: welcome back`))
      // .then(() => history.push("/"))
      // .catch((err) => console.log(`Failed login: ${err}`, 5));
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setUser({ ...user, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setUser({ ...user, password: e.target.value });
  };

  // const handleChange = (e) =>{
  //   setUser({...user, [e.target.name]:e.targe.value})
  // }

  return (
    <form className="form-horizontal" action="" method="POST">
      <fieldset>
        <div id="legend">
          <legend className="">LogIn</legend>
        </div>
        <div className="control-group">
          <label className="control-label" for="username">
            Email
          </label>
          <div className="controls">
            <input
              type="text"
              id="username"
              name="email"
              placeholder=""
              className="input-xlarge"
              onChange={handleEmailChange}
            />
            <p className="help-block"></p>
          </div>
        </div>

        <div className="control-group">
          <label className="control-label" for="password">
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
              LogIn
            </Link>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default LogIn;
