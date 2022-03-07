import { useState } from "react";
import { auth } from "../Firebase.auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logoBlack.png";
import "./sass/login.scss";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((_) => {
        navigate(-1);
      })
      .catch((err) => alert(err.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((_) => {
        navigate(-1);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="amazon-logo" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInBtn">
            Sign In{" "}
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__registerBtn">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
