import React, { useState } from 'react';
import './App.css';
import authService from './services/authService';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await authService.register(name, email, password);
      setMessage(response.message);
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await authService.login(email, password);
      setMessage(`Welcome ${response.token ? 'Back!' : 'Invalid credentials!'}`);
    } catch (error) {
      setMessage('Login failed');
    }
  };

  return (
    <div className="App">
      <h2>Authentication</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
