import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import bgvideo from '../assets/carr2.mp4';

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState('');

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const response = await fetch('http://localhost/project/Project/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: loginEmail,
          password: loginPassword
        })
      });
      const data = await response.json();
      if (data.success) {
        // Login successful! Set auth state and redirect to home page
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
      } else {
        setLoginError(data.error || 'Login failed');
      }
    } catch (err) {
      setLoginError('Network error');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupError('');
    setSignupSuccess('');
    try {
      const response = await fetch('http://localhost/project/Project/api/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: signupEmail,
          password: signupPassword
        })
      });
      const data = await response.json();
      if (data.success) {
        setSignupSuccess('Registration successful! You can now log in.');
        setSignupName('');
        setSignupEmail('');
        setSignupPassword('');
      } else {
        setSignupError(data.error || 'Registration failed');
      }
    } catch (err) {
      setSignupError('Network error');
    }
  };

  return (
    <div className="video-container">
      <video autoPlay muted loop className="bg-video">
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={`form-container ${isSignUp ? 'sign-up-mode' : ''}`}>
        <div className="signin-signup-box">
          <div className="signin-form">
            <h2>Log in</h2>
            <div className="social-icons">
              <button>G+</button>
              <button>F</button>
              <button>In</button>
            </div>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
              />
              <a href="#">Forgot your password?</a>
              <button className="btn-primary" type="submit">Sign In</button>
              {loginError && <div className="error">{loginError}</div>}
            </form>
          </div>

          <div className="signup-form">
            <h2>Sign Up</h2>
            <div className="social-icons">
              <button>G+</button>
              <button>F</button>
              <button>In</button>
            </div>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Name"
                value={signupName}
                onChange={e => setSignupName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={e => setSignupEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={e => setSignupPassword(e.target.value)}
              />
              <button className="btn-primary" type="submit">Sign Up</button>
              {signupError && <div className="error">{signupError}</div>}
              {signupSuccess && <div className="success">{signupSuccess}</div>}
            </form>
          </div>
        </div>

        <div className="side-panel">
          <div className="panel-content">
            {isSignUp ? (
              <>
                <h2>Welcome Back!</h2>
                <p>To keep connected with us please login with your personal info</p>
                <button className="btn-outline" onClick={handleToggle}>Sign In</button>
              </>
            ) : (
              <>
                <h2>Hello, Friend!</h2>
                <p>Register with your personal details to use all features</p>
                <button className="btn-outline" onClick={handleToggle}>Sign Up</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
