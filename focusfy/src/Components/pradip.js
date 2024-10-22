
import React, { useState } from 'react';
import './styles.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="left">
        <div className="form-container">
          {isLogin ? (
            <>
              <h2>Login</h2>
              <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="btn">Login</button>
                <a href="#">Forgot your password?</a>
                <p>or login with</p>
                <button className="btn google">Login with Google</button>
                <button className="btn facebook">Login with Facebook</button>
              </form>
              <p>
                By logging in, you agree to GIPHY's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
              </p>
              <p>
                Don't have an account? <span onClick={handleToggle} className="toggle-link">Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <h2>Sign Up</h2>
              <form>
              {/* <label for="email">Email:</label>
              <input type="email" id="email" name="email"/> */}
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <label>
                  <input type="checkbox" required /> I am not a robot
                </label>
                <label>
                  <input type="checkbox" required /> I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                </label>
                <button type="submit" className="btn">Sign Up</button>
              </form>
              <p>
                Already started creating an account? <span onClick={handleToggle} className="toggle-link">Finish Sign Up</span>
              </p>
            </>
          )}
        </div>
      </div>

      <div className="right">
        <video autoPlay loop muted className="background-video">
          <source src="https://media.giphy.com/login-join-backgrounds/science-logo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Login;
