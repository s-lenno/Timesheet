import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform authentication logic (replace with your actual authentication code)
    try {
      // Assuming onLogin is a function that handles authentication
      await onLogin(username, password);

      // Redirect to the main menu upon successful login
      history.push('/main');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., show error message)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
